import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Shop from './pages/Shop'
import Detail from './pages/Detail'
// import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop/:type" element={<Shop />} />
      <Route path="/pets/:sku" element={<Detail />} />
      <Route path="/product/:sku" element={<Detail />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
