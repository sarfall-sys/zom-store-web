import { useProducts } from "../../hooks/useProducts";
import { Link } from "react-router-dom";
import { BiLoader } from "react-icons/bi";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
// Fixed CategoryNav Component
function CategoryNav({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  const { menu, loading, error, selectedMenuCategory, setSelectedMenuCategory ,selectMenuSubcategory ,setMenuSubcategory,setMenuFamily,setMenuSubfamily} = useProducts();

  const [activeCategory, setActiveCategory] = useState(null);

  const menuCategory = menu || [];
  console.log("Menu Categories:", menuCategory);

  if (error) {
    return (
      <div className="py-2 text-center text-red-500">
        Error loading categories
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center p-4">
        <BiLoader className="text-blue-600 animate-spin" size={24} />
      </div>
    );
  }

  return (
    <>
      {/* DESKTOP NAVIGATION */}
      <div className="hidden mt-4 md:block">
        <div className="flex justify-center space-x-8">
          {menu.map((category) => (
            <div
              key={category.id}
              className="relative"
              onMouseEnter={() => setActiveCategory(category)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <Link to={`/zo/${category.slug}`}>
                <button className="px-3 py-2 text-lg font-bold text-gray-700 hover:text-lavender-500">
                  {category.name}
                </button>
              </Link>

              {/* THE MEGA MENU PANEL */}
              {activeCategory?.id === category.id && (
                <div className="absolute left-0 z-20 w-[700px] p-6 mt-4 bg-white border shadow-xl rounded-xl">
                  <div className="grid grid-cols-3 gap-6">
                    {category.subcategories?.map((subcategory) => (
                      <div key={subcategory.id}>
                        <Link
                          to={`/zo/${subcategory.slug}`}
                          className="block text-lg font-semibold text-gray-700 uppercase hover:text-lavender-500"
                        >
                          {subcategory.name}
                        </Link>

                        {subcategory.families?.map((family) => (
                          <div key={family.id} className="mt-2">
                            <Link
                              to={`/zo/${family.slug}`}
                              className="block text-sm font-bold text-gray-600 hover:text-lavender-500"
                            >
                              {family.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        {" "}
        {/* FIXED: Added curly braces */}
        <div className="flex flex-col py-4 space-y-3">
          {menu.map((category) => (
            <div key={category.id} className="space-y-2">
              <Link
                to={`/zo/${category.slug}`}
                className="block py-2 text-lg font-bold hover:text-lavender-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {category.name}
              </Link>

              {/* Mobile subcategories */}
              {category.subcategories?.length > 0 && (
                <div className="pl-4 space-y-2">
                  {category.subcategories.map((subcategory) => (
                    <div key={subcategory.id}>
                      <Link
                        to={`/zo/${subcategory.slug}`}
                        className="block py-1 text-gray-600 hover:text-lavender-500"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        - {subcategory.name}
                      </Link>

                      {/* Mobile families */}
                      {subcategory.families?.length > 0 && (
                        <div className="pl-4 space-y-1">
                          {subcategory.families.map((family) => (
                            <div key={family.id}>
                              <Link
                                to={`/zo/${family.slug}`}
                                className="block py-1 text-gray-500 hover:text-lavender-500"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                -- {family.name}
                              </Link>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CategoryNav;
