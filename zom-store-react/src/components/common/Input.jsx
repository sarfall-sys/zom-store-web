
//ADD props
//Props
//   - label: Text label displayed above input
//   - error: Error message to display below input
//   - ...props: All other props are passed to the input element (value, onChange, etc.)
function Input({label,error,...props}) {
  return (

    <div className='mb-4'> 
    {/*Render label if provided */}
    {
        label &&
        <label className='block text-sm font-medium text-gray-700 mb-1'>{label}</label>
    }
    
    {/* nput field with conditional error styling */}

    <input className = {`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? 'border-red-500' : 'border-gray-300' // Red border if error exists
        }`} 
        {...props}
        /> 

        {/* Display error message if exists */}
        {error && <p className='text-red-600 text-sm mt-1' >{error}</p>}

    </div>
)
}

export default Input