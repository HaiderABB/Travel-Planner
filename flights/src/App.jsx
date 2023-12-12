import React from "react";
import Flights from "./Pages/Flights";
import Hotels from "./Pages/Hotels";
import Landing2 from "./Pages/Landing2";
import Landing1 from "./Pages/Landing1";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing1 />}></Route>
          <Route path="/2" element={<Landing2 />}></Route>
          <Route path="/transport" element={<Flights />}></Route>
          <Route path="/hotels" element={<Hotels />}></Route>
        </Routes>
      </BrowserRouter>
      <Outlet />
    </>
    // <Flights></Flights>
    // <Hotels></Hotels>
    // <Landing1></Landing1>
    // <Landing2></Landing2>
  );
};

export default App;
