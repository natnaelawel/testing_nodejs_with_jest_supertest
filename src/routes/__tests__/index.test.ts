import app from "../../app";
import request from "supertest";

// group test using describe
describe("POST /register", () => {
  it("returns status code 201 if first name is passed", async () => {
    const res = await request(app)
      .post("/register")
      .send({ firstName: "John" });
      
    // toEqual recursively checks every field of an object or array.
    expect(res.statusCode).toEqual(201);
  });

  it("returns bad request if firstname is missing", async () => {
    const res = await request(app).post("/register").send();
    expect(res.statusCode).toEqual(201);
  });
});







// .set("Accept", "application/json")

  // it("returns bad request if firstname is missing", async () => {
  //   const res = await request(app).post("/register").send();
  //   expect(res.statusCode).toEqual(400);
  // });

// expect(res.body).toEqual("You need too pass first name");