import "./contacts.css";

const Contacts = ({ label }) => {
  return (
    <>
      {/* Contacts */}
      <section className="contacts">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <iframe title="Contacts"
                className="contacts__iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d418.4997383530867!2d61.36213887729867!3d55.18395211946927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c59327f26c8c67%3A0xfab74bf39558460d!2zItCQ0LjRgNCc0LDRgdGC0LXRgCIgLSDQstC10L3RgtC40LvRj9GG0LjQvtC90L3QsNGPINC60L7QvNC_0LDQvdC40Y8!5e0!3m2!1sru!2sru!4v1706518821805!5m2!1sru!2sru"
                width="100%"
                height="450px"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-lg-5 col-lg-offset-1 col-md-6 col-md-offset-0 col-sm-6 col-xs-6">
              <div className="contacts_info">
                <h3>Юридический адрес:</h3>
                <p>
                  ООО «Оптимизация Инженерных Решений», 454018, г.Челябинск, ул.
                  Стартовая, д.34, офис 101
                </p>
                <h3>Фактический адрес:</h3>
                <p>
                  ООО «Оптимизация Инженерных Решений», 454018, г.Челябинск, ул.
                  Стартовая, д.34, офис 101
                </p>
                <h3>Телефон:</h3>
                <p>+7 (922) 630-21-03</p>
                <h3>E-mail:</h3>
                <a href="!#">vent@airmaster74.ru</a>
                <h3>Режим работы:</h3>
                <p>9:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
