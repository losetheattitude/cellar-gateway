import express, { Request, Response, Application } from "express";
const app: Application = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response): void => {
  res.send("Hello Typescript with Node.js!");
});

app.get("/test", (req: Request, res: Response): void => {
  res.send("Test!");
});

app.listen(PORT, (): void => {
  console.log(`Server Running ashere 👉 https://localhost:${PORT}`);
});
