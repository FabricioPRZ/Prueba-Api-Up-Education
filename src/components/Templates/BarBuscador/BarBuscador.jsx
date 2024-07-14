import React from "react";
import Logo from '../../../assets/recursos/Logo-UpEducation.svg';
import barra from '../../../assets/recursos/barraVertical.png';
import Header from '../../Atoms/Header/Header';
import Imagen from '../../Atoms/Imagen/Imagen';
import H1 from '../../Atoms/H1/H1';  
import H2 from '../../Atoms/H2/H2';
import Nav from '../../Atoms/Nav/Nav';
import Ul from '../../Atoms/Ul/Ul';
import Li from '../../Atoms/Li/Li';
import Enlace from '../../Atoms/Enlace/Enlace';
import Input from "../../Atoms/Input/Input";
import './BarBuscador.css'

const BarBuscador = () => {
    return (
        <Header className="header-encabezado">
            <div className="header-content">
                <div className="logo">
                    <Imagen src={Logo} alt="Logo-UpEducation" />
                </div>
                <div className="vertical-bar">
                    <Imagen src={barra} alt="Barra Vertical" />
                </div>
                <div className="title">
                    <H1 contenido="𝗨𝗽𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻" />
                    <H2 className="main-title" contenido="Cursos online más completos de México" />
                </div>
                <Input contenido={"Busca tu curso aqui..."} className="Input-buscador"/>
            </div>
            <Nav className="bottom-nav">
                <Ul className="nav-list" contenido={
                    <>
                        <Li className="nav-item" contenido={<Enlace direccion="http://localhost:3000" className="nav-link">Inicio</Enlace>} />
                        <Li className="nav-item" contenido={<Enlace direccion="#" className="nav-link">Nosotros</Enlace>} />
                        <Li className="nav-item" contenido={<Enlace direccion="#" className="nav-link">Cursos</Enlace>} />
                        <Li className="nav-item" contenido={<Enlace direccion="#" className="nav-link">Requisitos</Enlace>} />
                        <Li className="nav-item" contenido={<Enlace direccion="#" className="nav-link">Infórmate</Enlace>} />
                        <Li className="nav-item" contenido={<Enlace direccion="#" className="nav-link">Contacto</Enlace>} />
                        <Li className="nav-item" contenido={<Enlace direccion="#" className="nav-link">Ayuda</Enlace>} />
                    </>
                } />
            </Nav>
        </Header>
    );
}

export default BarBuscador;

