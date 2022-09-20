import React from "react";

const Stateless = (props) => {

    return(
        <>
            <h1>Judul: {props.movie.title}</h1>
            <h2>Tahun Luncur: {props.movie.year} - rate: {props.movie.rating}</h2>
            <p>Synoopsis: {props.movie.synopsis}</p>
        </>
    )
    
}




export default Stateless