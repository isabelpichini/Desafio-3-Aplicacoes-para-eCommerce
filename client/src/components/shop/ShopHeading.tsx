import { useParams } from "react-router-dom";
import { InlineIcon } from "@iconify/react";
import "./ShopHeading.css";

export default function ShopHeading() {
  const { type } = useParams();

  return (
    <section id="category-heading">
      <div className="backlinks body-s">
        <a href="/">Home</a>
        <InlineIcon icon="ci:chevron-right-md" width={24} />
        {type === "pets" ? (
            <a href="/shop/pets">Pets</a>
        ) : (
            <a href="/shop/products">Products</a>
        )}
      </div>
      <div className="heading-banner">Banner AQUI</div>
    </section>
  );
}
