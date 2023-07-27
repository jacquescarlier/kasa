import React from "react";

function Banner({ image, title, alt }) {
 
  return (
    <section className="image-banner">
      <img src={image} alt={alt} />
      <h1 className="banner-text"><p>Chez vous,</p><p>partout et ailleurs</p></h1>
    </section>
  );
}

export default Banner;
