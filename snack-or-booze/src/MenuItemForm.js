import React, { useState } from "react";
import "./Form.css";

const MenuItemForm = ({ onSubmit }) => {
  // Define state variables for the form inputs.
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [recipe, setRecipe] = useState("");
  const [serve, setServe] = useState("");

  function clearForm() {
    setCategory("")
    setName("")
    setDescription("")
    setRecipe("")
    setServe("")
  }

  // Define a function to handle form submission.
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ category, name, description, recipe, serve });
    clearForm();
  }

  // Return the form UI, including inputs bound to state variables and a submit button.
  return (
    <div>
        <h1>Add Menu Item:</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Select a category</option>
          <option value="drinks">Drink</option>
          <option value="snacks">Snack</option>
        </select>

        <label htmlFor="name">Item name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <label htmlFor="recipe">Recipe:</label>
        <textarea
          id="recipe"
          value={recipe}
          onChange={(event) => setRecipe(event.target.value)}
        />

        <label htmlFor="serve">Serve:</label>
        <input
          type="text"
          id="serve"
          value={serve}
          onChange={(event) => setServe(event.target.value)}
        />

        <button type="submit">Add item</button>
      </form>
    </div>
  );
};

export default MenuItemForm;
