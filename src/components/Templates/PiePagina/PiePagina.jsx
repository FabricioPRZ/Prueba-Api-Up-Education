import React from "react";
import Footer from '../../Atoms/Footer/Footer'
import Imagen from "../../Atoms/Imagen/Imagen";
import Facebook from '../../../assets/recursos/facebook.png'
import WhatsApp from '../../../assets/recursos/WhatsApp.png'
import Instagram from '../../../assets/recursos/Instagram.png'
import './Pie.css'

const PiePagina = () => {
    return (
        <Footer className="footer">
            <Imagen src={Facebook} alt="facebook" className="redes-sociales"/>
            <Imagen src={WhatsApp} alt="WhatsApp" className="redes-sociales"/>
            <Imagen src={Instagram} alt="Instagram" className="redes-sociales"/>
        </Footer>   
    );
}

export default PiePagina;