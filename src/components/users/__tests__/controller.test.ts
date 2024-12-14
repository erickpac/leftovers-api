import request from "supertest";
import express from "express";
import * as controller from "../controller";
import * as service from "../service";

jest.mock("../service");

const app = express();
app.get("/users", controller.getUsers);

describe("Users Controller", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("GET /users", () => {
    const mockUsers = [{ id: 1, name: "John Doe" }];
    const errorMessage = "An error occurred";

    it("should return a list of users", async () => {
      (service.getUsers as jest.Mock).mockResolvedValue(mockUsers);

      const response = await request(app).get("/users");

      expect(response.status).toBe(200);
      expect(response.body.data).toEqual(mockUsers);
    });

    it("should handle errors", async () => {
      (service.getUsers as jest.Mock).mockRejectedValue(
        new Error(errorMessage),
      );

      const response = await request(app).get("/users");

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: errorMessage });
    });
  });
});
