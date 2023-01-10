import React from "react";
import "./AboutUs.css";
import AboutUsCards from "./AboutUsCards";

const AboutUs = () => {
  return (
    <div>
      {/* first block */}
      <div className="firstBlock">
        <h1 className="txt-white center">Наша команда</h1>
        <p className="txt-grey center">
          Наш фундамент — команда высокого класса. Мы объединены общей страстью
          к созданию лучших компьютеров в мире.
        </p>
      </div>

      {/* second block */}
      <div className="third-block">
        <div className="block">
          <div className="left-side">
            <span className="txt-white">Компания HYPERPC</span>
            <span className="txt-grey">
              Компания HYPERPC была основана в 2009 году. Мы — официальный
              партнер таких известных технологических гигантов как NVIDIA,
              Intel, Microsoft. Нам также удалось реализовать несколько успешных
              совместных проектов с такими известными игровыми кампаниями как
              Wargaming, UbiSoft, Electronic Arts, Bethesda и Mail.Games.
            </span>
            <span className="txt-grey">
              Главный офис HYPERPC и производственный центр расположены в
              Москве. Шоурум со компьютерами и периферией находятся в Москве. Мы
              осуществляем доставку компьютеров по всей России и миру. Наша
              компания работает как с частными, так и с юридическими лицами.
            </span>
          </div>
          <div className="right-side">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ntzRciCHav8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <span className="txt-blue">
              Уважаемые покупатели! Новый шоу-рум находится по адресу ул.
              Новодмитровская д.2 к.1.
            </span>
          </div>
        </div>
      </div>
      {/* row txt */}
      <div className="row-block">
        <div className="part">
          <span></span>
          <span>13 лет</span>
          <span>
            За 13 лет мы выросли в одного из лидеров на игровом компьютерном
            рынке
          </span>
        </div>
        <div className="part">
          <span></span>
          <span>25 000 ПК</span>
          <span>
            Мы произвели более 25 тысяч игровых компьютеров для наших клиентов
          </span>
        </div>
        <div className="part">
          <span></span>
          <span>32 турнира</span>
          <span>
            ВПровели 32 киберспортивных турнира при технической поддержке
            HYPERPC
          </span>
        </div>
        <div className="part">
          <span></span>
          <span>64 блогера</span>
          <span>
            Топовых 64 ютуб блогеров и стримеров выбрали компьютер HYPERPC
          </span>
        </div>
        <div className="part">
          <span></span>
          <span>44 клуба</span>
          <span>
            Оборудовали 44 компьютерных клубов под ключ, присутствует программа
            лизинга
          </span>
        </div>
      </div>
      {/* third block */}

      <div className="second-block">
        <div className="left-side-second-block">
          {/* <CarouselForService /> */}
          <img
            src="https://hyperpc.ru/images/company/contacts/contact/update/contacts-alexander-k-alt.jpg"
            alt=""
          />
        </div>

        <div className="right-side-second-block">
          <span className="txt-white">
            Здравствуйте, я – Александр Красильников, основатель компании
            HYPERPC
          </span>
          <ul className="txt-grey dots">
            <li>
              Я прошел все этапы работы: сам продавал, собирал и доставлял
              компьютеры клиентам. Как никто другой знаю, как это делать
              правильно;
            </li>
            <li>
              За 13 лет работы мы построили компанию №1 среди производителей
              компьютеров премиум класса в России;
            </li>
            <li>
              За это время мы собрали мощную команду единомышленников, с
              которыми дружим и работаем с самого основания компании.
            </li>
          </ul>
        </div>
      </div>
      {/* text block */}
      <div className="txt-block">
        <p className="txt-white center">Наша миссия</p>
        <p className="txt-grey center bold">
          Создавать лучшие компьютеры, которые будут дарить геймерам и
          творческим профессионалам удовольствие от использования.
        </p>
        <p className="txt-grey center bold">
          HYPERPC это восхитительный дизайн, высокая производительность,
          безупречное качество и персональный сервис.
        </p>
      </div>

      {/* forth block */}
      <div>
        <h2 className="txt-center display-none">Наши ценности</h2>
        <div className="square-container">
          <div className="square">
            <p className="txt-white-small center ">
              Игры и творчество является основой всего, что мы делаем
            </p>
          </div>
          <div className="square">
            <p className="txt-white-small center ">
              Лучше делать что - то одно, но действительно хорошо
            </p>
          </div>
          <div className="square">
            <p className="txt-white-small center ">Постоянное улучшение</p>
          </div>
          <div className="square">
            <p className="txt-white-small center ">Желание побеждать</p>
          </div>
          <div className="square">
            <p className="txt-white-small center ">
              Руководство личным примером
            </p>
          </div>
          <div className="square">
            <p className="txt-white-small center ">
              Делать выводы и не повторять ошибок
            </p>
          </div>
          <div className="square">
            <p className="txt-white-small center ">
              Дисциплина и соблюдение правил
            </p>
          </div>
          <div className="square">
            <p className="txt-white-small center ">
              Держать быстрый темп и быть проактивным
            </p>
          </div>
        </div>
      </div>
      {/* cards block */}
      <AboutUsCards />
    </div>
  );
};

export default AboutUs;
