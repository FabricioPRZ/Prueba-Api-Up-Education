import React from "react";

const Enlace = ({ direccion, children, className }) => {
    return (
        <a href={direccion} className={className}>
            {children}
        </a>
    );
}

export default Enlace;
