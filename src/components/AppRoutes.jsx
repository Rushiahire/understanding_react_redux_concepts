import React from "react";
import { Routes, Route } from "react-router-dom";
import DataFile from "./DataFile";
import Home from './Home';
import AddData from "./AddData";
import ViewAllData from "./ViewAllData";
import CheckOutPage from "./shipping/CheckOutPage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path='/data'  element={<DataFile/>} />
        <Route path='/addData'  element={<AddData/>} />
        <Route path='/viewData'  element={<ViewAllData/>} />
        <Route path='/shipping'  element={<CheckOutPage/>} />
      </Routes>
    </>
  );
};

export default AppRoutes;
