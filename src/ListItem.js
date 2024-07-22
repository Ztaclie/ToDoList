import { useState } from "react";

function ListItem({ caption }) {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  const randomIDGenerator = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  let id = randomIDGenerator();

  return (
    <li className="ListItem list-group-item">
      <input
        className="form-check-input me-1"
        type="checkbox"
        checked={checked}
        onChange={handleCheck}
        id={id}
      />
      <label className="form-check-label" for={id}>
        {caption}
      </label>
    </li>
  );
}

export default ListItem;
