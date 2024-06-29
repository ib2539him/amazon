
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Review from "./components/Review/Review";
import Inventory from "./components/Inventory/Inventory";


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
