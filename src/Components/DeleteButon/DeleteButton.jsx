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
    <div>
      {isDeleting ? (
        <>
          <span>Really delete?</span>
          <button
            type="button"
            onClick={handleCancel}
            className="color-card-highlight"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            className="color-card-highlight"
          >
            Delete
          </button>
        </>
      ) : (
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      )}
    </div>
  );
}
