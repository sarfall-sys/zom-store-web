import { useProducts } from "../../hooks/useProducts";
import { useState,useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { BiLoader } from "react-icons/bi";
function FilterPanel() {
  const { slug } = useParams();
  const {
    filters,
    filtersLoading,
    error,
    selectedBrands,
    setSelectedBrands,
    selectedSubfamilies,
    setSelectedSubfamilies,
    loadProducts,
  } = useProducts();

  const [isOpen, setIsOpen] = useState(false);
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isSubfamilyOpen, setIsSubfamilyOpen] = useState(false);

  const activeFilterCount = selectedBrands.length + selectedSubfamilies.length;

  // Handle escape key and body scroll
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleBrand = (id) => {
    setSelectedBrands((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((brandId) => brandId !== id)
        : [...prevSelected, id]
    );
  };

  const toggleSubfamily = (id) => {
    setSelectedSubfamilies((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((subfamilyId) => subfamilyId !== id)
        : [...prevSelected, id]
    );
  };

  const applyFilters = () => {
    if (slug) {
      loadProducts(slug);
    }
    setIsOpen(false);
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedSubfamilies([]);
  };

  if (filtersLoading) {
    return (
      <div className="flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold text-white rounded-md bg-lavender-400">
        <BiLoader className="animate-spin" size={18} />
        Loading...
      </div>
    );
  }

  if (error) {
    return <div className="text-sm text-red-600">Error loading filters</div>;
  }

  return (
    <div className="relative">
      {/* Filter Button with Badge */}
      <button
        className="flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold text-white transition rounded-md bg-lavender-500 hover:bg-lavender-600"
        onClick={() => setIsOpen(true)}
        aria-label="Open filters"
      >
        <AiOutlineMenu size={18} />
        Filters
        {activeFilterCount > 0 && (
          <span className="flex items-center justify-center w-5 h-5 text-xs font-bold text-white rounded-full bg-lavender-700">
            {activeFilterCount}
          </span>
        )}
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="w-[90%] sm:w-[420px] bg-white rounded-xl shadow-md p-6 animate-fadeIn relative max-h-[80vh] overflow-y-auto">
            {/* Close Button */}
            <button
              className="absolute text-gray-600 transition top-3 right-3 hover:text-red-500"
              onClick={() => setIsOpen(false)}
              aria-label="Close filters"
            >
              ✕
            </button>

            <h2 className="mb-4 text-xl font-bold text-lavender-600">
              Filters
            </h2>

            {/* Brands Section */}
            <div className="mb-4">
              <button
                className="flex items-center justify-between w-full pb-2 font-medium text-gray-700 transition border-b hover:text-lavender-500"
                onClick={() => setIsBrandOpen(!isBrandOpen)}
                aria-expanded={isBrandOpen}
              >
                <span className="flex items-center gap-2">
                  Brands
                  {selectedBrands.length > 0 && (
                    <span className="text-xs text-lavender-600">
                      ({selectedBrands.length})
                    </span>
                  )}
                </span>
                <FaPlus
                  className={`transition-transform ${
                    isBrandOpen ? "rotate-45 text-lavender-500" : ""
                  }`}
                />
              </button>

              {isBrandOpen && (
                <ul className="mt-2 space-y-2">
                  {filters?.brands?.length > 0 ? (
                    filters.brands.map((brand) => (
                      <li
                        key={brand.id}
                        className="flex items-center gap-2 text-sm"
                      >
                        <input
                          type="checkbox"
                          id={`brand-${brand.id}`}
                          checked={selectedBrands.includes(brand.id)}
                          onChange={() => toggleBrand(brand.id)}
                          className="w-4 h-4 cursor-pointer text-lavender-500 focus:ring-lavender-400"
                        />
                        <label
                          htmlFor={`brand-${brand.id}`}
                          className="flex-1 text-gray-600 cursor-pointer hover:text-lavender-600"
                        >
                          {brand.name}
                        </label>
                      </li>
                    ))
                  ) : (
                    <li className="text-sm text-gray-400">
                      No brands available
                    </li>
                  )}
                </ul>
              )}
            </div>

            {/* Subfamilies Section */}
            <div className="mb-4">
              <button
                className="flex items-center justify-between w-full pb-2 font-medium text-gray-700 transition border-b hover:text-lavender-500"
                onClick={() => setIsSubfamilyOpen(!isSubfamilyOpen)}
                aria-expanded={isSubfamilyOpen}
              >
                <span className="flex items-center gap-2">
                  Subfamilies
                  {selectedSubfamilies.length > 0 && (
                    <span className="text-xs text-lavender-600">
                      ({selectedSubfamilies.length})
                    </span>
                  )}
                </span>
                <FaPlus
                  className={`transition-transform ${
                    isSubfamilyOpen ? "rotate-45 text-lavender-500" : ""
                  }`}
                />
              </button>

              {isSubfamilyOpen && (
                <ul className="mt-2 space-y-2">
                  {filters?.subfamilies?.length > 0 ? (
                    filters.subfamilies.map((subfamily) => (
                      <li
                        key={subfamily.id}
                        className="flex items-center gap-2 text-sm"
                      >
                        <input
                          type="checkbox"
                          id={`subfamily-${subfamily.id}`}
                          checked={selectedSubfamilies.includes(subfamily.id)}
                          onChange={() => toggleSubfamily(subfamily.id)}
                          className="w-4 h-4 cursor-pointer text-lavender-500 focus:ring-lavender-400"
                        />
                        <label
                          htmlFor={`subfamily-${subfamily.id}`}
                          className="flex-1 text-gray-600 cursor-pointer hover:text-lavender-600"
                        >
                          {subfamily.name}
                        </label>
                      </li>
                    ))
                  ) : (
                    <li className="text-sm text-gray-400">
                      No subfamilies available
                    </li>
                  )}
                </ul>
              )}
            </div>

            {/* Actions */}
            <div className="flex justify-between gap-3 mt-6">
              <button
                className="flex-1 px-4 py-2 text-sm font-semibold text-gray-600 transition border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={clearFilters}
                disabled={activeFilterCount === 0}
              >
                Clear All
              </button>
              <button
                className="flex-1 px-4 py-2 text-sm font-semibold text-white transition rounded-lg bg-lavender-500 hover:bg-lavender-600"
                onClick={applyFilters}
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterPanel;
