import React, { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
function SortPanel() {
  const {
    filters,
    loading,
    error,
    setSelectedSort,
  } = useProducts();
  const [isOpen, setIsOpen] = useState(false);

  const handleSortSelect = (key) => {
    setSelectedSort(key);
    setIsOpen(false);
  };

  if (loading) {
    return <div>Loading sort options...</div>;
  }

  if (error) {
    return <div>Error loading sort options: {error}</div>;
  }

  return (
    <div className="relative">
      {/*Open */}
      <button
        className="flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold text-white transition rounded-md bg-lavender-500 hover:bg-lavender-600"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Sort By
      </button>

      {/*Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="w-[90%] sm:w-[320px] bg-white rounded-xl shadow-md p-6 animate-fadeIn relative max-h-[80vh] overflow-y-auto">
            {/* Close Button */}
            <button
              className="absolute text-gray-600 transition top-3 right-3 hover:text-red-500"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <h2 className="mb-4 text-xl font-bold text-lavender-600">
              Sort Options
            </h2>
            {/* Sort Options List */}
            <ul>
              {filters?.sort?.map((so) => (
                <li
                  key={so.value}
                  className="py-2 text-gray-500 border-b cursor-pointer hover:text-lavender-500"
                  onClick={() => handleSortSelect(so.value)}
                >
                  {so.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default SortPanel;
