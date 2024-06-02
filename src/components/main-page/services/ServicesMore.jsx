import './services.css'

import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesMore = () => {

    useEffect(() => {
        AOS.init({
        duration: 1000, // продолжительность анимации в миллисекундах
        });
    }, []);

    return (
    <div className='services__more'>
        <div className='container'>
            <div className='row'>
                <div className="col-lg-8 col-lg-offset-1 col-md-10 col-md-offset-1 mt-100">
                    <ul className="services__container t-container">
                        <li
                            className="services__col services__col_first t-list__item" data-aos="fade-up"
                            style={{ marginTop: 30, transitionDelay: "0s" }}
                        >
                            <div className="services__item d-flex ">
                                <div className="t-cell t-valign_top">
                                    <div className="services__imgwrapper" style={{ width: 50 }}>
                                    <img
                                        className="services__img t-img"
                                        src="https://static.tildacdn.com/lib/tildaicon/62303662-3733-4538-b136-313334653730/Tilda_Icons_33_interior_design.svg"
                                        alt=""
                                    />
                                    </div>
                                </div>
                                <div className="services__textwrapper t-cell t-valign_top">
                                    <div
                                    className="services__name t-name t-name_lg"
                                    style={{ fontSize: 20 }}
                                    >
                                    <div >
                                        <strong> Проектирование и расчет</strong>
                                    </div>
                                    </div>
                                    <div
                                    className="services__descr t-descr t-descr_xs"
                                    style={{ fontSize: 20 }}
                                    >
                                    <div style={{ fontSize: 16, fontFamily: '"Open Sans"' }}>
                                        <span style={{ fontSize: 20 }}>
                                        Многолетний опыт работы дает возможность браться за проекты
                                        любой сложности.
                                        </span>
                                        <br />
                                        <br />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li
                            className="services__col" data-aos="fade-up"
                            style={{ marginTop: 30, transitionDelay: "0.16s" }}
                        >
                            <div className="services__item d-flex ">
                                <div className="t-cell t-valign_top">
                                    <div className="services__imgwrapper" style={{ width: 50 }}>
                                    <img
                                        className="services__img t-img"
                                        src="https://static.tildacdn.com/lib/tildaicon/65633137-3839-4862-a661-663538623232/Tilda_Icons_32_profession_builder.svg"
                                        alt=""
                                    />
                                    </div>
                                </div>
                                <div className="services__textwrapper t-cell t-valign_top">
                                    <div
                                    className="services__name t-name t-name_lg"
                                    style={{ fontSize: 20 }}
                                    >
                                    <div style={{ fontSize: 20, fontFamily: '"Open Sans"' }}>
                                        <strong> Монтаж</strong>
                                    </div>
                                    </div>
                                    <div
                                    className="services__descr t-descr t-descr_xs"
                                    style={{ fontSize: 20 }}
                                    >
                                    <div style={{ fontSize: 16, fontFamily: '"Open Sans"' }}>
                                        <span style={{ fontSize: 20 }}>
                                        Постоянный штат монтажников позволяет нам выстраивать удобный
                                        для Вас график работ, при необходимости готовы работать в
                                        выходные и праздничные дни.
                                        </span>
                                        <br />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li
                            className="services__col t-list__item" data-aos="fade-up"
                            style={{ marginTop: 30, transitionDelay: "0.32s" }}
                        >
                            <div className="services__item d-flex ">
                                <div className="t-cell t-valign_top">
                                    <div className="services__imgwrapper" style={{ width: 50 }}>
                                    <img
                                        className="services__img t-img"
                                        src="https://static.tildacdn.com/lib/tildaicon/39373461-6562-4766-a462-343536653538/3st_van.svg"
                                        alt=""
                                    />
                                    </div>
                                </div>
                                <div className="services__textwrapper t-cell t-valign_top">
                                    <div
                                    className="services__name t-name t-name_lg"
                                    style={{ fontSize: 20 }}
                                    >
                                    <div style={{ fontSize: 20, fontFamily: '"Open Sans"' }}>
                                        <strong>Поставка оборудования</strong>
                                    </div>
                                    </div>
                                    <div
                                    className="services__descr t-descr t-descr_xs"
                                    style={{ fontSize: 20 }}
                                    >
                                        <div style={{ fontSize: 20, fontFamily: '"Open Sans"' }}>
                                            Благодаря проверенным производителям оборудования и продуманным
                                            техническим решениям, Вы можете быть уверены в надежности и
                                            гарантированной бесперебойной работе системы при любых погодных
                                            условиях.
                                            <br />
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li
                            className="services__col t-list__item" data-aos="fade-up"
                            style={{ marginTop: 30, transitionDelay: "0.48s" }}
                        >
                            <div className="services__item d-flex ">
                                <div className="t-cell t-valign_top">
                                    <div className="services__imgwrapper" style={{ width: 50 }}>
                                    <img
                                        className="services__img t-img"
                                        src="https://static.tildacdn.com/lib/tildaicon/34663137-3763-4430-a237-376635336238/Tilda_Icons_38_Cleaning_company_repairer.svg"
                                        alt=""
                                    />
                                    </div>
                                </div>
                                <div className="services__textwrapper t-cell t-valign_top">
                                    <div
                                    className="services__name t-name t-name_lg"
                                    style={{ fontSize: 20 }}
                                    >
                                    <div style={{ fontSize: 20, fontFamily: '"Open Sans"' }}>
                                        <strong>Ремонт и техническое обслуживание</strong>
                                    </div>
                                    </div>
                                    <div
                                    className="services__descr t-descr t-descr_xs"
                                    style={{ fontSize: 20 }}
                                    >
                                    <div style={{ fontSize: 20, fontFamily: '"Open Sans"' }}>
                                        При необходимости, готовы сделать реконструкцию или модернизацию
                                        устаревшей вентиляционной системы. Предоставляем сервисное и
                                        сезонное обслуживание смонтированных нами климатических систем.
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}
 
export default ServicesMore;