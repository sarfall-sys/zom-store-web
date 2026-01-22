import { Route } from "react-router-dom";
// Import Public Layout
import PublicLayout from "../components/layouts/PublicLAyout";
// Import Public Pages
import Home from "../pages/public/Home";
import ProductList from "../pages/public/ProductList";
import Search from "../pages/public/Search";
import ProductDetail from "../pages/public/ProductDetail";
function PublicRoutes() {
  return (
    <Route key="public" element={<PublicLayout />}>
      <Route index element={<Home />} />
      {/* Category */}

      <Route path="/products/:slug" element={<ProductDetail />} />

      <Route path="/search" element={<ProductList />} />

      <Route
        path="/zo/:slug/:orderBy?/:filter?/page?/:page?"
        element={<ProductList />}
      />
    </Route>
  );
}

export default PublicRoutes;
