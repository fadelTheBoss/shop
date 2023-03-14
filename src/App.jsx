import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Shop from "./pages/Shop";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="border border-gray-500">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Shop />} />
          <Route path="/cart" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
