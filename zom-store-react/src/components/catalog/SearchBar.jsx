import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useProducts } from "../../hooks/useProducts";
import { useNavigate, useParams } from "react-router-dom";
function SearchBar() {
    const navigate = useNavigate();
    const { slug } = useParams(); // Get current slug if on a product page
    const { searchTerm } = useProducts();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [localSearchTerm, setLocalSearchTerm] = useState("");

    // Sync local state when opening
    useEffect(() => {
        if (isSearchOpen) {
            setLocalSearchTerm(searchTerm);
        }
    }, [isSearchOpen, searchTerm]);

    // Prevent body scroll when search is open
    useEffect(() => {
        if (isSearchOpen) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isSearchOpen]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const trimmedSearch = localSearchTerm.trim();

        if (trimmedSearch) {
            // Navigate with search param
            navigate(`/search?search=${encodeURIComponent(trimmedSearch)}`);
            setIsSearchOpen(false);
            setLocalSearchTerm("");
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            setIsSearchOpen(false);
        }
    };

    const handleClose = () => {
        setIsSearchOpen(false);
    };

    const handleClear = () => {
        setLocalSearchTerm("");
    };

    return (
        <div className="relative">
            {/* Search button */}
            <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 transition-colors hover:text-primary-700"
                aria-label="Open search"
            >
                <FaSearch size={24} />
            </button>

            {/* Search overlay */}
            {isSearchOpen && (
                <>
                    {/* Gray background overlay */}
                    <div
                        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
                        onClick={handleClose}
                    />

                    {/* Search input */}
                    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 pointer-events-none">
                        <div className="relative w-full max-w-lg mx-4 pointer-events-auto">
                            <form onSubmit={handleSubmit}>
                                <div className="flex items-center h-12 bg-white rounded-lg shadow-lg">
                                    <div className="flex items-center h-full pl-4 text-gray-400">
                                        <FaSearch size={18} />
                                    </div>
                                    <input
                                        type="text"
                                        className="flex-1 px-3 text-lg bg-transparent focus:outline-none"
                                        placeholder="Type to search and press Enter..."
                                        value={localSearchTerm}
                                        onChange={(e) =>
                                            setLocalSearchTerm(e.target.value)
                                        }
                                        onKeyDown={handleKeyDown}
                                        autoFocus
                                    />

                                    {/* Clear button */}
                                    {localSearchTerm && (
                                        <button
                                            type="button"
                                            onClick={handleClear}
                                            className="pr-4 text-gray-400 transition hover:text-gray-600"
                                            aria-label="Clear search"
                                        >
                                            ✕
                                        </button>
                                    )}
                                </div>
                            </form>

                            {/* Search hint */}
                            <p className="mt-2 text-xs text-center text-gray-500">
                                Press Enter to search or Esc to close
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default SearchBar;
