import { useState } from "react";
import "./DeleteButton.css";

export default function DeleteButton({ onDeleteColor, id }) {
  const [isDeleting, setIsDeleting] = useState(false);

  function handleDelete() {
    setIsDeleting(true);
  }

  function handleConfirm() {
    onDeleteColor(id);
  }

  function handleCancel() {
    setIsDeleting(false);
  }

  return (
    <div className="delete-options">
      {isDeleting ? (
        <>
          <span>Really delete?</span>
          <button
            type="button"
            onClick={handleCancel}
            className="color-card-cancel"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            className="color-card-delete-final"
          >
            Delete
          </button>
        </>
      ) : (
        <button
          type="button"
          onClick={handleDelete}
          className="color-card-delete"
        >
          Delete
        </button>
      )}
    </div>
  );
}
