import React from 'react';
import {Grid} from 'semantic-ui-react';
import Square from '../components/square';

const chessArray = () =>{
    let arr = [];
    arr.push([-5,-3.1,-3.2,-9,-4,-3.2,-3.1,-5]);
    arr.push([-1,-1,-1,-1,-1,-1,-1,-1]);
    arr.push([0,0,0,0,0,0,0,0]);
    arr.push([0,0,0,0,0,0,0,0]);
    arr.push([0,0,0,0,0,0,0,0]);
    arr.push([0,0,0,0,0,0,0,0]);
    arr.push([1,1,1,1,1,1,1,1]);
    arr.push([5,3.1,3.2,9,4,3.2,3.1,5]);
    return arr;
}

const color = (num, curr) =>{
    if(num > 0 && num%8 === 0){return curr}
    if(curr === "squareLight"){return "squareDark";}
    if(curr === "squareDark"){return "squareLight";}
}

const getPiece = (num) => {

    if(num === 1){return "whitePawn"}
    if(num === 3.1){return "whiteKnight"}
    if(num === 3.2){return "whiteBishop"}
    if(num === 5){return "whiteRook"}
    if(num === 4){return "whiteKing"}
    if(num === 9){return "whiteQueen"}

    if(num === -1){return "blackPawn"}
    if(num === -3.1){return "blackKnight"}
    if(num === -3.2){return "blackBishop"}
    if(num === -5){return "blackRook"}
    if(num === -4){return "blackKing"}
    if(num === -9){return "blackQueen"}

    if(num === 0){return "none"}
    
}

const board = () => {
    let num = 0;
    let curr = "squareDark"
    let pc = "null";
    let rows = chessArray().map((value,key)=>{
        return(
            <Grid.Row>
                {value.map((value,key)=>{
                    pc = getPiece(value);
                    curr = color(num,curr);
                    num++;   
                    return (
                        <Square 
                            piece = {pc}
                            color = {curr}
                        />
                    );
                })}
            </Grid.Row>
        );
    })
    return(
        <div>
            <Grid textAlign= "center">
                {rows}
            </Grid>
        </div>
    );
}

export default board;