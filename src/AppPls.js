import React from "react";
import Navbar1 from "./PLS Construction/Navbar1";
import Contentbar1 from "./PLS Construction/Contentbar1";
import Footer1 from "./PLS Construction/Footer1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./PLS Construction/Services";
import Pricing from "./PLS Construction/Pricing";
const AppPls = () => {
  return (
    <div className="w-[99%] relative">
      <div className="sticky z-10 top-0">
        <Navbar1 />
      </div>
      {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<Contentbar1 />} />
          <Route path="/service" element={<Services />} />
          <Route path="/price" element={<Pricing />} />
        </Routes>
      {/* </BrowserRouter> */}

      <Footer1 />
    </div>
  );
};

export default AppPls;
