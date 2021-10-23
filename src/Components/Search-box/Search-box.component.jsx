import React from "react";
import '../Search-box/Search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange, value }) => {
    return ( 
        <div className = 'searchStyles' >
            <div>
                <h1> Monsters rolodex </h1></div >
            <input type = "search"
                className = "search"
                onChange = { handleChange }
                placeholder = { placeholder }
                value={value} />
        
        </div>
    )
}