import React from "react";
import Imagen from "../../Atoms/Imagen/Imagen";
import Error from '../../../assets/recursos/Logo-UpEducation.svg'
import H1 from "../../Atoms/H1/H1";
import Barra from "../../organisms/Barra/Barra";
import PiePagina from "../../Templates/PiePagina/PiePagina";
import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <Barra />
            <div className="not-found-container">
                <Imagen src={ Error } alt="Error" className="not-found-image" />
                <H1 contenido="Not Found" className="not-found-title" />
            </div>
            <PiePagina/>
        </>
    );
}

export default NotFound;
