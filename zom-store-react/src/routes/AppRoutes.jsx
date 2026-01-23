import { Routes, Route, Navigate } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import NotFound from "../pages/NotFound";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      {PublicRoutes()}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
