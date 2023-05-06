import React from "react";
import "tachyons";

const SearchBox = ({searchChanged}) => {
    return (
        <div className="ma3">
            <input 
                className="pa2 bg-light-green"
                type="search" 
                placeholder="Search RoboFriends"
                onChange={searchChanged}
            />
        </div>
    );
}

export default SearchBox;