import { InlineIcon } from "@iconify/react";
import { type Product } from "../../types/Product";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api/axios";
import ProductCard from "../static/ProductCard";
import "./Products.css";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get<Product[]>("/products?limit=8")
      .then((res: { data: Product[] }) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err: unknown) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading heading-s">Loading...</div>;
  }

  return (
    <section id="products">
      <div className="products-wrapper">
        <div className="products-header">
          <div className="products-heading">
            <p className="body-m">
              Hard to choose the right products for your pets?
            </p>
            <h2 className="heading-xs bold">Our Products</h2>
          </div>
          <button className="button-outline">
            <Link to="/shop/products">View more</Link>
            <InlineIcon icon="ci:chevron-right-md" width={18} />
          </button>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.sku} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
