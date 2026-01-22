// Props:
//   - currentPage: Current active page number (1-indexed)
//   - totalPages: Total number of pages available
//   - onPageChange: Function to call when user clicks a page
//   - totalItems: Total number of items across all pages
//   - itemsPerPage: Number of items shown per page
import { BiCaretLeft } from "react-icons/bi";
import { BiCaretRight } from "react-icons/bi";
import { DiVim } from "react-icons/di";

//   - className: Additional CSS classes for styling
function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
  className = "",
}) {
  //Don't render anything if there's only one page or no data
  if (totalPages <= 1) return null;
  // Calculate which items are currently being displayed
  const startItem = (currentPage - 1) * itemsPerPage + 1; //like (1  -1) * 10 +1 = 1 first page starts at item 1
  const endItem = Math.min(currentPage * itemsPerPage, totalItems); //like min(1 * 10 ,100) (10,100) Page 1 shows 1-10

  //Function to navigate to specific page

  const goToPage = (page) => {
    // Validate: page must be in valid range and different from current

    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };
  return (
    <div className={`flex items-center justify-between ${className}`}>
      {/* Left side: "Showing X to Y of Z results" text */}

      <div className="text-sm text-gray-600">
        Showing <span className="font-medium">{startItem}</span>
        to {""}
        <span className="font-medium">{endItem}</span>
        of{""}
        <span className="font-medium">{totalItems}</span>
        results
      </div>

      {/* Right side: Pagination controls */}
      <div className="flex items-center gap-2">
        {/* Previous page button */}
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Previous page"
        >
          <BiCaretLeft sixe={20}></BiCaretLeft>
        </button>

        {/* Page number buttons container */}
        <div className="flex gap-1">
          {/*Create array of page numbers and map over them */}

          {[...Array(totalPages)].map((_, index) => {
            // _ Convention when ignoring value

            const pageNumber = index + 1; // Convert 0-indexed to 1-indexed

            //Determine if this page number ahould be shown
            //Show : first page ,last page ,current page ,and pages within 1 of current
            const showPage =
              pageNumber === 1 || //Alaways show first page
              pageNumber === totalPages || //Always show last page
              Math.abs(pageNumber - currentPage) <= 1; //Show pages near current

            //Determine if the we should show ellipsos (...) instead of page number
            showEllipsis =
              (pageNumber === 2 && currentPage > 3) || // Gap after page 1
              (pageNumber === totalPages - 1 && currentPage < totalPages - 2); // Gap before last page

            //Render ellipsis for gaps
            if (showEllipsis) {
              return (
                <span key={pageNumber} className="px-3 py-2 text-gray-400">
                  ...
                </span>
              );
            }

            //Skip this page number if it shouldnt be shown
            if (!showPage) return null;

            //REnder page number button
            return (
              <button
                key={pageNumber}
                onClick={() => goToPage(pageNumber)}
                className={`px-3 py-2 rounded-lg border transition-colors ${
                  currentPage === pageNumber
                    ? "bg-blue-600 text-white border-blue-600" // Active page style
                    : "border-gray-300 hover:bg-gray-50" // Inactive page style
                }`}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>
        {/*Next page button */}
        <button
          key={pageNumber}
          onClick={() => goToPage(pageNumber + 1)}
          disabled={currentPage === totalPages} // Disable on last page
          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Next page"
        >
          <BiCaretRight size={20}></BiCaretRight>
        </button>
      </div>
    </div>
  );
}

export default Pagination;
