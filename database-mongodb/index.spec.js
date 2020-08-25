const db = require('./index.js');
const mongoose = require('mongoose');

describe('Mongoose', () => {
  afterAll(() => {
    mongoose.connection.close()
  })
  it('should have methods for retrieving item docs', async (done) => {
    expect(db.getTitleAndBrand).toBeDefined()
    expect(db.getDescriptionObject).toBeDefined()
    done()
  })
  it('should have methods for posting item docs', async (done) => {
    expect(db.postDescriptionObject).toBeDefined()
    done()
  })
  it('should have methods for putting item docs', async (done) => {
    expect(db.putDescriptionObject).toBeDefined()
    done()
  })
  it('should have methods for deleting item docs', async (done) => {
    expect(db.deleteDescriptionObject).toBeDefined()
    done()
  })
})