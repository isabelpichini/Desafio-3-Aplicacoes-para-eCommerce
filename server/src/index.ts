import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import petsRouter from "./routes/pets";
import productsRouter from "./routes/products";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/pets", petsRouter);
app.use("/api/products", productsRouter);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
