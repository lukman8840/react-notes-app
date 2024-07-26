import React from "react";

const Header = ( {handleToggleMode }) => {
    return(
        <div className="header">
            <h1>Hello Lakunaa!</h1>
            <button 
                onClick={()=> 
                    handleToggleMode(
                (previousDarkMode) => !previousDarkMode
             
            )
             
        } 
             className="save">
                Toggle Mode
                </button>
        </div>
    )
}

export default Header;