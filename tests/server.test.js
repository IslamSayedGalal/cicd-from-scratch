const request = require("supertest");
const app = require("../server.js");

describe("GET /", () => {
  it("should return Hello YouTube", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello YouTube");
  });
});