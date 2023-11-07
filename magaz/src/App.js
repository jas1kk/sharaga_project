import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SingleProduct from "./pages/SingleProduct";
import ProductList from "./pages/ProductList";
import CartContainer from "./pages/CartContainer";
import Complaint from "./pages/ComplaintBook"



function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/complaint" element={<Complaint />} />
      </Routes>
    </div>
  );
}

export default App;
