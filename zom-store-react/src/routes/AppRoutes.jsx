import { Routes, Route, Navigate } from "react-router-dom";
// Import route modules
import PublicRoutes from "./PublicRoutes";
//import AdminRoutes from "./AdminRoutes";
// Import 404 Not Found page
import NotFound from "../pages/NotFound";
import AdminRoutes from "./AdminRoutes";
function AppRoutes() {
  return (
    <Routes>
      {/* Root redirect - redirect "/" to home or catalog */}
      <Route path="/" element={<Navigate to="/home" replace />} />
      {PublicRoutes()}
      {AdminRoutes()}

      {/* 404 Not Found - Catch all unmatched routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
