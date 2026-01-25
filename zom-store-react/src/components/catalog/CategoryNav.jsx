import { useProducts } from "../../hooks/useProducts";
import { Link } from "react-router-dom";
import { BiLoader } from "react-icons/bi";
import { TiThMenu } from "react-icons/ti";
import { MdDiscount } from "react-icons/md";
import { MdOutlineFiberNew } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
// Fixed CategoryNav Component
function CategoryNav({ isMobileMenuOpen, setIsMobileMenuOpen }) {
    const { menu, loading, error } = useProducts();

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
                <BiLoader className="text-primary-600 animate-spin" size={24} />
            </div>
        );
    }

    return (
        <>
            {/* DESKTOP NAVIGATION */}
            <div className="hidden mt-4 md:block">
                <div className="relative flex justify-center space-x-8">
                    {menu.map((category) => (
                        <div
                            key={category.id}
                            className="relative group"
                            onMouseEnter={() => setActiveCategory(category)}
                            onMouseLeave={() => setActiveCategory(null)}
                        >
                            <Link to={`/zo/${category.slug}`}>
                                <button className="relative px-3 py-2 text-base font-semibold transition-colors text-stone-700 hover:text-primary-500 group-hover:text-primary-500">
                                    {category.name}
                                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                                </button>
                            </Link>

                            {/* Animated Mega Menu */}
                            {activeCategory?.id === category.id && (
                                <div className="absolute left-1/2 transform -translate-x-1/2 z-50 w-[800px] p-8 mt-2 bg-white border border-primary-100 shadow-2xl rounded-2xl transition-all duration-300 origin-top animate-in slide-in-from-top-5">
                                    <div className="grid grid-cols-3 gap-8">
                                        {category.subcategories?.map(
                                            (subcategory) => (
                                                <div
                                                    key={subcategory.id}
                                                    className="space-y-4"
                                                >
                                                    <Link
                                                        to={`/zo/${subcategory.slug}`}
                                                        className="block group/sub"
                                                    >
                                                        <div className="flex items-center justify-between">
                                                            <h3 className="text-lg font-bold transition-colors text-stone-900 group-hover/sub:text-primary-500">
                                                                {
                                                                    subcategory.name
                                                                }
                                                            </h3>
                                                            <svg
                                                                className="w-4 h-4 transition-all text-stone-400 group-hover/sub:text-primary-500 group-hover/sub:translate-x-1"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={
                                                                        2
                                                                    }
                                                                    d="M9 5l7 7-7 7"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </Link>

                                                    <div className="pl-2 space-y-2">
                                                        {subcategory.families?.map(
                                                            (family) => (
                                                                <Link
                                                                    key={
                                                                        family.id
                                                                    }
                                                                    to={`/zo/${family.slug}`}
                                                                    className="block py-1.5 text-sm text-stone-600 hover:text-primary-500 transition-colors hover:pl-2"
                                                                >
                                                                    {
                                                                        family.name
                                                                    }
                                                                </Link>
                                                            ),
                                                        )}
                                                    </div>
                                                </div>
                                            ),
                                        )}
                                    </div>

                                    {/* Quick links at bottom */}
                                    <div className="pt-6 mt-8 border-t border-stone-100">
                                        <div className="flex items-center justify-between">
                                            <Link
                                                to={`/zo/${category.slug}/sale`}
                                                className="px-4 py-2 text-sm font-semibold transition-colors rounded-lg text-primary-500 hover:bg-primary-50"
                                            >
                                                <MdDiscount className="inline mr-2 text-accent-400" /> Sale
                                            </Link>
                                            <Link
                                                to={`/zo/${category.slug}/new`}
                                                className="px-4 py-2 text-sm font-semibold transition-colors rounded-lg text-primary-500 hover:bg-primary-50"
                                            >
                                                <MdOutlineFiberNew className="inline mr-2 text-accent-400" /> New Arrivals
                                            </Link>
                                            <Link
                                                to={`/zo/${category.slug}/bestsellers`}
                                                className="px-4 py-2 text-sm font-semibold transition-colors rounded-lg text-primary-500 hover:bg-primary-50"
                                            >
                                                <FaStar className="inline mr-2 text-accent-400"  /> Bestsellers
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* MOBILE NAVIGATION */}
            <div
                className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
            >
                {/* FIXED: Added curly braces */}
                <div className="flex flex-col py-4 space-y-3">
                    {menu.map((category) => (
                        <div key={category.id} className="space-y-2">
                            <Link
                                to={`/zo/${category.slug}`}
                                className="block py-2 text-lg font-bold hover:text-primary-500"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {category.name}
                            </Link>

                            {/* Mobile subcategories */}
                            {category.subcategories?.length > 0 && (
                                <div className="pl-4 space-y-2">
                                    {category.subcategories.map(
                                        (subcategory) => (
                                            <div key={subcategory.id}>
                                                <Link
                                                    to={`/zo/${subcategory.slug}`}
                                                    className="block py-1 text-gray-600 hover:text-primary-500"
                                                    onClick={() =>
                                                        setIsMobileMenuOpen(
                                                            false,
                                                        )
                                                    }
                                                >
                                                    - {subcategory.name}
                                                </Link>

                                                {/* Mobile families */}
                                                {subcategory.families?.length >
                                                    0 && (
                                                    <div className="pl-4 space-y-1">
                                                        {subcategory.families.map(
                                                            (family) => (
                                                                <div
                                                                    key={
                                                                        family.id
                                                                    }
                                                                >
                                                                    <Link
                                                                        to={`/zo/${family.slug}`}
                                                                        className="block py-1 text-gray-500 hover:text-primary-500"
                                                                        onClick={() =>
                                                                            setIsMobileMenuOpen(
                                                                                false,
                                                                            )
                                                                        }
                                                                    >
                                                                        --{" "}
                                                                        {
                                                                            family.name
                                                                        }
                                                                    </Link>
                                                                </div>
                                                            ),
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        ),
                                    )}
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
