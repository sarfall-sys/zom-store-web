import { Outlet, Link, useLocation } from "react-router-dom"; // Import needed modules and components from react-router-dom
import Header from "../cms/Header";
import Footer from "../cms/Footer";
// Import icons used for the navigation menu

function AdminLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("auth_token");
  const handleNavigation = () => {
    navigate(path);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };
  return (
    <div>
      <Header
        Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isLoggedIn={isLoggedIn}
        onNavigate={handleNavigation}
      />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AdminLayout;
