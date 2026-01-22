import React from "react";
import Button from "../common/Button";
//Add props
//   - isOpen: Boolean to control modal visibility
//   - onClose: Function to call when modal should close
//   - title: Text displayed in modal header
//   - children: Content to display in modal body
function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    // Dark overlay covering entire screen
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Modal container - white box in center */}

      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
        {/*Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          {/*X button to close modal */}
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        {/*Modal body */}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
