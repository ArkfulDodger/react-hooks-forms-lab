import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchInput, setSearchInput] = useState("");
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  
  function handleSearchInputChange(event) {
    setSearchInput(event.target.value);
  }

  function matchesCategory(item) {
    return selectedCategory === "All" || item.category === selectedCategory;
  }

  function matchesSearch(item) {
    return searchInput === "" || item.name.toLowerCase().includes(searchInput.toLowerCase());
  }

  const itemsToDisplay = items
    .filter((item) => matchesCategory(item))
    .filter((item) => matchesSearch(item));

  return (
    <div className="ShoppingList">
      <ItemForm items={items} setItems={setItems} />
      <Filter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange} 
        search={searchInput}
        onSearchChange={handleSearchInputChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
