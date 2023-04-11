import React, { useEffect, useState } from "react";
import { supabase } from "../src/client";
import "./css/CrewMateCreate.css";

const API_KEY = import.meta.env.API_KEY;

const CrewMateCreate = () => {
  const [color, setColor] = useState("");
  const [name, setName] = useState("");
  const [food, setFood] = useState("");
  const [description, setDescription] = useState("");
  const [retry, setRetry] = useState(false);

  const createCrewMate = async (event) => {
    await supabase
      .from("crewmates")
      .insert({ name: name, color: color, food: food, description: description })
      .select();

    window.location = "/";
  };

  const handleColor = (event) => {
    setColor(event.target.id.split("-")[0]);
  };

  const handleSubmit = () => {
    if (!color || !name || !food) {
      setRetry(true);
    }
    createCrewMate();
  };

  const handleName = (event) => {
    setName(event.target.value.toLowerCase());
  };

  const handleFood = (event) => {
    setFood(event.target.value.toLowerCase());
  };

  const handleDescription = (event) => {
    setDescription(event.target.value.toLowerCase());
  }

  return (
    <div className="CrewMateCreate">
      <h1>Character creation</h1>
      <div className="creation-container">
        <div className="colors">
          <label for="red-color">Red</label>
          <input
            type="radio"
            name="color-select"
            id="red-color"
            onClick={handleColor}
          />
          <label for="blue-color">Blue</label>
          <input
            type="radio"
            name="color-select"
            id="blue-color"
            onClick={handleColor}
          />
          <label for="yellow-color">Yellow</label>
          <input
            type="radio"
            name="color-select"
            id="yellow-color"
            onClick={handleColor}
          />
          <label for="green-color">Green</label>
          <input
            type="radio"
            name="color-select"
            id="green-color"
            onClick={handleColor}
          />
          <label for="purple-color">Purple</label>
          <input
            type="radio"
            name="color-select"
            id="purple-color"
            onClick={handleColor}
          />
          <label for="pink-color">Pink</label>
          <input
            type="radio"
            name="color-select"
            id="pink-color"
            onClick={handleColor}
          />
          <label for="white-color">White</label>
          <input
            type="radio"
            name="color-select"
            id="white-color"
            onClick={handleColor}
          />
          <label for="black-color">Black</label>
          <input
            type="radio"
            name="color-select"
            id="black-color"
            onClick={handleColor}
          />
        </div>
        <div className="text-fields">
          <label for="name-field">Name: </label>
          <input onChange={handleName} id="name-field" />
          <label for="food-field">Favorite food: </label>
          <input onChange={handleFood} id="food-field" />
          <label for="desc-field">Description</label>
          <textarea onChange={handleDescription} id="desc-field"/>
        </div>
      </div>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      {retry ? <h3>Please fill out all forms!</h3> : null}
    </div>
  );
};

export default CrewMateCreate;
