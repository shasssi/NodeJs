const request = require("supertest");
const app = require("../app");
const User = require("../models/user");

jest.mock("../middlewares/auth", () => ({
  verifyToken: (_, __, next) => next(),
}));

describe("user controller", () => {
  it("fetch all users", async () => {
    jest.spyOn(User, "find").mockResolvedValueOnce([
      {
        _id: "12345",
        name: "qwerty",
      },
    ]);
    const res = await request(app).get("/api/users");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
  });
});
