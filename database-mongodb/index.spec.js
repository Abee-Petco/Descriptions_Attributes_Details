const mongoose = require('mongoose');
const db = require('./index.js');
const Mockgoose = require('mockgoose').Mockgoose;
const mockgoose = new Mockgoose(mongoose);

const postData = {
  itemId: '50',
  title: 'Dead Astronauts',
  description: 'Once upon a time in the city of Los Angeles',
  SKU: '6666666',
  primaryBrand: 'Gucci',
  daysToShip: 'Ships in 365 business days',
  directions: 'Just a toot past the watering hole',
  primaryColor: 'coral',
  material: 'Melted',
  length: '7 IN',
  width: '7 IN',
  additionalDetails: 'Loves long walks on the beach',
};

const putData = {"title": "TheShining"};

const putResult = {
  itemId: '50',
  title: 'The Shining',
  description: 'Once upon a time in the city of Los Angeles',
  SKU: '6666666',
  primaryBrand: 'Gucci',
  daysToShip: 'Ships in 365 business days',
  directions: 'Just a toot past the watering hole',
  primaryColor: 'coral',
  material: 'Melted',
  length: '7 IN',
  width: '7 IN',
  additionalDetails: 'Loves long walks on the beach',
};


describe('Mongoose', () => {
  // beforeEach(async (done) => {
  //   mockgoose.helper.reset().then(() => {
  //     done()
  // });
  // })
  afterAll(() => {
    mongoose.connection.close()
  })
  xit('should have methods for retrieving item docs', async (done) => {
    expect(db.getTitleAndBrand).toBeDefined()
    expect(db.getDescriptionObject).toBeDefined()
    
    db.getDescriptionObject(105)
      .then(data => {
        expect(data[0].title).toBe('IpsumLorem Plush Bunny with Squeaker');
        expect(data[0].itemId).toBe('105');
        done()
      }) 
    })
    it('should have methods for posting item docs', async (done) => {
      expect(db.postDescriptionObject).toBeDefined()
      
      db.postDescriptionObject(postData)
      .then(data => {
        expect(data.itemId).toBe('50');
        return db.getDescriptionObject(50);
      })
      .then(doc => {
        expect(doc[0].itemId).toBe('50');
        expect(doc[0]).toMatchObject(postData);
        done();
      })
    })
    it('should have methods for putting item docs', async (done) => {
      expect(db.putDescriptionObject).toBeDefined()
      
      db.postDescriptionObject(postData)
      .then(results => {
        expect(results).toBeDefined();
        return db.putDescriptionObject(50, putData);
      })
      .then(doc => {
        expect(doc.title).toBe('The Shining');
      })
    })
    it('should have methods for deleting item docs', async (done) => {
      expect(db.deleteDescriptionObject).toBeDefined()

    db.postDescriptionObject(postData)
      .then(results => {
        return db.getDescriptionObject('50');
      })
      .then(doc => {
        expect(doc[0]).toBeDefined();
        return db.deleteDescriptionObject('50');
      })
      .then(deleted => {
        expect(deleted.itemId).toBe('50');
        return db.getDescriptionObject('50');
      })
      .then(erasedDoc => {
        expect(erasedDoc[0]).toBeUndefined();
        done();
      })
  })
})