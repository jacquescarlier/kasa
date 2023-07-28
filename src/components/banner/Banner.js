import React from "react";

function Banner({ image, title1, title2, alt }) {
 
  return (
    <section className="image-banner banner-home banner-about">
      <img src={image} alt={alt} />
      <h1 className="banner-text"><p>{title1}</p><p>{title2}</p></h1>
    </section>
  );
}

export default Banner;
