import React from "react";
import Footer from "../Footer/Footer";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import LanguageIcon from "@mui/icons-material/Language";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import UploadIcon from "@mui/icons-material/Upload";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import PhoneIcon from "@mui/icons-material/Phone";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import DnsIcon from "@mui/icons-material/Dns";
import SecurityIcon from "@mui/icons-material/Security";
import "../GamingPcCardHomePage/NanoX.css";
const NanoX = () => {
  return (
    <>
      <div>
        <div>
          <div>
            <h3 id="nanoX" className="lumenH3">
              HYPERPC NANO X
            </h3>
            <div className="d-flexBlock">
              <div>
                <img
                  className="nanoImg"
                  src="https://hyperpc.ru/images/product/nano-x/main-content/hpc-gallery-block-alt.jpg"
                  alt="image"
                />
              </div>
              <div className="lumenTextBlock">
                <h5>Шасси NANO X</h5>
                <h2>Высшее качество</h2>
                <p>
                  Корпус NANO X, выполненный из алюминиево-магниевого сплава и
                  закаленного стекла, обладает высокой надежностью и
                  износостойкостью. Элегантный, минималистичный дизайн кейса в
                  сочетании с инновационной структурой металла образовывают
                  прочную конструкцию и стильный внешний вид компьютера.
                </p>

                <div className="blocksImageLumen">
                  <img
                    src="https://hyperpc.ru/images/product/nano-x/gallery/thumb/hyperpc-nano-x-gallery-thumb-01.jpg"
                    alt=""
                  />
                  <img
                    src="https://hyperpc.ru/images/product/nano-x/gallery/thumb/hyperpc-nano-x-gallery-thumb-02.jpg"
                    alt=""
                  />
                  <img
                    src="https://hyperpc.ru/images/product/nano-x/gallery/thumb/hyperpc-nano-x-gallery-thumb-03.jpg"
                    alt=""
                  />
                </div>

                <div className="blocksImageLumen">
                  <img
                    src="https://hyperpc.ru/images/product/nano-x/gallery/thumb/hyperpc-nano-x-gallery-thumb-04.jpg"
                    alt=""
                  />
                  <img
                    src="https://hyperpc.ru/images/product/nano-x/gallery/thumb/hyperpc-nano-x-gallery-thumb-05.jpg"
                    alt=""
                  />
                  <img
                    src="https://hyperpc.ru/images/product/nano-x/gallery/thumb/hyperpc-nano-x-gallery-thumb-06.jpg?2"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="backgroundTExt">
            <div className="secondBlockText">
              <h2>Производительность</h2>
              <h3>Технологии будущего уже сегодня</h3>
              <p>
                HYPERPC NANO X открывает новую эпоху в области компактных
                устройств широкого спектра возможностей: игры, монтаж, рендеринг
                - один компьютер для множества требовательных задач.
              </p>
            </div>

            <div className="blocksParams">
              <div>
                <p>Cyberpunk 2077</p>
                <p className="p2">67 FPS</p>
              </div>

              <div>
                <p>PUBG</p>
                <p className="p2">149 FPS</p>
              </div>

              <div>
                <p>CoD: Warzone</p>
                <p className="p2">137 FPS</p>
              </div>

              <div>
                <p>Fortnite</p>
                <p className="p2">102 FPS</p>
              </div>

              <div>
                <p>God of War</p>
                <p className="p2">355 FPS</p>
              </div>
            </div>
            <p className="paramsP">
              Полученные показатели FPS являются усредненными и служат для
              демонстрации относительной производительности <br /> системы на
              максимальных настройках графики с видеокартой GeForce RTX 3080 Ti
              в разрешении 3840x2160px.
            </p>
            <img
              className="backImage"
              src="https://hyperpc.ru/images/product/nano-x/main-content/hpc-nano-x-game-block.jpg"
              alt=""
            />
          </div>

          <div className="informationForNanoX">
            <div className="blockWidth">
              <div className="BlockTextLumen">
                <h2>
                  УСКОРЬТЕ ПУТЬ ОТ <br /> ИДЕИ К ВОПЛОЩЕНИЮ
                </h2>
                <h3>ИЗОБРЕТАЯ ГРАФИКУ ЗАНОВО</h3>
                <p>
                  Графические карты NVIDIA ускоряют рабочий процесс благодаря
                  невероятному росту производительности, позволяя выполнять
                  задачи до 12 раз быстрее. Сокращение времени ожидания означает
                  больше задач и возможностей, а также рекордное ускорение
                  рабочего процесса. Добро пожаловать в NVIDIA Studio, ваше
                  новое творческое пространство.
                </p>
                <ul className="ulList">
                  <li>
                    <i>
                      <img
                        width="50"
                        height="40"
                        src="https://hyperpc.ru/images/product/nano/_temp/logo/ai.png"
                        alt=""
                      />
                    </i>
                    <div>
                      Добавляйте впечатляющие эффекты в Adobe Premiere Pro без
                      снижения производительности при рендеринге
                    </div>
                  </li>
                  <div className="divLine"></div>

                  <li>
                    <i>
                      <img
                        width="50"
                        height="40"
                        src="https://hyperpc.ru/images/product/nano/_temp/logo/8k-video.png"
                        alt=""
                      />
                    </i>
                    <div>
                      Работайте с RED RAW-файлами в разрешении 8K без
                      предварительного кэширования или создания прокси
                    </div>
                  </li>

                  <li>
                    <i>
                      <img
                        width="50"
                        height="40"
                        src="https://hyperpc.ru/images/product/nano/_temp/logo/ai.png"
                        alt=""
                      />
                    </i>
                    <div>
                      Ускорьте цветокоррекцию и редактирование благодаря новым
                      производительным инструментам на базе ИИ в DaVinci Resolve
                      от Blackmagic Design
                    </div>
                  </li>
                  <div className="divLine"></div>
                </ul>
              </div>
              <div className="blockWithImage">
                <img
                  src="https://hyperpc.ru/images/product/nano-x/geforce-rtx-3080-alt.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="divLine"></div>

          <div className="informationForLumen2">
            <div className="blockWidth2">
              <div className="BlockTextLumen2">
                <h2>Процессор</h2>
                <h3>Больше ядер, больше вычислительной мощи</h3>
                <p>
                  Intel Core i7-12700(F) – 12-ядерный процессор, признанный
                  одним из лучших игровым процессором, а его базовая частота 2,1
                  ГГц удовлетворит большинство пользователей, требующих высокой
                  скорости. Являясь вычислительным центром HYPERPC NANO X, Intel
                  Core i7-12700(F) также имеет технологию Intel Turbo Boost,
                  которая позволяет увеличивать частоту до 4.9 ГГц, что придется
                  по вкусу всем геймерам, ищущим высокой производительности.
                </p>
              </div>
              <div className="blockWithImage2">
                <div className="charac">
                  <div>
                    <p>
                      Базовая <br /> тактовая частота
                    </p>
                    <p className="p2">2.1 ГГц</p>
                  </div>

                  <div>
                    <p>
                      Ускорение <br /> Turbo Boost до
                    </p>
                    <p className="p2">4.9 ГГц</p>
                  </div>
                </div>
                <img
                  src="https://hyperpc.ru/images/product/lumen/intel-11th-family-logo.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="divLine"></div>

          <div className="informationForLumen2">
            <div className="blockWidth2">
              <div className="BlockTextLumen2">
                <h2>Память и накопители</h2>
                <h3>Запредельная скорость обработки данных</h3>
                <p>
                  Сверхбыстрые модули памяти Kingston Fury Beast DDR5 объемом до
                  64 ГБ обеспечат вам запредельную скорость работы. SSD идеально
                  подойдет для интенсивных нагрузок и надежно сохранит любые
                  данные, а повышенная пропускная способность поможет решить
                  самые сложные задачи в кратчайший срок.
                </p>
              </div>
              <div className="blockWithImage2">
                <div className="charac2">
                  <div>
                    <p>
                      Базовая <br /> тактовая частота
                    </p>
                    <p className="p2">3.6 ГГц</p>
                  </div>

                  <div>
                    <p>
                      Чтения <br />
                      SSD-накопителей до
                    </p>
                    <p className="p2">7 ГБ/с</p>
                  </div>

                  <div>
                    <p>
                      Частота <br />
                      памяти до
                    </p>
                    <p className="p2">6000 МГц</p>
                  </div>

                  <div>
                    <p>
                      Объем <br />
                      хранения до
                    </p>
                    <p className="p2">20 ТБ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divLine"></div>

          <div className="informationForLumen3">
            <div className="blockWidth">
              <div className="BlockTextLumen3">
                <h2>Система охлаждения</h2>
                <h3>Хладнокровие в любой ситуации</h3>
                <p>
                Хорошее охлаждение – залог стабильной работы компьютера во время жарких виртуальных сражений. Система охлаждения HYPERPC WaterCooling RGB 240/360 привносит эффективность и тихую работу компьютера.
                </p>
                <p>
                Выполненный из меди, массивный теплосъемник позволяет наиболее быстро отводить тепло с поверхности центрального процессора. Благодаря использованию мощной помпы, встроенной в блок с медным теплосъемником, охлаждающая жидкость циркулирует быстро, и это способствует эффективному охлаждению вашего CPU. Высокое качество шлангов и всех соединений исключает протечку или испарение хладагента.
                </p>
              </div>
              <div className="blockWithImage1">
                <img
                  src="https://hyperpc.ru/images/catalog/hardware/cooling/hyperpc/hyperpc_watercooling_360_rgb/hpc-360-mm-wc-radiator-fans.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="divLine"></div>


          <div className="informationForLumen4">
          <div className="blockWidth">
            <div className="BlockTextLumen3">
              <h2>Сервисное обслуживание</h2>
              <h3>Премиум гарантия</h3>
              <p>
              Компания HYPERPC стремится предоставлять своим клиентам услуги высочайшего качества. Поскольку мы в службе клиентской поддержки также являемся геймерами, мы уверены, что наше сообщество заслуживает клиентского обслуживания высочайшего уровня.
              </p>

              <ul className="ulList">
                <li>
                  <i>
                    <StarBorderIcon />
                  </i>
                  <span>12 месяцев гарантии на весь компьютер</span>
                </li>
                <div className="divLine"></div>

                <li>
                  <i>
                    <UploadIcon />
                  </i>
                  <span>Модернизация с зачетом старых комплектующих</span>
                </li>
                <div className="divLine"></div>

                <li>
                  <i>
                    <LanguageIcon />
                  </i>
                  <span>Бесплатный выезд мастера по Москве и области</span>
                </li>
                <div className="divLine"></div>

                <li>
                  <i>
                    <SettingsSuggestIcon />
                  </i>
                  <span>
                    Сервисные центры в более чем 40 крупных городах России
                  </span>
                </li>
                <div className="divLine"></div>

                <li>
                  <i>
                    <LaptopChromebookIcon />
                  </i>
                  <span>Предоставление подменного компьютера</span>
                </li>
                <div className="divLine"></div>

                <li>
                  <i>
                    <PhoneIcon />
                  </i>
                  <span>
                    Техническая консультация по телефону, в мессенджерах, e-mail
                    с возможностью удаленного подключения для решения возникшей
                    ситуации
                  </span>
                </li>
                <div className="divLine"></div>

                <li>
                  <i>
                    <ViewInArIcon />
                  </i>
                  <span>Помощь с сохранением и переносом данных</span>
                </li>
                <div className="divLine"></div>

                <li>
                  <i>
                    <DnsIcon />
                  </i>
                  <span>Полная диагностика, чистка компьютера</span>
                </li>
                <div className="divLine"></div>

                <li>
                  <i>
                    <SecurityIcon />
                  </i>
                  <span>Возможность продления гарантии</span>
                </li>
              </ul>
            </div>
            <div className="blockWithImage4NanoX">
              <img
                src="https://hyperpc.ru/images/product/lumen/landing_v4/hyperpc-shield-separate-block-gr.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="divLine"></div>



        <div className="backgroundTExt2">
            <div className="secondBlockText">
              <h2>Апгрейд</h2>
              <h3>Возможности модернизации</h3>
              <p>
              Поддерживайте свой NANO X в актуальном состоянии с помощью апгрейда компонентов. Компьютер NANO X предлагает достаточно места для расширения конфигурации, позволяя заменить видеокарту, связку процессора и материской платы или установить дополнительные накопители, при этом продуманная конструкция корпуса дает возможность аккуратно проложить все необходимые кабели.
              </p>
            </div>

            <div className="blocksParams">
              <div>
                <p>Поддержка 2.5"</p>
                <p className="p2">2 SSD</p>
              </div>

              <div>
                <p>Поддержка до</p>
                <p className="p2">12 USB</p>
              </div>

              <div>
                <p>Вес до</p>
                <p className="p2">20 кг</p>
              </div>

              <div>
                <p>Объем</p>
                <p className="p2">14,6 Л</p>
              </div>
            </div>
           
            <img
              className="backImage1NanoX"
              src="https://hyperpc.ru/images/product/nano-x/hpc-nano-x-spec-block_webp.jpg"
              alt=""
            />
          </div>

          <div className="backLinks">
            <nav className="navLinks2">
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
                <button>
                  <a href="lumen">ПОДРОБНЕЕ</a>
                </button>
              </div>

              <div>
                <a href="">
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
                <button>
                  <a href="">ПОДРОБНЕЕ</a>
                </button>
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
                <button>
                  <a href="dynamic">ПОДРОБНЕЕ</a>
                </button>
              </div>

              <div>
                <a href="">
                  <img
                    src="https://hyperpc.ru/images/product/gaming-pc/content/hyperpc-volt-silver-us.jpg"
                    alt=""
                  />
                </a>

                <h2>
                  <a href="">VOLT</a>
                </h2>
                <p>Современный игровой компьютер</p>
                <p>От 299 000 ₽ | 11 112 ₽/мес</p>
                <button>
                  <a href="">ПОДРОБНЕЕ</a>
                </button>
              </div>

              <div>
                <a href="#cyber">
                  <img
                    src="https://hyperpc.ru/images/product/gaming-pc/content/hyperpc-cyber-standard-black-us.jpg"
                    alt=""
                  />
                </a>
                <h2>
                  <a href="#cyber">CYBER</a>
                </h2>
                <p>Самый мощный игровой компьютер</p>
                <p>От 321 000 ₽ | 11 930 ₽/мес</p>
                <button>
                  <a href="">ПОДРОБНЕЕ</a>
                </button>
              </div>
            </nav>
            <div className="divLine"></div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default NanoX;
