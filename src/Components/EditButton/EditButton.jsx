import { useState } from "react";
import ColorInput from "../ColorInput/ColorInput";
import "./EditButton.css";

export default function EditButton({ color, onEditColor }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(color);

  function handleEditClick() {
    setIsEditing(true);
  }
  function handleCancel() {
    setIsEditing(false);
    setEditData(color);
  }

  function handleEdit(event) {
    const { name, value } = event.target;
    setEditData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleUpdateColor() {
    onEditColor(editData);
    setIsEditing(false);
  }

  return (
    <div>
      {isEditing ? (
        <div>
          <label htmlFor="role">Role</label>
          <br />
          <input
            type="text"
            name="role"
            id="role"
            value={editData.role}
            onChange={handleEdit}
          ></input>
          <br />
          <label htmlFor="hex">Hex</label>
          <br />
          <ColorInput id="hex" value={editData.hex} onChange={handleEdit} />
          <br />
          <label htmlFor="contrast">Contrast Text</label>
          <br />
          <ColorInput
            id="contrast"
            value={editData.contrast}
            onChange={handleEdit}
          />
          <br />
          <div className="saving-options">
            <button
              type="button"
              onClick={handleUpdateColor}
              className="color-card-save"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="color-card-edit"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={handleEditClick}
          className="color-card-edit"
        >
          Edit
        </button>
      )}
    </div>
  );
}
