import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import ProductDetails from "./components/product/ProductDetails";
import Search from "./components/search/Search";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='container container-fluid'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails/>} />
          <Route path="/search/:keyword" element={<Home/>} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
