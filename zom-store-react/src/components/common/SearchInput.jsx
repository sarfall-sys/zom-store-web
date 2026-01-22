import { Search } from "react";
import { BiSearch ,BiX} from "react-icons/bi";

import { InputGroup, Input } from "react-bootstrap";
//PASS PROPS
//   - value: Current search value from parent component
//   - onChange: Function to call when search value changes (after debounce)
//   - placeholder: Text to show when input is empty
//   - debounceMs: Milliseconds to wait before triggering onChange (default 500ms)
//   - loading: Boolean to show loading spinner
//   - onClear: Function to call when clear button is clicked
function SearchInput({
  value = "",
  onChange,
  placeholder = "Search...",
  debounceMs = 500,
  loading = false,
  onClear,
}) {
  // Local state for immediate UI updates without waiting for debounce
  // This allows user to see what they're typing instantly
  const [localValue, setLocalValue] = useState(value);

  //Sync local value with external value changes
  //This ensures component stays in sync with parent state
  useEffect(() => {
    //Set a timer to call onChange after the specified delay
    setLocalValue(value);
  }, [value]);

  // Debounce effect: Wait for user to stop typing before calling onChange

  useEffect(() => {
    //Set timer
    const timer = setTimeout(
      () => {
        //Only call onchange is exists
        if (onChange) {
          onChange(localValue);
        }
      },

      debounceMs
    );

    return () => clearTimeout(timer);
    // Cleanup function: Cancel timer if component unmounts or localValue changes
    // This prevents onChange from being called if user is still typing
  }, [localValue, debounceMs, onChange]); // Re-run when these dependencies change

  // Handle input change - update local state immediately for responsive UI

  const handleChange = (ev) => {
    setLocalValue(ev.target.value);
  };

  //Handle clear button click .rest search to empty

  const handleClear = () => {
    setLocalValue(""); //Clear input field
    if (onClear) {
      onClear(); //CAl fucntion
    }
  };
  return (
    <div className="relative">
      <BiSearch
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        size={20}
      />

      {/* Main input field */}
      <input
        type="text"
        value={localValue}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full pl-10 pr-20 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Right side container for loading spinner and clear button */}
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
        {loading && (
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
        )}

        {/* Clear button - only show when there's text and not loading */}
        {localValue && !loading && (
          <button
            onClick={handleClear}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            title="Clear search" // Tooltip on hover
          >
            <BiX size={25}/>
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchInput;
