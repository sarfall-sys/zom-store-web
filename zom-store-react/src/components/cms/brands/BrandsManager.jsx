import { useState, useEffect } from "react";
import useBrands from "./hooks/useBrands";
// ============================================
// BRANDS MANAGER PAGE
// Main page component that orchestrates all brand management functionality
// Uses all the modular components defined above
// ============================================
function BrandsManager() {
  // ============================================
  // STATE MANAGEMENT
  // ============================================
  //Array of all barnds fteched from API
  const [brands, setBrands] = useState([]);

  return <div>BrandsManager</div>;
}

export default BrandsManager;
