import { useState } from "react";
import { type Product } from "../../types/Product";
import ProductFilter from "./ProductFilter";
import ProductCard from "../static/ProductCard";
import "./Grid.css";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <div className="page">
      <aside className="filters-section">
        <ProductFilter onProductsUpdate={setProducts} />
      </aside>
      <main className="grid">
        {products.map((product) => (
          <ProductCard key={product.sku} product={product} />
        ))}
      </main>
    </div>
  );
}
