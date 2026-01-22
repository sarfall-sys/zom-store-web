import React from "react";
import Modal from "../common/Modal";
import Button from "../commom/Button";
// Props:
//   - isOpen: Boolean to control dialog visibility
//   - onClose: Function to call when canceling
//   - onConfirm: Function to call when confirming action
//   - title: Dialog title
//   - message: Confirmation message to display
function ConfirmDialog({ isOpen, onClose, title, message }) {
  return (
    // Reuse Modal component for consistency
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <p className="text-gray-600 mb-6">{message}</p>
      <div className="flex">
        <Button variant = "secondary" onClick = {onClose}>Cancel</Button>

        <Button variant="danger" onClick={onConfirm} >Delete</Button>
      </div>
    </Modal>
  );
}

export default ConfirmDialog;
