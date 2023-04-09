import { BrowserRouter, Route, Routes } from "react-router-dom";
import Budget from "./Budget";
import Home from "./Home";

const Routing = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/Budget" element={<Budget />} />
    </Routes>
  </BrowserRouter>
  )
};

export default Routing;
