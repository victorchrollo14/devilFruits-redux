import React from "react";
// import { devilFruits } from "./data.ts";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { removeFruit } from "../redux/fruitsReducer.ts";

const DevilFruitsList = () => {
  const devilFruits = useAppSelector((state) => state.devilFruits);
  const dispatch = useAppDispatch();

  const handleEdit = (id) => {
    // Implement edit functionality here
    console.log(`Edit button clicked for fruit with ID ${id}`);
  };

  const handleDelete = (id) => {
    // Implement delete functionality here
    console.log(`Delete button clicked for fruit with ID ${id}`);
    dispatch(removeFruit(id));
  };

  return (
    <div className="devil-fruits-list-container">
      <h1>One Piece Devil Fruits</h1>
      <ul className="devil-fruits-list">
        {devilFruits.map((fruit) => (
          <li key={fruit.id} className="devil-fruit-card">
            <h2>{fruit.name}</h2>
            <p>{`Type: ${fruit.type}`}</p>
            <p>{`English Name: ${fruit.englishName}`}</p>
            <p>{`Abilities: ${fruit.abilities}`}</p>
            <p>{`Users: ${fruit.users}`}</p>
            <p>{`Description: ${fruit.description}`}</p>
            <div className="buttons-container">
              <button
                className="edit-button"
                onClick={() => handleEdit(fruit.id)}
              >
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => handleDelete(fruit.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { DevilFruitsList };

