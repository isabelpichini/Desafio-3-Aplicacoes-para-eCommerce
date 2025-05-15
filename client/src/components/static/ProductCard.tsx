import { type Product } from "../../types/Product";
import BannerIcon from "../../assets/mon_product-banner-icon.svg";
import "./ProductCard.css";
import formatVND from "../../utils/FormatVND";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const encodedSKU = encodeURIComponent(product.sku);

  return (
    <a href={`/product/${encodedSKU}`}>
      <article className="product-card shadow">
        <div className="img-container">
          <img src={product.image_url} alt="" />
        </div>
        <div className="product-info">
          <h3 className="body-m bold">{product.name}</h3>
          <div className="product-details body-xs">
            <p>
              Product:{" "}
              <span className="bold product-type">{product.product_type}</span>
            </p>
            {product.size && (
              <div className="optional-details">
                •
                <p>
                  Size: <span className="bold">{product.size}</span>
                </p>
              </div>
            )}
          </div>
          <p className="body-s bold">{formatVND(product.price)} VND</p>
          <div className="product-banner">
            <img src={BannerIcon} />•
            <p className="body-s bold">Free Toy & Free Shaker</p>
          </div>
        </div>
      </article>
    </a>
  );
}
