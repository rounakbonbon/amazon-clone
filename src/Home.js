import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Logitech G602 Lag-Free Wireless Gaming Mouse – 11 Programmable Buttons, Upto 2500 DPI"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81ZQgWwuVzL._AC_SY400_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="49538094"
            title="Logitech G602 Lag-Free Wireless Gaming Mouse – 11 Programmable Buttons, Upto 2500 DPI"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81ZQgWwuVzL._AC_SY400_.jpg"
            rating={4}
          />
          <Product
            id="49538094"
            title="Logitech G602 Lag-Free Wireless Gaming Mouse – 11 Programmable Buttons, Upto 2500 DPI"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81ZQgWwuVzL._AC_SY400_.jpg"
            rating={4}
          />
          <Product
            id="49538094"
            title="Logitech G602 Lag-Free Wireless Gaming Mouse – 11 Programmable Buttons, Upto 2500 DPI"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81ZQgWwuVzL._AC_SY400_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="49538094"
            title='Samsung – T55 Series C32T550FDN 32" 1000R Curved Monitor, Dark Blue Gray (LC32T550FDNXZA)'
            price={239.0}
            image="https://m.media-amazon.com/images/I/71j-LEOPs-L._AC_UY218_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
