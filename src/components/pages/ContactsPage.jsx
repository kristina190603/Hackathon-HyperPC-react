import React from "react";
import Footer from "../Footer/Footer";
import ContactsCarousel from "./ContactsCarousel";
import "./ContactsPage.css";

const ContactsPage = () => {
  return (
    <div>
      {/* first block */}
      <div className="block">
        <h2 className="txt-white">Вопросы о покупке</h2>
        <div className="text-column">
          <p className="txt-grey">
            Мы с радостью поможем Вам с выбором компьютера и ответим на все
            интересующие вопросы
          </p>
          <p>
            <svg
              width="30"
              height="30"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#000"
                d="M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z"
              ></path>
              <circle cx="10.5" cy="16.5" r=".8"></circle>
            </svg>
            <a
              className="txt-grey"
              href="tel:+74951203520"
              data-locate="Moscow"
            >
              {" "}
              +7 (495) 120-35-20{" "}
            </a>
          </p>
          <p>
            <svg
              width="30"
              height="30"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                fill="none"
                stroke="#000"
                stroke-width="1.1"
                cx="10"
                cy="10"
                r="9"
              ></circle>
              <rect x="9" y="4" width="1" height="7"></rect>
              <path
                fill="none"
                stroke="#000"
                stroke-width="1.1"
                d="M13.018,14.197 L9.445,10.625"
              ></path>
            </svg>
            <a className="txt-grey" href="">
              {"  "}
              Ежедневно с 10:00 до 20:00
            </a>
          </p>
          <p>
            <svg
              width="30"
              height="30"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline
                fill="none"
                stroke="#000"
                points="1.4,6.5 10,11 18.6,6.5"
              ></polyline>
              <path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z"></path>
            </svg>
            <a
              className="txt-grey"
              href="mailto:hyperpc@hyperpc.ru"
              target="_blank"
            >
              {" "}
              hyperpc@hyperpc.ru
            </a>
          </p>
        </div>
      </div>
      <div className="hr"></div>
      {/* second block */}
      <div className="block">
        <div className="text-column">
          <h2 className="txt-white">Магазин</h2>
          <span>
            <svg
              width="30"
              height="30"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#000"
                stroke-width="1.01"
                d="M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z"
              ></path>
              <circle
                fill="none"
                stroke="#000"
                cx="10"
                cy="6.8"
                r="2.3"
              ></circle>
            </svg>
          </span>
          <a
            className="txt-grey"
            href="https://www.google.ru/maps/dir//55.8049575,37.5902789/@55.8049257,37.5906919,20.04z"
            data-caption="Магазин HYPERPC"
            data-type="iframe"
            aria-expanded="false"
          >
            г. Москва, ул. Новодмитровская д.2 к.1
          </a>
          <p className="txt-grey">График работы в новогодние праздники:</p>
          <ul className="txt-grey dots">
            <li>31-го декабря - до 15:00;</li>
            <li>1-го января - выходной;</li>
            <li>2-го принимаем заказы on-line с 12:00 по 20:00;</li>
            <li>с 3-го по 8-е января работаем по 11:00 по 20:00;</li>
            <li>с 9-го января работаем по стандартному графику.</li>
          </ul>
        </div>
        <ContactsCarousel id="carousell" />
      </div>
      <div className="hr"></div>
      {/* third block */}
      <div className="block">
        <div className="txt-side">
          <h2 className="txt-white">Пункт самовывоза и сервис-центр</h2>
          <p className="txt-grey">
            Проводим модернизацию, обслуживание и ремонт компьютеров
          </p>
        </div>

        <div className="text-column">
          <p>
            <svg
              width="30"
              height="30"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#000"
                d="M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z"
              ></path>
              <circle cx="10.5" cy="16.5" r=".8"></circle>
            </svg>
            <a
              className="txt-grey"
              href="tel:+74951203520"
              data-locate="Moscow"
            >
              {" "}
              +7 (495) 120-35-20{" "}
            </a>
          </p>
          <p>
            <svg
              width="30"
              height="30"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                fill="none"
                stroke="#000"
                stroke-width="1.1"
                cx="10"
                cy="10"
                r="9"
              ></circle>
              <rect x="9" y="4" width="1" height="7"></rect>
              <path
                fill="none"
                stroke="#000"
                stroke-width="1.1"
                d="M13.018,14.197 L9.445,10.625"
              ></path>
            </svg>
            <a className="txt-grey" href="">
              {"  "}
              Ежедневно с 10:00 до 20:00
            </a>
          </p>
          <p>
            <svg
              width="30"
              height="30"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline
                fill="none"
                stroke="#000"
                points="1.4,6.5 10,11 18.6,6.5"
              ></polyline>
              <path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z"></path>
            </svg>
            <a
              className="txt-grey"
              href="mailto:hyperpc@hyperpc.ru"
              target="_blank"
            >
              {" "}
              hyperpc@hyperpc.ru
            </a>
          </p>
          <span>
            <svg
              width="30"
              height="30"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#000"
                stroke-width="1.01"
                d="M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z"
              ></path>
              <circle
                fill="none"
                stroke="#000"
                cx="10"
                cy="6.8"
                r="2.3"
              ></circle>
            </svg>
          </span>
          <a
            className="txt-grey"
            href="https://www.google.ru/maps/dir//55.8049575,37.5902789/@55.8049257,37.5906919,20.04z"
            data-caption="Магазин HYPERPC"
            data-type="iframe"
            aria-expanded="false"
          >
            г. Москва, ул. Новодмитровская д.2 к.1
          </a>
        </div>
        <img
          width="30%"
          src="https://hyperpc.ru/images/company/tour/landing-shop/hyperpc-new-store-placement-944x480-alt.jpg?3"
          alt=""
        />
      </div>
      <div className="hr"></div>
      {/* forth block */}
      <div className="block">
        <div className="txt-side">
          <h2 className="txt-white">Техническая поддержка</h2>
          <p className="txt-grey">
            Проводим модернизацию, обслуживание и ремонт компьютеров
          </p>
        </div>

        <div className="text-column">
          <p>
            <svg
              width="30"
              height="30"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#000"
                d="M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z"
              ></path>
              <circle cx="10.5" cy="16.5" r=".8"></circle>
            </svg>
            <a
              className="txt-grey"
              href="tel:+74951203520"
              data-locate="Moscow"
            >
              {" "}
              +7 (495) 120-35-20{" "}
            </a>
          </p>
          <p>
            <svg
              width="30"
              height="30"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                fill="none"
                stroke="#000"
                stroke-width="1.1"
                cx="10"
                cy="10"
                r="9"
              ></circle>
              <rect x="9" y="4" width="1" height="7"></rect>
              <path
                fill="none"
                stroke="#000"
                stroke-width="1.1"
                d="M13.018,14.197 L9.445,10.625"
              ></path>
            </svg>
            <a className="txt-grey" href="">
              {"  "}
              Ежедневно с 10:00 до 20:00
            </a>
          </p>
          <p>
            <svg
              width="30"
              height="30"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline
                fill="none"
                stroke="#000"
                points="1.4,6.5 10,11 18.6,6.5"
              ></polyline>
              <path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z"></path>
            </svg>
            <a
              className="txt-grey"
              href="mailto:hyperpc@hyperpc.ru"
              target="_blank"
            >
              {" "}
              support@hyperpc.ru
            </a>
          </p>
          <p className="txt-grey">
            Сеть авторизованных сервисных центров HYPERPC на настоящий момент
            покрывает более 40 городов России.
          </p>
        </div>
        <img
          width="30%"
          src="https://hyperpc.ru/images/company/contacts/content/authorized-servise-centers.jpg?3"
          alt=""
        />
      </div>
      <div className="hr"></div>
      {/* fifth block */}
      <div className="block">
        <div className="txt-row">
          <p className="txt-white">Остались ещё вопросы?</p>

          <div>
            <input type="text" name="" id="" placeholder="name" />
            <br />
            <input type="text" name="" id="" placeholder="email" />
            <br />
            <input type="text" name="" id="" placeholder="question" />
          </div>
          <br />

          <button id="send" className="btn3">
            ОТПРАВИТЬ
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactsPage;
