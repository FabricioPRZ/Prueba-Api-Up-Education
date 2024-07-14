import React from "react";

const Ul = ({className, contenido}) => {
    return (
        <>
        <ul className={className}>{contenido}</ul>
        </>
    );
}

export default Ul;