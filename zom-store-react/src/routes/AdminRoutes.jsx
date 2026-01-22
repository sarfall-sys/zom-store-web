import React from "react";
import { Route,Navigate } from "react-router-dom";
// Import Admin Layout
import AdminLayout from "../components/layouts/AdminLayout";
import Login from "../pages/admin/Login";
import UsersPage from "../pages/admin/UsersPage";
import BrandsPage from "../pages/admin/BrandsPage";
import CategoriesPage from "../pages/admin/CategoriesPage";
import SubcategoriesPage from "../pages/admin/SubcategoriesPage";
import FamiliesPage from "../pages/admin/FamiliesPage";
import SubfamiliesPage from "../pages/admin/SubfamiliesPage";
import ProtectedRoute from "../components/common/ProtectedRoute";

function AdminRoutes() {
  return (
    <Route
      path="management"
      element={
        <ProtectedRoute>
          <AdminLayout />
        </ProtectedRoute>
      }
    >
      <Route index element={<Navigate to="/dashboard" replace />} />
      <Route path="users" element={<UsersPage />}></Route>
      <Route path="brands" element={<BrandsPage />}></Route>
      <Route path="categories" element={<CategoriesPage />}></Route>
      <Route path="subcategories" element={<SubcategoriesPage />}></Route>
      <Route path="families" element={<FamiliesPage />}></Route>
      <Route path="subfamilies" element={<SubfamiliesPage />}></Route>
      {/* For staff */}
      <Route path="login" element={<Login />} />
    </Route>
  );
}

export default AdminRoutes;
