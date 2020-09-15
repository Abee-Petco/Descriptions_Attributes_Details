const supertest = require('supertest');
const app = require('./server.js');
const request = supertest(app);

const postData = {
  itemId: '20',
  description: {
    title: 'Fear and Loathing',
    description: 'Once upon a time in the city of Los Angeles',
    SKU: '6666666',
    'Primary Brand': 'Gucci',
    daysToShip: 'Ships in 365 business days',
  },
  directions: {
    directions: 'Just a toot past the watering hole',
  },
  attributes: {
    primaryColor: 'coral',
    material: 'Melted',
    length: '7 IN',
    width: '7 IN',
  },
  details: {
    additionalDetails: 'Loves long walks on the beach',
  },
};

const putData = {
  itemId: '300',
  description: {
    title: 'Dead Astronauts',
    description: 'Once upon a time in the city of Los Angeles',
    SKU: '6666666',
    'Primary Brand': 'Gucci',
    daysToShip: 'Ships in 365 business days',
  },
  directions: {
    directions: 'Just a toot past the watering hole',
  },
  attributes: {
    primaryColor: 'coral',
    material: 'Melted',
    length: '7 IN',
    width: '7 IN',
  },
  details: {
    additionalDetails: 'Loves long walks on the beach',
  },
};;

describe('CRUD Routes', () => {
  it('should respond with descriptions data at itemIds 100-200', async (done) => {
    const res = await request.get('/descriptionObject/116');

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('description');
    expect(res.body).toHaveProperty('attributes');
    expect(res.body).toHaveProperty('directions');
    expect(res.body).toHaveProperty('details');
    done();
  });

  it('should return a 404 error for any itemIds not at 100-10000100', async (done) => {
    const res = await request.get('/descriptionObject/16');
    expect(res.status).toBe(404);

    done();
  });

  it('should post data at descriptionObject route', async (done) => {
    const res = await request.post('/descriptionObject').send(postData);
    expect(res.status).toBe(201);

    const resGET = await request.get('/descriptionObject/20');
    expect(resGET.body).toBeDefined();

    await request.delete('/descriptionObject/20')

    done();
  });

  it('should put data at descriptionObject route', async (done) => {
    const res = await request.put('/descriptionObject/66').send(postData);
    expect(res.status).toBe(200);

    const resGET = await request.get('/descriptionObject/66');
    console.log('*******************', resGET.body);
    expect(resGET.body.description.title).toBe('Dead Astronauts');

    done();
  });

  it('should delete data at descriptionObject route', async (done) => {
    const res = await request.delete('/descriptionObject/300');
    expect(res.status).toBe(200);

    const resGET = await request.get('/descriptionObject/300');
    expect(resGET.body.description).toBeUndefined();
    expect(resGET.body.attributes).toBeUndefined();
    expect(res.body.directions).toBeUndefined();
    expect(resGET.body.details).toBeUndefined();

    done();
  });
});
