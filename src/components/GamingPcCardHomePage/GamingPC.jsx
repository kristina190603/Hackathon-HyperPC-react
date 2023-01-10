import React from "react";
import Footer from "../Footer/Footer";
import "../GamingPcCardHomePage/GamingPC.css";
import Lumen from "./Lumen";
const GamingPC = () => {
  return (
    <>
      <div className="gamingContainer">
        <h2>ИГРОВЫЕ КОМПЬЮТЕРЫ</h2>
        <p className="pLarge">Самые лучшие игровые компьютеры HYPERPC</p>
        <p className="pSmall">от 161 000 ₽</p>

        <h3 className="h2change">Какой HYPERPC вам подходит?</h3>

        <nav className="navLinks navLinksSticky">
          <div>
            <a href="lumen">
              <img
                src="https://hyperpc.ru/images/product/gaming-pc/content/hyperpc-lumen-plus-platinum-black.jpg?"
                alt=""
              />
            </a>
            <h2>
              <a href="lumen">LUMEN</a>
            </h2>
            <p>Идеальный игровой компьютер</p>
            <p>От 161 600 ₽ | 6 006 ₽/мес</p>
            <button><a href="lumen">ПОДРОБНЕЕ</a></button>
          </div>

          <div>
            <a href="nanoX">
              <img
                src="https://hyperpc.ru/images/product/gaming-pc/content/hyperpc-nano-x-silver-us.jpg"
                alt=""
              />
            </a>

            <h2>
              <a href="nanoX">NANO X</a>
            </h2>
            <p>Компактный игровой компьютер</p>
            <p>От 179 900 ₽ | 6 686 ₽/мес</p>
            <button><a href="nanoX">ПОДРОБНЕЕ</a></button>
          </div>

          <div>
            <a href="dynamic">
              <img
                src="https://hyperpc.ru/images/product/dynamic/update_landing/pc/black-rgb/teaser/update/hyperpc-dynamic-black-rgb-alt.jpg"
                alt=""
              />
            </a>

            <h2>
              <a href="dynamic">DYNAMIC</a>
            </h2>
            <p>Мощный игровой компьютер</p>
            <p>От 385 800 ₽ | 14 338 ₽/мес</p>
            <button><a href="dynamic">ПОДРОБНЕЕ</a></button>
          </div>

          <div>
            <a href="volt">
              <img
                src="https://hyperpc.ru/images/product/gaming-pc/content/hyperpc-volt-silver-us.jpg"
                alt=""
              />
            </a>

            <h2>
              <a href="volt">VOLT</a>
            </h2>
            <p>Современный игровой компьютер</p>
            <p>От 299 000 ₽ | 11 112 ₽/мес</p>
            <button><a href="volt">ПОДРОБНЕЕ</a></button>
          </div>

          <div>
            <a href="cyber">
              <img
                src="https://hyperpc.ru/images/product/gaming-pc/content/hyperpc-cyber-standard-black-us.jpg"
                alt=""
              />
            </a>
            <h2>
              <a href="cyber">CYBER</a>
            </h2>
            <p>Самый мощный игровой компьютер</p>
            <p>От 321 000 ₽ | 11 930 ₽/мес</p>
            <button><a href="cyber">ПОДРОБНЕЕ</a></button>
          </div>
        </nav>
      </div>
      <Footer />
    </>
  );
};

export default GamingPC;
