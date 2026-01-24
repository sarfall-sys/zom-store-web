import { Outlet, Link, useNavigate } from "react-router-dom"; // Import needed modules and components from react-router-dom

import { useState } from "react";
import Header from "../catalog/Header";
import Footer from "../catalog/Footer";
import { CatalogProvider } from "../../context/CatalogContext";
function PublicLayout() {
    return (
        <div className="flex flex-col bg-primary-50">
            <Header />
            <main className="container flex-grow px-4 py-8 mx-auto">
                <Outlet />
                {/* This is where child routes will render */}
                {/*Set catalog if Brand or CatalogNav is triggered */}
            </main>
            <Footer />
        </div>
    );
}

export default PublicLayout;
