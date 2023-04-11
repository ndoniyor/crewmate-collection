import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../src/client";
import "./css/CrewmateDetail.css"
const CrewmateDetail = () => {
  const [color, setColor] = useState("");
  const [name, setName] = useState("");
  const [food, setFood] = useState("");
  const [description, setDescription] = useState("");

  let params = useParams();

  const formatString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1); 
  }

  useEffect(() => {
    const getCrewMate = async () => {
      const { data, error } = await supabase
      .from("crewmates")
      .select("*")
      .eq("name", params.name);

      setColor(data[0].color.toLowerCase());
      setFood(formatString(data[0].food));
      setName(formatString(data[0].name));
      setDescription(formatString(data[0].description))
    }
    getCrewMate();
  }, []);

  return (
    <div className="CrewMateDetail">
      <h1 className="simple-link">{name} Details</h1>
      <img className="simple-pic" src={`/images/${color}.webp`}/>
      <h3>Favorite food: {food}</h3>
      <p className="description">{description}</p>
    </div>
  );
};

export default CrewmateDetail;
