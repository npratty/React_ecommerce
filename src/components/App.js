import "../App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />

        {/* <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product" element={<Product />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
