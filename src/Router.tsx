import React from "react";
import { Routes, Route } from "react-router-dom";
import { RouterLayout } from "./common/RouterLayout";
import { Home } from "./pages/Home";
import { ProductDetail } from "./pages/ProductDetail";

export const AppRouter: React.FC<{}> = () => {
    return (
        <Routes>
            <Route path="/" element={<RouterLayout />}>
                <Route path="/" element={<Home/>} ></Route>
                <Route path="/inicio" element={<Home/>} ></Route>
                <Route path="/productDetail" element={<ProductDetail/>} ></Route>
            </Route>
        </Routes>
    )
} 