const mongoose = require('mongoose');
const db = require('./index.js');
const { postData, postRes, putData, putResult } = require('./mocks.js')

describe('Mongoose', () => {
  afterAll(() => {
    mongoose.connection.close();
  });
  it('should have methods for retrieving item docs and their subdocs', async (done) => {
    expect(db.getTitleAndBrand).toBeDefined();
    expect(db.getDescriptionObject).toBeDefined();

    db.getDescriptionObject(105).then((data) => {
      expect(data[0]).toHaveProperty('description');
      expect(data[0]).toHaveProperty('attributes');
      expect(data[0]).toHaveProperty('details');
      expect(data[0]).toHaveProperty('directions');
      done();
    });
  });
  it('should have methods for posting item docs', async (done) => {
    expect(db.postDescriptionObject).toBeDefined();

    db.postDescriptionObject(50, postData)
      .then((data) => {
        expect(data).toBeDefined();
        return db.getDescriptionObject(50);
      })
      .then((doc) => {
        expect(doc[0]).toMatchObject(postRes);
        done();
      });
  });
  it('should have methods for putting item docs', async (done) => {
    expect(db.putDescriptionObject).toBeDefined();

    db.postDescriptionObject(50, postData)
      .then((results) => {
        expect(results).toBeDefined();
        return db.putDescriptionObject(50, putData);
      })
      .then((doc) => {
        return db.getDescriptionObject(50);
      })
      .then((newDoc) => {
        expect(newDoc[0].description.title).toBe('The Shining');
        expect(newDoc[0]).toMatchObject(putResult);
        done();
      });
  });
  it('should have methods for deleting item docs', async (done) => {
    expect(db.deleteDescriptionObject).toBeDefined();

    db.postDescriptionObject(50, postData)
      .then((results) => {
        return db.getDescriptionObject('50');
      })
      .then((doc) => {
        expect(doc[0]).toBeDefined();
        return db.deleteDescriptionObject('50');
      })
      .then((deleted) => {
        expect(deleted.deletedCount).toEqual(1);
        return db.getDescriptionObject('50');
      })
      .then((erasedDoc) => {
        expect(erasedDoc.length).toEqual(0);
        expect(erasedDoc[0]).toBeUndefined();
        done();
      });
  });
});
