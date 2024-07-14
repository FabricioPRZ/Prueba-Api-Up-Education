import React from "react";

const Input = ({ tipo, className, contenido, id, click, required }) => {
    return (
        <>
        <input type={tipo} className={className} placeholder={contenido} id={id} onClick={click} required={required} />
        </>
    );
}

export default Input;
