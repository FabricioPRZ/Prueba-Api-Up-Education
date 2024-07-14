import React from "react";

const Main = ({className, contenido}) => {
    return (
        <>
        <main className={className}>{contenido}</main>
        </>
    );
}

export default Main;