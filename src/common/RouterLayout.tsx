import React from "react";
import { NavBar } from "./NavBar";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export const RouterLayout: React.FC<{}> = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}