const supertest = require('supertest');
const app = require('./server.js');
const request = supertest(app);
const { postData, putData } = require('./serverMocks.js')

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

    const resGET = await request.get('/descriptionObject/66');
    expect(resGET.body).toBeDefined();

    done();
  });

  it('should put data at descriptionObject route', async (done) => {
    const res = await request.put('/descriptionObject/66').send(putData);
    expect(res.status).toBe(200);

    const resGET = await request.get('/descriptionObject/66');
    expect(resGET.body.description.title).toBe('Dead Astronauts');

    done();
  });

  it('should delete data at descriptionObject route', async (done) => {
    const res = await request.delete('/descriptionObject/66');
    expect(res.status).toBe(200);

    const resGET = await request.get('/descriptionObject/66');
    expect(resGET.body.description).toBeUndefined();
    expect(resGET.body.attributes).toBeUndefined();
    expect(res.body.directions).toBeUndefined();
    expect(resGET.body.details).toBeUndefined();

    done();
  });
});
