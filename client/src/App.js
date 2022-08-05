import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='container container-fluid'>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
