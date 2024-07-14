import React, { useState } from "react";
import Main from "../../Atoms/Main/Main";
import Imagen from "../../Atoms/Imagen/Imagen";
import H2 from "../../Atoms/H2/H2";
import Label from "../../Atoms/Label/Label";
import Input from "../../Atoms/Input/Input";
import Button from "../../Atoms/Button/Button";
import imgRegistro from "../../../assets/recursos/imgRegister.png";
import './Register.css'

const Registro = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <>
            <Main className="main-registro" contenido={
            <div className="registro-container">
                <div className="registro-image">
                    <Imagen src={imgRegistro} alt="Education Image" />
                </div>
                <div className="registro-form">
                    <H2 contenido="¡Registrate!" />
                    <form action="#">
                    <Label htmlFor="name" contenido="Ingrese su nombre(s):"/>
                        <Input tipo="text" className="campo-input" id="nombres" contenido="Ingrese su nombre(s)."/>
                        
                        <Label htmlFor="name" contenido="Ingrese su apellido paterno:"/>
                        <Input tipo="text" className="campo-input" id="apellidoPat" contenido="Ingrese su apellido paterno."/>
                        
                        <Label htmlFor="name" contenido="Ingrese su apellido materno:"/>
                        <Input tipo="text" className="campo-input" id="apellidoMat" contenido="Ingrese su apellido materno."/>

                        <Label htmlFor="username" contenido="Ingrese su correo:" />
                        <Input tipo="text" className="campo-input" id="username" contenido="ejemplo@gmail.com" required={true} />
                        
                        <Label htmlFor="password" contenido="Contraseña:" />
                        <Input tipo={showPassword ? "text" : "password"} className="campo-input" id="password" contenido="Contraseña" required={true} />
                        
                        <Label htmlFor="password" contenido="Confirme su contraseña"/>
                        <Input tipo={showPassword ? "text" : "password"} className="campo-input" id="password" contenido="Confirme su contraseña" required={true} />

                        <div className="password-toggle-container">
                            <Input tipo="checkbox" id="show-password" click={togglePassword} />
                            <Label htmlFor="show-password" contenido="Mostrar contraseña" className="password-toggle-label" />
                        </div>
                        <Button tipo="submit" nombre="Registrarse"/>
                    </form>
                </div>
            </div>
        } />
        </>
    )
}

export default Registro;
