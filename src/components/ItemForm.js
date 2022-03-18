import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ items, setItems }) {
  const defaultFormData = { name: "", category: "Produce" };
  const [formData, setFormData] = useState(defaultFormData);

  function handleFormChange({ target: { name, value } }) {
    setFormData({ ...formData, [name]: value })
  }

  function onItemFormSubmit(event) {
    event.preventDefault();
    const newItem = {...formData, id: uuid()};
    setItems([...items, newItem]);
    setFormData(defaultFormData);
  }

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleFormChange} />
      </label>

      <label>
        Category:
        <select name="category" value={formData.category} onChange={handleFormChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
