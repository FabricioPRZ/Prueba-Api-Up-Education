import React from "react";
import Barra from "../../organisms/Barra/Barra";
import Login from "../../Molecules/Login/Login";
import PiePagina from "../../Templates/PiePagina/PiePagina";

const LoginForm = () => {
    return (
        <>
            <Barra contenido={"𝗜𝗻𝗶𝗰𝗶𝗮 𝗦𝗲𝗴𝘂𝗿𝗼"} />
            <Login />
            <PiePagina/>
        </>
    );
}

export default LoginForm;
