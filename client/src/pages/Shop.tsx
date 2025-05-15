import { useParams } from "react-router-dom";
import Header from "../components/static/Header";
import ShopHeading from "../components/shop/ShopHeading";
import PetGrid from "../components/shop/PetGrid";
import ProductGrid from "../components/shop/ProductGrid";
import Footer from "../components/static/Footer";
import "./Shop.css";

export default function Shop() {
  const { type } = useParams();

  return (
    <>
      <Header />
      <ShopHeading />
      <div className="filter-products">
        {type === "pets" ? <PetGrid /> : <ProductGrid />}
      </div>
      <Footer />
    </>
  );
}
