import React from "react";
import './Parrafo.css';

const Parrafo = ({ contenido, className }) => {
    return (
        <p className={className}>{contenido}</p>
    );
}

export default Parrafo;
