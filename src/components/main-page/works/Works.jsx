import "./works.css";

import firstImg from "./works/img/1-1.webp";
import firstBigImg from "./works/bigImg/1-1.jpg";
import secondImg from "./works/img/2-2.webp";
import secondBigImg from "./works/bigImg/2-2.jpg";
import thirdImg from "./works/img/3-3s.jpg";
import thirdBigImg from "./works/bigImg/3-3.jpg";
import fourImg from "./works/img/4-4.webp";
import fourBigImg from "./works/bigImg/4-4.jpg";

import fiveImg from "./works/img/5-5s.jpg";
import fiveBigImg from "./works/bigImg/5-5.jpg";
import sixImg from "./works/img/6-6s.jpg";
import sixBigImg from "./works/bigImg/6-6.jpg";
import sevenImg from "./works/img/7-7s.jpg";
import sevenBigImg from "./works/bigImg/7-7.jpg";
import eightImg from "./works/img/8-8s.jpg";
import eightBigImg from "./works/bigImg/8-8.jpg";

const Works = () => {
  return (
    <>
      {/* Our works */}
      <section className="works">
        <div className="container container__works">
          <div className="row">
            <div className="works__wrapper _anim-items">
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center wow">
                <a
                  className="works__bigimg"
                  href={firstBigImg}
                >
                  <img
                    className="preview"
                    src={firstImg}
                    alt="work"
                  />
                </a>
                <div className="works__textwrapper">
                  <div className="works__uptitle t-uptitle">
                    <span className="works__tag">КВАРТИРА</span>
                  </div>
                  <div className="works__title t-name">
                    Квартира в жилом комплексе "Ньютон" г. Челябинск
                  </div>
                  <div className="works__descr t-descr">
                    Поставка, монтаж систем вентиляции и кондиционирования.
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center wow"
                data-wow-delay="0.1s"
              >
                <a
                  className="works__bigimg"
                  href={secondBigImg}
                >
                  <img
                    className="preview"
                    src={secondImg}
                    alt="work"
                  />
                </a>
                <div className="works__textwrapper">
                  <div className="works__uptitle t-uptitle">
                    <span className="works__tag">ЧАСТНЫЙ ДОМ</span>
                  </div>
                  <div className="works__title t-name">
                    Частный жилой дом в посёлке "Лесной Остров" г. Челябинск
                  </div>
                  <div className="works__descr t-descr">
                    Поставка, монтаж систем вентиляции и кондиционирования.
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center wow"
                data-wow-delay="0.2s"
              >
                <a
                  className="works__bigimg"
                  href={thirdBigImg}
                >
                  <img
                    className="preview"
                    src={thirdImg}
                    alt="work"
                  />
                </a>
                <div className="works__textwrapper">
                  <div className="works__uptitle t-uptitle">
                    <span className="works__tag">ТОРГОВОЕ ПОМЕЩЕНИЕ</span>
                  </div>
                  <div className="works__title t-name">Автосалон "Регинас"</div>
                  <div className="works__descr t-descr">
                    Монтаж систем вентиляции, дымоудаления.
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center wow"
                data-wow-delay="0.3s"
              >
                <a
                  className="works__bigimg"
                  href={fourBigImg}
                >
                  <img
                    className="preview"
                    src={fourImg}
                    alt="work"
                  />
                </a>
                <div className="works__textwrapper">
                  <div className="works__uptitle t-uptitle">
                    <span className="works__tag">РЕСТОРАН</span>
                  </div>
                  <div className="works__title t-name">
                    Ресторан "FRANK BY БАСТА" г. Москва.
                  </div>
                  <div className="works__descr t-descr">
                    Поставка, монтаж систем вентиляции и кондиционирования.
                  </div>
                </div>
              </div>
            </div>
            <div className="works__wrapper _anim-items">
              <div
                className="col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center wow"
                data-wow-delay="0.4s"
              >
                <a
                  className="works__bigimg"
                  href={fiveBigImg}
                >
                  <img
                    className="preview"
                    src={fiveImg}
                    alt="work"
                  />
                </a>
                <div className="works__textwrapper">
                  <div className="works__uptitle t-uptitle">
                    <span className="works__tag">БАССЕЙН</span>
                  </div>
                  <div className="works__title t-name">«Аврора фитнес»</div>
                  <div className="works__descr t-descr">
                    Разработка технического решения, поставка, монтаж систем
                    вентиляции.
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center wow"
                data-wow-delay="0.5s"
              >
                <a
                  className="works__bigimg"
                  href={sixBigImg}
                >
                  <img
                    className="preview"
                    src={sixImg}
                    alt="work"
                  />
                </a>
                <div className="works__textwrapper">
                  <div className="works__uptitle t-uptitle">
                    <span className="works__tag">ПРОИЗВОДСТВО</span>
                  </div>
                  <div className="works__title t-name">Компания "SMART" </div>
                  <div className="works__descr t-descr">
                    Проектирование, поставка, монтаж систем аспирации.
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center wow"
                data-wow-delay="0.7s"
              >
                <a
                  className="works__bigimg"
                  href={sevenBigImg}
                >
                  <img
                    className="preview"
                    src={sevenImg}
                    alt="work"
                  />
                </a>
                <div className="works__textwrapper">
                  <div className="works__uptitle t-uptitle">
                    <span className="works__tag">ОФИС</span>
                  </div>
                  <div className="works__title t-name">
                    ОГАУ "МФЦ Челябинской области"
                  </div>
                  <div className="works__descr t-descr">
                    Поставка, монтаж систем кондиционирования.
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center wow"
                data-wow-delay="0.8s"
              >
                <a
                  className="works__bigimg"
                  href={eightBigImg}
                >
                  <img
                    className="preview"
                    src={eightImg}
                    alt="work"
                  />
                </a>
                <div className="works__textwrapper">
                  <div className="works__uptitle t-uptitle">
                    <span className="works__tag">ЧАСТНЫЙ ДОМ</span>
                  </div>
                  <div className="works__title t-name">
                    Частный жилой дом с бассейном в поселке «Карпов пруд» г.
                    Челябинск
                  </div>
                  <div className="works__descr t-descr">
                    Поставка, монтаж систем вентиляции и кондиционирования.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
