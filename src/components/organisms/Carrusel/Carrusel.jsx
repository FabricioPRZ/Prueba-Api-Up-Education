import React from "react";
import banner from '../../../assets/banners/banner-photoshop.png'
import banner1 from '../../../assets/banners/banner-diseño.png'
import banner3 from "../../../assets/banners/banner-photoshop2.png";
import useCarrusel from "./carrusel";
import "./Carrusel.css";

const Carrusel = () => {
    const images = [banner, banner1, banner3];
    const currentIndex = useCarrusel(images);

    return (
        <div className="carrusel">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={index === currentIndex ? "slide active" : "slide"}
                    style={{ backgroundImage: `url(${image})` }}
                />
            ))}
        </div>
    );
};

export default Carrusel;
