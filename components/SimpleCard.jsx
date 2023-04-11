import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/SimpleCard.css"
import { supabase } from "../src/client";

const SimpleCard = (props) => {

    const handleDelete = async (name) => {
        await supabase
        .from('crewmates')
        .delete()
        .eq('name',name);

        window.location = "/";
    }

    useEffect(()=>{
        console.log("props",props)
    },[SimpleCard])

    return(
        <div className="SimpleCard">
            <Link to={`/gallery/${props.name.toLowerCase()}`} className="simple-link">{props.name}</Link>
            <img className="simple-pic" src={`/images/${props.color.toLowerCase()}.webp`}/>
            <button className="delete-btn" onClick={()=>handleDelete(props.name.toLowerCase())}>Delete</button>
        </div>
    );
}

export default SimpleCard;