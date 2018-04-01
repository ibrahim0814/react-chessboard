import React from 'react';

const square = (props) => {
    let link = <div></div>
    if(props.piece !== "none"){
        link = <img src={require("../assets/pieces/"+props.piece+".png")} alt ="an amazing chess piece"/>
    }

    return(
        <div className = {props.color}>
            {link}
        </div>
    );
}

export default square;