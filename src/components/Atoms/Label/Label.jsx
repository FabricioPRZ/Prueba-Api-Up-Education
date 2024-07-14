import React from "react";

const Label = ({ htmlFor, contenido, className }) => {
    return (
    <>
    <label htmlFor={htmlFor} className={className}>{contenido}</label>
    </>
    );
}

export default Label;