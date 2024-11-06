import { Router } from "express";

// /order
export const orderRouter = Router();

// Standardroute für (GET) /order
orderRouter.get("/", (request, response) => response.send("(GET) /order"));

orderRouter.get("/:id", (request, response) =>
  response.send("(GET) /order/:id")
);

//Standardroute für (POST) /order
orderRouter.post("/", (request, response) => response.send("(POST) /order"));

orderRouter.put("/:id", (request, response) =>
  response.send("(PUT) /order/:id")
);
orderRouter.delete("/:id", (request, response) =>
  response.send("(DELETE) /order/:id")
);
