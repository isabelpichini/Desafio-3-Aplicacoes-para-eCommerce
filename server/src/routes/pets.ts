import express, { Request, Response } from "express";
import db from "../db";

const router = express.Router();

router.get("/", async (req, res) => {
  const { limit, colors, gender, size, minPrice, maxPrice } = req.query;

  let query = "SELECT * FROM pets";
  const conditions: string[] = [];
  const values: any[] = [];

  console.log(conditions);

  if (colors) {
    const colorList = (colors as string).split(",");
    const colorConditions = colorList.map(
      (_, i) => `color ILIKE $${values.length + i + 1}`
    );
    conditions.push(`(${colorConditions.join(" OR ")})`);
    values.push(...colorList.map((c) => `%${c}%`));
  }

  if (gender) {
    const genderList = (gender as string).split(",");
    const genderConditions = genderList.map(
      (_, i) => `gender = $${values.length + i + 1}`
    );
    conditions.push(`(${genderConditions.join(" OR ")})`);
    values.push(...genderList);
  }

  if (size) {
    const sizeList = (size as string).split(",");
    const sizeConditions = sizeList.map(
      (_, i) => `size = $${values.length + i + 1}`
    );
    conditions.push(`(${sizeConditions.join(" OR ")})`);
    values.push(...sizeList);
  }

  if (minPrice) {
    values.push(minPrice);
    conditions.push(`price >= $${values.length}`);
  }

  if (maxPrice) {
    values.push(maxPrice);
    conditions.push(`price <= $${values.length}`);
  }

  if (conditions.length > 0) {
    query += " WHERE " + conditions.join(" AND ");
  }

  if (limit) {
    const limitValue = parseInt(limit as string);
    if (!isNaN(limitValue)) {
      query += " LIMIT $1";
      values.unshift(limitValue);
    }
  }

  try {
    const result = await db.query(query, values);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database query failed" });
  }
});

router.get("/:sku", async (req, res) => {
  const { sku } = req.params;

  try {
    const result = await db.query("SELECT * FROM pets WHERE sku = $1", [sku]);

    if (result.rows.length === 0) {
      res.status(404).json({ error: "Pet not found" });
      return;
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
