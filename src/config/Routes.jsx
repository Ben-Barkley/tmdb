import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Details from "../pages/details/Details";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/:category/search/:keyword" element={<Catalog />} />
      <Route path="/:category/:id" element={<Details />} />
      <Route path="/:category" element={<Catalog />} />
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
