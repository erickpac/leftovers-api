import express, { Application } from "express";
import cors from "cors";
import setRoutes from "./router";
import "dotenv/config";

const app: Application = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

setRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
