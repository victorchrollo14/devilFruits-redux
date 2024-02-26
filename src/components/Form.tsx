import React from "react";

export const Form = () => {
  return (
    <form>
      <h2>Add New Devil Fruit</h2>
      <label htmlFor="fruitName">Name:</label>
      <input
        type="text"
        id="fruitName"
        name="fruitName"
        placeholder="Enter the name"
        required
      />

      <label htmlFor="fruitType">Type:</label>
      <select id="fruitType" name="fruitType" required>
        <option value="Paramecia">Paramecia</option>
        <option value="Logia">Logia</option>
        <option value="Zoan">Zoan</option>
      </select>

      <label htmlFor="fruitAbilities">Abilities:</label>
      <textarea
        id="fruitAbilities"
        name="fruitAbilities"
        placeholder="Enter the abilities"
        required
      ></textarea>

      <label htmlFor="fruitUsers">Users:</label>
      <input
        type="text"
        id="fruitUsers"
        name="fruitUsers"
        placeholder="Enter users separated by commas"
        required
      />

      <label htmlFor="fruitDescription">Description:</label>
      <textarea
        id="fruitDescription"
        name="fruitDescription"
        placeholder="Enter the description"
        required
      ></textarea>

      <button type="submit">Add Devil Fruit</button>
    </form>
  );
};
