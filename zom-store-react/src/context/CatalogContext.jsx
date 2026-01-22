import { createContext, useState, useEffect, useCallback } from "react";
import productService from "../services/productService";
import brandService from "../services/brandService";
import bannerService from "../services/bannerService";
import catalogService from "../services/catalogService";

export const CatalogContext = createContext();

export const CatalogProvider = ({ children }) => {
  // States
  const [saleProducts, setOnSaleProducts] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [menu, setMenu] = useState([]);
  const [brands, setBrands] = useState([]);
  const [banners, setBanners] = useState([]);
  const [filters, setFilters] = useState([]);
  const [product, setProduct] = useState(null);
  
  // Separate loading states for better UX
  const [initialLoading, setInitialLoading] = useState(true);
  const [productsLoading, setProductsLoading] = useState(false);
  const [filtersLoading, setFiltersLoading] = useState(false);
  const [error, setError] = useState(null);

  // Search
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filters
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSubfamilies, setSelectedSubfamilies] = useState([]);
  
  // Sort
  const [selectedSort, setSelectedSort] = useState("");

  // Menu
  const [selectedMenuBrand, setSelectedMenuBrand] = useState(null);
  const [selectedMenuCategory, setSelectedMenuCategory] = useState(null);
  const [selectedMenuSubcategory, setSelectedMenuSubcategory] = useState(null);
  const [selectedMenuFamily, setSelectedMenuFamily] = useState(null);

  // Load initial data (brands, menu, banners, etc.)
  const loadInitialData = useCallback(async () => {
    try {
      setInitialLoading(true);
      setError(null);
      
      const [
        brandsData,
        menuData,
        bannerData,
        saleProductsData,
        latestProductsData,
      ] = await Promise.all([
        brandService.getBrands(),
        catalogService.getMenu(),
        bannerService.getBanners(),
        productService.getProductsOnSale(),
        productService.getLatestProducts(),
      ]);

      setBrands(brandsData);
      setMenu(menuData);
      setBanners(bannerData);
      setOnSaleProducts(saleProductsData);
      setLatestProducts(latestProductsData);
    } catch (err) {
      const message =
        err?.response?.data?.message || err?.message || JSON.stringify(err);
      setError(message);
    } finally {
      setInitialLoading(false);
    }
  }, []);

  useEffect(() => {
    loadInitialData();
  }, [loadInitialData]);

  const loadFilters = useCallback(async () => {
    try {
      setFiltersLoading(true);
      setError(null);

      const filtersData = await catalogService.getFilters();
      console.log("Filters Data:", filtersData);
      setFilters(filtersData);
    } catch (err) {
      const message =
        err?.response?.data?.message || err?.message || JSON.stringify(err);
      setError(message);
    } finally {
      setFiltersLoading(false);
    }
  }, []);

  useEffect(() => {
    loadFilters();
  }, [loadFilters]);

  const loadProductDetail = useCallback(async (productSlug) => {
    try {
      setProductsLoading(true);
      setError(null);
      const productData = await productService.getProductDetail(productSlug);
      setProduct(productData);
    } catch (err) {
      const message =
        err?.response?.data?.message || err?.message || JSON.stringify(err);
      setError(message);
    } finally {
      setProductsLoading(false);
    }
  }, []);

  
  const loadProducts = useCallback(async (slug, extraParams = {}) => {
    const params = {
      ...(selectedBrands.length > 0 && {
        brand_id: selectedBrands.join(","),
      }),
      ...(selectedSubfamilies.length > 0 && {
        subfamily_id: selectedSubfamilies.join(","),
      }),
      ...(selectedSort && {
        orderBy: selectedSort,
      }),
      ...extraParams,
    };

    try {
      setProductsLoading(true);
      setError(null);

      const productData = await productService.getProducts(slug, params);
      console.log("Products Data:", productData);

      if (productData && productData.data) {
        setProducts(productData.data);
      } else if (productData) {
        setProducts(productData);
      } else {
        throw new Error("No catalog data received");
      }
    } catch (err) {
      const message =
        err?.response?.data?.message || err?.message || JSON.stringify(err);
      setError(message);
    } finally {
      setProductsLoading(false);
    }
  }, [selectedBrands, selectedSubfamilies, selectedSort]);

  // Clear products
  const clearProducts = useCallback(() => {
    setProducts([]);
    setError(null);
  }, []);

 

  const value = {
    // Data
    saleProducts,
    latestProducts,
    brands,
    menu,
    banners,
    product,
    filters,
    products,
    
    // Loading states
    initialLoading,
    productsLoading,
    filtersLoading,
    error,
    
    // Search
    searchTerm,
    setSearchTerm,
    
    // Actions
    clearProducts,
    loadProductDetail,
    loadProducts,

    // Filters
    selectedBrands,
    setSelectedBrands,
    selectedSubfamilies,
    setSelectedSubfamilies,
    selectedSort,
    setSelectedSort,
    
    // Menu
    selectedMenuBrand,
    setSelectedMenuBrand,
    selectedMenuCategory,
    setSelectedMenuCategory,
    selectedMenuSubcategory,
    setSelectedMenuSubcategory,
    selectedMenuFamily,
    setSelectedMenuFamily,
  };

  return (
    <CatalogContext.Provider value={value}>
      {children}
    </CatalogContext.Provider>
  );
};
export default CatalogContext;
