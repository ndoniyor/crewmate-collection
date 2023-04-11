import React, { Component, useEffect, useState } from "react";
import { supabase } from "../src/client";
import SimpleCard from "./SimpleCard";
import "./css/SimpleDetail.css"
const CrewmateDetail = () => {
  const [crewMateDict, setDict] = useState({});

  const formatString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1); 
  }
  
  useEffect(() => {
    const getAll = async () => {
      const { data, error } = await supabase.from("crewmates").select("*");
      console.log(data);
      const convertedData = data.reduce((acc, cur) => {
        const { name, color, food, description } = cur;
        acc[name] = { color, food, description };
        return acc;
      }, {});
      setDict(convertedData);
    };

    getAll();
  }, []);

  return (
    <div className="SimpleDetail">
      {crewMateDict &&
        Object.entries(crewMateDict).map(([key, value]) => {
          const { id, name, color, food, description } = value;
          return (
            <SimpleCard
              key={id}
              name={formatString(key)}
              color={color}
              food={formatString(food)}
              description={formatString(description)}
            />
          );
        })}
    </div>
  );
};

export default CrewmateDetail;
