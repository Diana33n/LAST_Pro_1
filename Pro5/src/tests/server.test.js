const request = require('supertest');
const application = require('../src/backend/backend');

test("Test /getTrip route", async () => {
    const response = await request(application)
        .post('/getTrip')
        .send({ city: "Paris", date: "2025-06-15" });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("city", "Paris");
    expect(response.body.weather).toHaveProperty("description");
});
