import { Link, useLocation } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import SearchBar from "../../components/catalog/SearchBar";
import CategoryNav from "./CategoryNav";
import { useState } from "react";
function Header(){

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  
  return (
    <header className="sticky top-0 z-50 text-gray-700 bg-white shadow-lg">
      <nav className="container px-4 py-4 mx-auto">
        <div className="flex items-center">
          {/* left: menu button (mobile) */}
          <div className="flex items-center w-1/4">
            <button className="p-2 md:hidden" 
            onClick={handleMobileMenuToggle}>
              <TiThMenu size={24} />
            </button>
          </div>

          {/* center: logo */}
          <div className="flex justify-center w-1/2">
            <Link to="/" className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10">
                <span className="text-3xl font-bold text-lavender-500">Z</span>
              </div>
              <span className="hidden text-2xl font-bold text-gray-600 sm:inline">Zom Store</span>
            </Link>
          </div>

          {/* left: search */}
          <div className="flex justify-start w-1/4">
            <div className="w-full max-w-xs">
              <SearchBar />
            </div>
          </div>
        </div>

        {/* category nav below */}
        <div className="mt-4">
          <CategoryNav 
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
