import express from "express";
import db from "../db";

const router = express.Router();

router.get("/", async (req, res) => {
  const { limit, types, minPrice, maxPrice } = req.query;
  let query = "SELECT * FROM products";
  const conditions: string[] = [];
  const values: any[] = [];

  if (types) {
    const typeList = (types as string).split(",");
    const typeConditions = typeList.map(
      (_, i) => `product_type::text ILIKE $${values.length + i + 1}`
    );
    conditions.push(`(${typeConditions.join(" OR ")})`);
    values.push(...typeList.map((t) => `%${t}%`));
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
    console.log(err);
    res.status(500).send("Failed to fetch.");
  }
});

router.get("/:sku", async (req, res) => {
  const { sku } = req.params;

  try {
    const result = await db.query("SELECT * FROM products WHERE sku = $1", [
      sku,
    ]);

    if (result.rows.length === 0) {
      res.status(404).json({ error: "Product not found" });
      return;
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
