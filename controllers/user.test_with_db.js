const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");

require("dotenv").config();

/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URL);
});

/* Dropping the database and closing connection after each test. */
afterEach(async () => {
  // await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe("user controller", () => {
  it("fetch all users", async () => {
    const res = await request(app).get("/api/users");
    console.log(res.body);
    expect(res.statusCode).toBe(401);
  });
});
