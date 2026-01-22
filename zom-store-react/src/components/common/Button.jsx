
//Pass props to the button component
//Props:
//children: Button content (text, icons, etc.)
//   - variant: Style variant ('primary', 'danger', 'secondary', 'success')
//   - size: Button size ('sm', 'md', 'lg')
//   - onClick: Function to call when clicked
//   - disabled: Boolean to disable button
//   - className: Additional CSS classes
function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled,
  className = "",
}) {
  // Base styles applied to all buttons
  const baseStyles =
    "font-medium rounded-lg transition-colors duration-200 flex item gap-2";

  // Different color schemes for button variants
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300",
    danger: "bg-red-600 text-white hover:bg-red-700 disabled:bg-red-300",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-100",
    success: "bg-green-600 text-white hover:bg-green-700 disabled:bg-green-300",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 p-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
        {children}
    </button>
  );
}

export default Button;
