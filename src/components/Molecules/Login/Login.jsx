import React, { useState } from "react";
import Imagen from '../../Atoms/Imagen/Imagen'
import EducationImage from '../../../assets/recursos/education.png'
import H2 from "../../Atoms/H2/H2";
import Main from "../../Atoms/Main/Main";
import Input from "../../Atoms/Input/Input";
import Label from "../../Atoms/Label/Label";
import Button from "../../Atoms/Button/Button"
import './Login.css';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <Main className="main-login" contenido={
            <div className="login-container">
                <div className="image">
                    <Imagen src={EducationImage} alt="Education Image" />
                </div>
                <div className="login-form">
                    <H2 contenido="¡Bienvenido!" />
                    <form action="#">
                        <Label htmlFor="username" contenido="Ingrese su correo:" />
                        <Input tipo="text" className="input-field" id="username" contenido="Correo" required={true} />
                        
                        <Label htmlFor="password" contenido="Contraseña:" />
                        <Input tipo={showPassword ? "text" : "password"} className="input-field" id="password" contenido="Contraseña" required={true} />
                        
                        <div className="show-password-container">
                            <Input tipo="checkbox" id="show-password" click={togglePassword} />
                            <Label htmlFor="show-password" contenido="Mostrar contraseña" className="show-password-label" />
                        </div>
                        <Button tipo="submit" nombre="Ingresar"/>
                    </form>
                </div>
            </div>
        } />
    );
}

export default Login;
