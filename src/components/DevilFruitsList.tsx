import React from "react";
import { devilFruits } from "./data.ts";

const DevilFruitsList = () => {
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
            <p>{`Users: ${fruit.users.join(", ")}`}</p>
            <p>{`Description: ${fruit.description}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { DevilFruitsList };