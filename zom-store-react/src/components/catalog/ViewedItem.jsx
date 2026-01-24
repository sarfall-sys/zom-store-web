import React from 'react'

function ViewedItem() {
  return (
   <>
   <section>
    <div className="container px-4 py-8 mx-auto">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">Recently Viewed</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
        {/* Example viewed item */}
        <div className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
          <img
            src="https://via.placeholder.com/150"
            alt="Viewed Item"
            className="w-full h-auto mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-700">Item Name</h3>
          <p className="text-sm text-gray-500">$29.99</p>
        </div>
        {/* Repeat similar blocks for other viewed items */}
      </div>
    </div>
   </section>
   </>
  )
}

export default ViewedItem
