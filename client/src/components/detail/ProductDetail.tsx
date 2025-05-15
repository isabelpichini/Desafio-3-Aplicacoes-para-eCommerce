import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api/axios";
import formatVND from "../../utils/FormatVND";
import { type Product } from "../../types/Product";

const ProductDetails = () => {
  const { sku } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (sku) {
      const encodedSku = encodeURIComponent(sku);
      api
        .get<Product>(`/products/${encodedSku}`)
        .then((res) => setProduct(res.data))
        .catch((err) => console.error(err));
    }
  }, [sku]);

  if (!product) return <p>Loading product details...</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Age: {product.size}</p>
      <p>price: {formatVND(product.price)} VND</p>
      {/* Render the rest of the product info */}
    </div>
  );
};

export default ProductDetails;
