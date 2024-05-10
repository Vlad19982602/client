import "./footer.css";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-xs-12">
              <a className="footer__logo-link" href="/home" target="_blank">
                <div className="footer__logo t-title" field="title4" />
              </a>
              <div className="footer__text t-descr t-descr_xxs" field="text">
                <div style={{ color: "#ffffff" }}>
                  <span style={{ color: "rgb(247, 250, 246)" }}>
                    © 2013-2024 АИРМАСТЕР
                    <br />
                    +7 (922) 630-21-03 <br />
                    <span style={{ color: "#198754" }}>
                      vent@airmaster74.ru
                    </span>
                  </span>
                  <br />
                  <br />
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-xs-12">
              <div className="footer__descr t-descr t-descr_xxs" field="descr">
                <br />
                <br />
                <div className="footer_a">
                  <a
                    href="https://www.airmaster74.ru/home"
                    style={{ color: "#ffffff" }}
                  >
                    Главная
                  </a>
                </div>
                <br />
                <br />
                <div className="footer_a">
                  <a
                    href="https://www.airmaster74.ru/komanda"
                    style={{ color: "#ffffff" }}
                  >
                    О нас
                  </a>
                </div>
                <br />
              </div>
              <div className="footer__floatbeaker_lr3" />
            </div>
            <div className="col-sm-3 col-xs-12">
              <div className="footer__col boosttrap-col boosttrap-col_3">
                <div className="footer__descr t-descr t-descr_xxs">
                  <br />
                  <br />
                  <div className="footer_a">
                    <a
                      href="https://www.airmaster74.ru/uslugi"
                      style={{ color: "#fff" }}
                    >
                      Услуги
                    </a>{" "}
                  </div>
                  <br />
                  <br />
                  <div className="footer_a">
                    <a
                      href="https://www.airmaster74.ru/portfolio"
                      style={{ color: "#fff" }}
                    >
                      Портфолио
                    </a>
                  </div>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-xs-12">
              <div className="footer__col boosttrap-col boosttrap-col_3">
                <div className="footer__descr t-descr t-descr_xxs">
                  <br />
                  <br />
                  <div className="footer_a">
                    <a
                      href="https://www.airmaster74.ru/kak_rabotaem"
                      style={{ color: "#fff" }}
                    >
                      Как работаем
                    </a>
                  </div>
                  <br />
                  <br />
                  <div className="footer_a">
                    <a
                      href="https://www.airmaster74.ru/kontakty"
                      style={{ color: "#fff" }}
                    >
                      Контакты
                    </a>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
