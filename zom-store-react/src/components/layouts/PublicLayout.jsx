import { Outlet, Link, useNavigate } from "react-router-dom"; // Import needed modules and components from react-router-dom

import { useState } from "react";
import Header from "../catalog/Header";
import Footer from "../catalog/Footer";
import { CatalogProvider } from "../../context/CatalogContext";
import CategoryNav from "../catalog/CategoryNav";
function PublicLayout() {
  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const navigate = useNavigate();
  // Check if user is logged in
  const isLoggedIn = !!localStorage.getItem("auth_token");

  const handleNavigation = () => {
    navigate(path);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };
  return (
    <CatalogProvider>
      <div className="flex flex-col min-h-screen bg-lavender-50">
        <Header />
        <main className="container flex-grow px-4 py-8 mx-auto">
          <Outlet />
          {/* This is where child routes will render */}
          {/*Set catalog if Brand or CatalogNav is triggered */}
        </main>
        <Footer />
      </div>
    </CatalogProvider>
  );
}

export default PublicLayout;
