import React from "react";
import Barra from '../../../assets/recursos/barraVertical.png';
import Logo from '../../../assets/recursos/Logo-UpEducation.svg';
import H3 from "../../Atoms/H3/H3";
import Imagen from "../../Atoms/Imagen/Imagen";
import Parrafo from "../../Atoms/Parrafo/Parrafo";
import Button from "../../Atoms/Button/Button";
import './Modul.css';

const Modulos = ({ imageSrc }) => {
    return (
        <>
            <div className="course">
                <H3 Contenido="Algebra Lineal"/>
                <Imagen src={imageSrc} alt="Course Image"/>
                <div className="course-info">
                    <div className="course-modules">
                        <div className="parrafo-custom">
                            <Parrafo contenido={`𝟯 𝗠𝗼𝗱𝘂𝗹𝗼𝘀\n• Matrices\n• Gauss Jordan\n• Crammer`}/>
                        </div>
                        <div className="vertical-bar">
                            <Imagen src={Barra} alt="Vertical Bar"/>
                        </div>
                        <Imagen src={Logo} alt="Logo" className="course-logo"/>
                    </div>
                    <Button nombre="Iniciar curso" className="course-button"/>
                </div>
            </div>
        </>
    );
}

export default Modulos;
