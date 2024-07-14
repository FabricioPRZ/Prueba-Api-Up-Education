import React from "react";

const Button = ({ nombre, className, imgSrc, imgAlt }) => {
  return (
    <>
      <button className={className}>
        {imgSrc && <img src={imgSrc} alt={imgAlt} className="login-icon" />}
        {nombre}
      </button>
    </>
  );
}

export default Button;
