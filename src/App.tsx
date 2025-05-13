import "./App.css";
import Header from "./components/static/Header";
import Footer from "./components/static/Footer";
import Hero from "./components/homepage/Hero";
import NewPets from "./components/homepage/NewPets";
import Banner1 from "./components/homepage/Banner1";
import Products from "./components/homepage/Products";
import Sellers from "./components/homepage/Sellers";
import Banner2 from "./components/homepage/Banner2";
import Blog from "./components/homepage/Blog";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <NewPets />
      <Banner1 />
      <Products />
      <Sellers />
      <Banner2 />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
