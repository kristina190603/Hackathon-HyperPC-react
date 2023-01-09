import React from "react";
import "./ServicesPage.css";
import CarouselForService from "./service/CarouselForService";
import ServiceAccordion from "./service/ServiceAccordion";
import { useNavigate } from "react-router-dom";

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="first_block" style={{ height: "100vh", width: "100%" }}>
        <div className="first_txt">
          <span>СЕРВИС-ЦЕНТР</span>
          <span>HYPERPC</span>
          <span>РЕМОНТ КОМПЛЕКТУЮЩИХ И НОУТБУКОВ</span>
          <button onClick={() => navigate("/modal")}>
            ЗАПИСАТЬСЯ НА СЕРВИС
          </button>
        </div>
      </div>
      {/* second block */}
      <div className="second-block">
        <div className="left-side-second-block">
          <CarouselForService />
        </div>

        <div className="right-side-second-block">
          <span>Профессиональная мастерская HYPERPC</span>
          <span>
            Восстановление поврежденных микропроцессорных устройств – сложный
            технический процесс, требующий специальных навыков и мастерства.
            Доверьте диагностику и ремонт компьютерных комплектующих опытным
            профессионалам сервисного центра HYPERPC и получите полностью
            готовую к использованию технику быстро, качественно и надолго.
          </span>
          <div>
            <div className="parts">
              <span>Более</span>
              <span>1600</span>
              <span>Восстановленных материнских плат</span>
            </div>
            <div className="parts">
              <span>Более</span>
              <span>1500</span>
              <span>Восстановленных видеокарт</span>
            </div>
            <div className="parts">
              <span>Более</span>
              <span>2000</span>
              <span>Восстановленных ноутбуков</span>
            </div>
          </div>
        </div>
      </div>
      {/* third block */}
      <div className="block">
        <div className="left-side">
          <span className="txt-white">Широкий спектр услуг</span>
          <span className="txt-grey">
            Наш квалифицированный специалист по восстановлению компьютерного
            оборудования с 10-летним опытом работы производит ремонт любой
            сложности.
          </span>
          <span className="txt-white">Что мы делаем:</span>
          <ul className="txt-grey">
            <li>Поиск и устранение неисправностей электронных устройств;</li>
            <li>Монтаж-демонтаж SMD и BGA электронных компонентов;</li>
            <li>Ремонт комплектующих, ремонт слаботочного оборудования;</li>
            <li>
              Замена чипов, микропроцессоров, элементов питания, восстановление
              контактов и дорожек;
            </li>
            <li>Работа с программами диагностики и тестирования ПК;</li>
            <li>Прошивка микроконтроллеров.</li>
          </ul>
          <button onClick={() => navigate("/modal")} className="btn2">
            ПОСМОТРЕТЬ ПРАЙС-ЛИСТ
          </button>
        </div>
        <div className="right-side">
          <img
            src="https://hyperpc.ru/images/support/service-center/hyperpc-service-center-worker_webp.jpg"
            alt=""
            width="100%"
          />
        </div>
      </div>
      {/* forth block */}
      <div className="forth-block">
        <span className="txt-white">С нами вы получаете</span>
        <div className="block">
          <div className="each-icon">
            <span class="circle-features">
              <svg
                className="icons"
                width="60"
                height="60"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  // stroke="grey"
                  fill="gray"
                  d="M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z"
                ></path>
              </svg>
            </span>
            ;<span className="txt-white">Скорость</span>
            <span className="txt-grey txt-center-center ">
              Мы экономим ваше время и проводим работы в максимально краткие
              сроки
            </span>
            <hr />
          </div>
          <div className="each-icon">
            <span class="circle-features " uk-icon="icon: star; ratio: 3">
              <svg
                width="60"
                height="60"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  fill="none"
                  stroke="grey"
                  stroke-width="1.01"
                  points="10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27"
                ></polygon>
              </svg>
            </span>
            ;<span className="txt-white">Качество</span>
            <span className="txt-grey txt-center-center ">
              Мы используем только лучшее оборудование и оригинальные запчасти
            </span>
            <hr />
          </div>
          <div className="each-icon">
            <span
              class="circle-features"
              uk-icon="icon: hp-antivirus; ratio: 3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 20 20"
                // stroke="grey"
              >
                <path
                  fill="grey"
                  d="M10,1,2,4.16V9c0,7.79,7.79,10,7.87,10L10,19l.13,0C10.21,19,18,16.79,18,9V4.16Zm7,8c0,6.57-6,8.67-7,9-1-.3-7-2.47-7-9V4.84L10,2l7,2.8Z"
                ></path>
                <polygon
                  fill="grey"
                  points="7.32 7.85 6.61 8.56 9.79 11.74 14.39 7.15 13.68 6.44 9.79 10.33 7.32 7.85"
                ></polygon>
              </svg>
            </span>
            ;<span className="txt-white">Гарантия</span>
            <span className="txt-grey txt-center-center ">
              На все работы и комплектующие распространяется гарантия 6 месяцев
            </span>
            <hr />
          </div>
          <div className="each-icon">
            <span class="circle-features ">
              <svg
                className="icons"
                width="60"
                height="60"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke="grey"
                  d="M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611"
                ></path>
              </svg>
            </span>
            ;
            <span className="txt-white txt-only-center">
              Согласование этапов
            </span>
            <span className="txt-grey txt-center-center ">
              Вы платите только за согласованную услугу
            </span>
            <hr />
          </div>
          <div className="each-icon">
            <span
              class="circle-features "
              uk-icon="icon: hp-logistics; ratio: 3"
            >
              <svg
                width="60"
                height="60"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" stroke="grey" d="M1,10.5 L19,10.5"></path>
                <path
                  fill="none"
                  stroke="grey"
                  d="M2.35,15.5 L17.65,15.5"
                ></path>
                <path
                  fill="none"
                  stroke="grey"
                  d="M2.35,5.5 L17.523,5.5"
                ></path>
                <path
                  fill="none"
                  stroke="grey"
                  d="M10,19.46 L9.98,19.46 C7.31,17.33 5.61,14.141 5.61,10.58 C5.61,7.02 7.33,3.83 10,1.7 C10.01,1.7 9.99,1.7 10,1.7 L10,1.7 C12.67,3.83 14.4,7.02 14.4,10.58 C14.4,14.141 12.67,17.33 10,19.46 L10,19.46 L10,19.46 L10,19.46 Z"
                ></path>
                <circle
                  fill="none"
                  stroke="grey"
                  cx="10"
                  cy="10.5"
                  r="9"
                ></circle>
              </svg>
            </span>
            ;<span className="txt-white">Доставка</span>
            <span className="txt-grey txt-center-center ">
              Забор и возврат компонентов курьером HYPERPC
            </span>
            <hr />
          </div>
        </div>
        <button onClick={() => navigate("/modal")} className="btn3">
          ЗАПИСАТЬСЯ НА СЕРВИС
        </button>
      </div>
      {/* fifth block */}
      <div>
        <h2 className="txt-center">Выберите свою неисправность</h2>
        <div className="square-container">
          <div className="square">
            <a href="#modal-does-not-start">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 20 20"
                  fill="grey"
                >
                  <path d="M20,4H14V0H13V4H7V0H6V4H0V5H2v8.2A4.81,4.81,0,0,0,6.8,18H9v2h2V18h2.2A4.81,4.81,0,0,0,18,13.2V5h2Zm-3,9.2A3.81,3.81,0,0,1,13.2,17H6.8A3.81,3.81,0,0,1,3,13.2V5H17Z"></path>
                  <polygon points="11.8 6.96 10.97 6.4 7.68 11.34 10.45 11.34 8.2 14.72 9.03 15.28 12.32 10.34 9.55 10.34 11.8 6.96"></polygon>
                </svg>
              </span>
            </a>
            <p>Не включается</p>
          </div>
          <div className="square">
            <a href="#modal-not-image" uk-toggle="" aria-expanded="false">
              <span>
                <svg
                  fill="grey"
                  width="100"
                  height="100"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="8" y="15" width="1" height="2"></rect>
                  <rect x="11" y="15" width="1" height="2"></rect>
                  <rect x="5" y="16" width="10" height="1"></rect>
                  <rect
                    fill="none"
                    stroke="grey"
                    x="1.5"
                    y="3.5"
                    width="17"
                    height="11"
                  ></rect>
                </svg>
              </span>
            </a>
            <p>Нет изображения</p>
          </div>
          <div className="square">
            <a
              href="#modal-not-correct-image"
              uk-toggle=""
              aria-expanded="false"
            >
              <span>
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle fill="grey" cx="16.1" cy="6.1" r="1.1"></circle>
                  <rect
                    fill="none"
                    stroke="grey"
                    x=".5"
                    y="2.5"
                    width="19"
                    height="15"
                  ></rect>
                  <polyline
                    fill="none"
                    stroke="grey"
                    stroke-width="1.01"
                    points="4,13 8,9 13,14"
                  ></polyline>
                  <polyline
                    fill="none"
                    stroke="grey"
                    stroke-width="1.01"
                    points="11,12 12.5,10.5 16,14"
                  ></polyline>
                </svg>
              </span>
            </a>
            <p className="txt-only-center">Некорректное изображение</p>
          </div>
          <div className="square">
            <a href="#modal-liquid-got-in" uk-toggle="" aria-expanded="false">
              <span>
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="grey"
                    d="M10.21,1 L0,11.21 L8.1,19.31 L18.31,9.1 L10.21,1 L10.21,1 Z M16.89,9.1 L15,11 L1.7,11 L10.21,2.42 L16.89,9.1 Z"
                  ></path>
                  <path
                    fill="grey"
                    stroke="grey"
                    stroke-width="1.1"
                    d="M6.42,2.33 L11.7,7.61"
                  ></path>
                  <path
                    fill="grey"
                    d="M18.49,12 C18.49,12 20,14.06 20,15.36 C20,16.28 19.24,17 18.49,17 L18.49,17 C17.74,17 17,16.28 17,15.36 C17,14.06 18.49,12 18.49,12 L18.49,12 Z"
                  ></path>
                </svg>
              </span>
            </a>
            <p>Попала жидкость</p>
          </div>
          <div className="square">
            <a
              href="#modal-laptop-not-charging"
              uk-toggle=""
              aria-expanded="false"
            >
              <span>
                <svg
                  fill="grey"
                  width="100"
                  height="100"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z"></path>
                </svg>
              </span>
            </a>
            <p>Не заряжается ноутбук</p>
          </div>
          <div className="square">
            <a
              href="#modal-keyboard-not-working"
              uk-toggle=""
              aria-expanded="false"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 20 20"
                  fill="grey"
                >
                  <rect x="4" y="7" width="2" height="1"></rect>
                  <rect x="9" y="7" width="2" height="1"></rect>
                  <rect x="14" y="7" width="2" height="1"></rect>
                  <rect x="4" y="10" width="2" height="1"></rect>
                  <rect x="9" y="10" width="2" height="1"></rect>
                  <rect x="14" y="10" width="2" height="1"></rect>
                  <rect x="4" y="13" width="2" height="1"></rect>
                  <rect x="9" y="13" width="2" height="1"></rect>
                  <rect x="14" y="13" width="2" height="1"></rect>
                  <path d="M0,3V18H20V3ZM19,17H1V4H19Z"></path>
                </svg>
              </span>
            </a>
            <p>Не работает клавиатура</p>
          </div>
          <div className="square">
            <a href="#modal-no-sound" uk-toggle="" aria-expanded="false">
              <span>
                <svg
                  fill="grey"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 20 20"
                >
                  <path d="M4.24,6H1.92A1.92,1.92,0,0,0,0,7.92v4.16A1.92,1.92,0,0,0,1.92,14H4.24a4.35,4.35,0,0,0,4.13,3H11V3H8.37A4.35,4.35,0,0,0,4.24,6ZM4,13H1.92A.92.92,0,0,1,1,12.08V7.92A.92.92,0,0,1,1.92,7H4v6Zm6,3H8.37A3.37,3.37,0,0,1,5,12.63V7.37A3.37,3.37,0,0,1,8.37,4H10Z"></path>
                  <path d="M17,3.33l-.67.74a8,8,0,0,1,0,11.86l.67.74A9,9,0,0,0,17,3.33Z"></path>
                  <path d="M13.9,5.44l-.65.76a5,5,0,0,1,0,7.6l.65.76a6,6,0,0,0,0-9.12Z"></path>
                </svg>
              </span>
            </a>
            <p>Не работает звук</p>
          </div>
          <div className="square">
            <a href="#modal-not-working-usb" uk-toggle="" aria-expanded="false">
              <span>
                <svg
                  fill="grey"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 20 20"
                >
                  <path d="M14,14v2H3a1.05,1.05,0,0,1-1-1V12a1.05,1.05,0,0,1,1-1H17a2.05,2.05,0,0,0,2-2V6a2.05,2.05,0,0,0-2-2H6V1H0V7H6V5H17a1.05,1.05,0,0,1,1,1V9a1.05,1.05,0,0,1-1,1H3a2.05,2.05,0,0,0-2,2V15a2.05,2.05,0,0,0,2,2H14v3h6V14ZM5,6H1V2H5ZM19,19H15V15h4Z"></path>
                </svg>
              </span>
            </a>
            <p>Не работает USB</p>
          </div>
          <div className="square">
            <a
              href="#modal-not-working-touchpad"
              uk-toggle=""
              aria-expanded="false"
            >
              <span>
                <svg
                  fill="grey"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 20 20"
                >
                  <rect x="10" y="9" width="1" height="4"></rect>
                  <rect x="10" width="1" height="4"></rect>
                  <path d="M13.1,5H7.9A3.9,3.9,0,0,0,4,8.9v7.2A3.9,3.9,0,0,0,7.9,20h5.2A3.9,3.9,0,0,0,17,16.1V8.9A3.9,3.9,0,0,0,13.1,5ZM16,16.1A2.9,2.9,0,0,1,13.1,19H7.9A2.9,2.9,0,0,1,5,16.1V8.9A2.9,2.9,0,0,1,7.9,6h5.2A2.9,2.9,0,0,1,16,8.9Z"></path>
                </svg>
              </span>
            </a>
            <p>Не работает тачпад</p>
          </div>
          <div className="square">
            <a href="#modal-pc-freeze" uk-toggle="" aria-expanded="false">
              <span>
                <svg
                  fill="grey"
                  width="100"
                  height="100"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="4,5 1,5 1,9 2,9 2,6 4,6"></polygon>
                  <polygon points="1,16 2,16 2,18 4,18 4,19 1,19"></polygon>
                  <polygon points="14,16 14,19 11,19 11,18 13,18 13,16"></polygon>
                  <rect
                    fill="none"
                    stroke="grey"
                    x="5.5"
                    y="1.5"
                    width="13"
                    height="13"
                  ></rect>
                  <rect x="1" y="11" width="1" height="3"></rect>
                  <rect x="6" y="18" width="3" height="1"></rect>
                </svg>
              </span>
            </a>
            <p>Устройство зависает</p>
          </div>
          <div className="square">
            <a href="#modal-not-on-the-list" uk-toggle="" aria-expanded="false">
              <span>
                <svg
                  fill="grey"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.5,5.49A4.5,4.5,0,0,0,6,10c0,2.11,2,6,2,7h5c0-1,2-4.9,2-7A4.5,4.5,0,0,0,10.5,5.49Zm2.29,8.81c-.27.72-.47,1.26-.6,1.7H8.81c-.13-.44-.33-1-.6-1.7A16.23,16.23,0,0,1,7,10a3.5,3.5,0,0,1,7,0A16.23,16.23,0,0,1,12.79,14.3Z"></path>
                  <rect x="8" y="19" width="5" height="1"></rect>
                  <rect x="1" y="10" width="3" height="1"></rect>
                  <rect x="17" y="10" width="3" height="1"></rect>
                  <rect
                    x="15.66"
                    y="3.34"
                    width="3"
                    height="1"
                    transform="rotate(-45 17.161 3.842)"
                  ></rect>
                  <rect x="10" width="1" height="3"></rect>
                  <rect
                    x="3.34"
                    y="2.34"
                    width="1"
                    height="3"
                    transform="rotate(-45 3.84 3.84)"
                  ></rect>
                </svg>
              </span>
            </a>
            <p>Проблема известна</p>
          </div>
          <div className="square">
            <a href="#modal-not-on-the-list" uk-toggle="" aria-expanded="false">
              <span>
                <svg
                  fill="grey"
                  width="100"
                  height="100"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.13,11.59 C11.97,12.84 10.35,14.12 9.1,14.16 C6.17,14.2 9.89,9.46 8.74,8.37 C9.3,8.16 10.62,7.83 10.62,8.81 C10.62,9.63 10.12,10.55 9.88,11.32 C8.66,15.16 12.13,11.15 12.14,11.18 C12.16,11.21 12.16,11.35 12.13,11.59 C12.08,11.95 12.16,11.35 12.13,11.59 L12.13,11.59 Z M11.56,5.67 C11.56,6.67 9.36,7.15 9.36,6.03 C9.36,5 11.56,4.54 11.56,5.67 L11.56,5.67 Z"></path>
                  <circle
                    fill="none"
                    stroke="grey"
                    stroke-width="1.1"
                    cx="10"
                    cy="10"
                    r="9"
                  ></circle>
                </svg>
              </span>
            </a>
            <p>Нет в списке</p>
          </div>
        </div>
      </div>

      {/* sixth block */}
      <h2 className="txt-center">Часто задаваемые вопросы</h2>

      <ServiceAccordion />
      {/* seventh block */}
      <div className="seventh_block">
        <h2 className="txt-center ">Наши работы</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/mBOTWeCRQjg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      {/* <video src="https://www.youtube.com/watch?v=mBOTWeCRQjg&feature=youtu.be"></video> */}
    </div>
  );
};

export default ServicesPage;
