import React from "react";
import "./products.css";
import { Parallax } from "react-parallax";

function Products() {
  return (
    <div className="products">
      <Parallax bgImage={require("../../assets/banner-dolce-7.jpg")} strength={300}>
        <div className="products__parallax">
          <hr className="header__line-1" />
          <div className="products__title">Torte eccezionali</div>
          <hr className="header__line-2" />
        </div>
      </Parallax>
      <div className="products__list">
        <a href="/prodotti">
          <button className="button">Dettagli</button>
        </a>
      </div>
    </div>
  );
}

export default Products;
