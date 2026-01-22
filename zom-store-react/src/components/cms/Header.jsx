import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";import { GrCatalog } from "react-icons/gr";
import { FaUsers } from "react-icons/fa6";
import { MdBrandingWatermark } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { TbCategoryFilled } from "react-icons/tb";
import { GiFamilyTree } from "react-icons/gi";
function Header({isMobileMenuOpen, setIsMobileMenuOpen, onNavigate }) {
  //Define the items
  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: MdDashboard },
    { path: "/users", label: "Users", icon: FaUsers },
    { path: "/brands", label: "Brands", icon: MdBrandingWatermark },
    { path: "/categories", label: "Categories", icon: TbCategoryFilled },
    { path: "/subcategoreis", label: "Subcategories", icon: MdCategory },
    { path: "/families", label: "Families", icon: GiFamilyTree },
    { path: "/subfamilies", label: "Subfamilies", icon: GiFamilyTree },
  ];
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-gradient-to-r from-lavender-500 to-lavender-700 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-lavender-200 rounded-full flex items-center justify-center">
              <span className="text-lavender-700 font-bold text-lg">Z</span>
            </div>
            <span className="text-2xl font-bold">Zom Store</span>
          </Link>

          {/* Navigation Links */}
          {/* Desktop Navigation Links - Hidden on mobile */}
          <div className="hiden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  isActive(item.path)
                    ? "bg-white text-lavender-600 font-semibold shadow-md"
                    : "text-lavender-100 hover:bg-lavender-400 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-lavender-100 hover:text-white p-2"
            >
              <TiThMenu size={18} />
            </button>
          </div>
          {/* Mobile Menu */}

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <button
                  key  ={item.path}
                  onClick= {() =>onNavigate(item.path)}
                   className={`text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActive(item.path) 
                      ? 'bg-white text-lavender-600 font-semibold shadow-md' 
                      : 'text-lavender-100 hover:bg-lavender-400 hover:text-white'
                  }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
