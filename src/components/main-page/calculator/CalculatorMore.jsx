import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './calculator.css';

const Calculator = () => {
  const [formData, setFormData] = useState({
    question1: [],
    question2: 90,
    question3: [],
    question4: [],
    question5: ''
  });

  const [showModal, setShowModal] = useState({
    question1: false,
    question2: false,
    question3: false,
    question4: false,
    question5: false
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRangeChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({ ...prevData, question2: value }));
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      question5: {
        ...prevFormData.question5,
        [name]: value
      }
    }));
  };

  const handleCheckboxChange = (e, question) => {
    const { value, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [question]: checked
        ? [...prevFormData[question], value]
        : prevFormData[question].filter((v) => v !== value)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/calculate', formData);
      setResult(response.data);
    } catch (error) {
      console.error('Error calculating:', error);
    }
  };

  const handleModalShow = (question) => {
    setShowModal({ ...showModal, [question]: true });
  };

  const handleModalClose = (question) => {
    setShowModal({ ...showModal, [question]: false });
  };

  const optionsQuestion1 = [
    "Офис",
    "Магазин/торговое помещение",
    "Бассейн",
    "Частный дом/коттедж",
    "Квартира",
    "Кафе/ресторан/бар",
    "Промышленное помещение/цех",
    "Гостиница",
    "Медицинское учреждение",
    "Другое"
  ];

  const optionsQuestion3 = [
    "Подача чистого воздуха в помещение",
    "Изменение и поддержание температуры воздуха",
    "Осушение воздуха (уменьшение влажности)",
    "Другое"
  ];

  const optionsQuestion4 = [
    "в течение 2-6 месяцев",
    "в течение 1 года",
    "Другое"
  ];

  return(
    <>
        <div className='calculator'>
            <div className="container container-ex">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h3 className="calculator__title">Рассчитайте стоимость вентиляции!</h3>
                        <br/><br/>
                        <h4 className="calculator__subtitle">Просто ответьте на 5 вопросов и получите расчёт.</h4>
                        <br/><br/>
                        <Button className='calculator__btn' variant="success" onClick={() => handleModalShow('question1')}>
                        Перейти к калькулятору
                        </Button>

                        {result && (
                        <div className="result">
                            <h4>Результат расчета:</h4>
                            <p>{result}</p>
                        </div>
                        )}

                        {/* Модальные окна для вопросов */}
                        <Modal show={showModal.question1} onHide={() => handleModalClose('question1')}>
                          <div className="popup_calc">
                            <div className="popup_dialog">
                              <div className="popup_calc_content text-center">
                                  <button type="button" className="popup_calc_close" onClick={() => handleModalClose('question1')}>
                                    <strong>&times;</strong>
                                  </button>
                                  <div className="t862__quiz-description-block" style={{ backgroundColor: '#252c35' }}>
                                    <div className="t-descr t-descr_xxs t862__quiz-description">
                                        <div className="t862__quiz-description-title">
                                          <svg role="presentation" viewBox="0 0 100 100" style={{ stroke: '#76b82a' }}>
                                              <rect x="27.5" y="4.1" className="st61" width="56.5" height="73.5"></rect>
                                              <line className="st61" x1="41.5" y1="22.1" x2="70.6" y2="22.1"></line>
                                              <line className="st61" x1="41.5" y1="38.8" x2="70.6" y2="38.8"></line>
                                              <line className="st61" x1="41.5" y1="55.5" x2="70.6" y2="55.5"></line>
                                              <polyline className="st61" points="66.4,77.6 66.4,95.6 9.8,95.6 9.8,22.1 27.5,22.1 "></polyline>
                                          </svg>
                                          <span className="t862quiz-description-text" field="descr">
                                            <div style={{ fontSize: '20px', color: '#ffffff' }}>
                                              <strong>Ответьте на 5 простых вопросов, которые помогут нам составить точную смету для Вашего объекта.</strong><br />
                                            </div>
                                          </span>
                                        </div>
                                    </div>
                                  </div>

                                  <div className="t862quiz-form-wrapper">
                                    <div className="t-forminputsbox">
                                      <div className="t-input-group t-input-grouprd t-input-group-stepactive" role="group" style={{ display: 'block' }}>
                                        <div className="t-input-title t-descr t-descrmd" style={{ color: '#252c35', fontWeight: 700 }}>Тип помещения, где требуется вентиляция?</div>
                                        <div className="t-input-block">
                                          <ul className="t-checkboxeswrapper">
                                            {optionsQuestion1.map((option, index) => (
                                              <li className="t-checkboxes__item" key={`question1-${index}`}>
                                                <label className="t-checkbox__controls t-text t-text_xs" style={{ color: '#252c35' }}>
                                                  <input type="checkbox" value={option} className="t-checkbox" onChange={(e) => handleCheckboxChange(e, 'question1')} />
                                                  <div className="t-checkbox__indicator" style={{ borderColor: '#76b82a' }}></div>{option}
                                                </label>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                        <div className="d-btn">
                                          <Button variant="success" onClick={() => handleModalShow('question2')}>
                                            Далее
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Modal>

                          {['question2', 'question3', 'question4', 'question5'].map((question, index) => (
                            <Modal key={index + 1} show={showModal[question]} onHide={() => handleModalClose(question)}>
                              <div className="popup_calc">
                                <div className="popup_dialog">
                                  <div className="popup_calc_content text-center">
                                    <button type="button" className="popup_calc_close" onClick={() => handleModalClose(question)}>
                                      <strong>&times;</strong>
                                    </button>
                                    <div className="t862quiz-description-block" style={{ backgroundColor: '#252c35' }}>
                                      <div className="t-descr t-descrxxs t862quiz-description">
                                        <div className="t862quiz-description-title">
                                          <svg role="presentation" viewBox="0 0 100 100" style={{ stroke: '#76b82a' }}>
                                            <rect x="27.5" y="4.1" className="st61" width="56.5" height="73.5"></rect>
                                            <line className="st61" x1="41.5" y1="22.1" x2="70.6" y2="22.1"></line>
                                            <line className="st61" x1="41.5" y1="38.8" x2="70.6" y2="38.8"></line>
                                            <line className="st61" x1="41.5" y1="55.5" x2="70.6" y2="55.5"></line>
                                            <polyline className="st61" points="66.4,77.6 66.4,95.6 9.8,95.6 9.8,22.1 27.5,22.1 "></polyline>
                                          </svg>
                                          <span className="t862__quiz-description-text" field="descr">
                                            <div style={{ fontSize: '20px', color: '#ffffff' }}>
                                              <strong>Ответьте на 5 простых вопросов, которые помогут нам составить точную смету для Вашего объекта.</strong><br />
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="t862__quiz-form-wrapper">
                                      <div className="t-form__inputsbox">
                                        <div className="t-input-group t-input-group_rd t-input-group-step_active" role="group" style={{ display: 'block' }}>
                                          <div className="t-input-title t-descr t-descr_md" style={{ color: '#252c35', fontWeight: 700 }}>
                                            {question === 'question2' ? 'Площадь помещения (квадратные метры)?' : question === 'question3' ? 'Какую задачу должна решать вентиляция?' : question === 'question4' ? `В каком месяце необходимо запустить систему в работу?` : ''}
                                          </div>
                                          <div className="t-input-block">
                                            {question === 'question2' ? (
                                              <div>
                                                <Form.Control
                                                  type="range"
                                                  name="question2"
                                                  min="90"
                                                  max="1000"
                                                  step="5"
                                                  value={formData.question2}
                                                  onChange={handleRangeChange}
                                                  style={{ width: '100%', background: '#76b82a' }}
                                                />
                                                <div style={{ color: '#252c35' }}>Выбрано: {formData.question2} м²</div>
                                              </div>
                                            ) : question === 'question3' ? (
                                              <ul className="t-checkboxes__wrapper">
                                                {optionsQuestion3.map((option, idx) => (
                                                    <li className="t-checkboxes__item" key={`question3-${idx}`}>
                                                      <label className="t-checkbox__controls t-text t-text_xs" style={{ color: '#252c35' }}>
                                                        <input type="checkbox" value={option} className="t-checkbox" onChange={(e) => handleCheckboxChange(e, 'question3')} />
                                                        <div className="t-checkbox__indicator" style={{ borderColor: '#76b82a' }}></div>{option}
                                                      </label>
                                                    </li>
                                                  ))}
                                              </ul>
                                              ) : question === 'question4' ? (
                                                <ul className="t-checkboxes__wrapper">
                                                  {optionsQuestion4.map((option, idx) => (
                                                    <li className="t-checkboxes__item" key={`question4-${idx}`}>
                                                      <label className="t-checkbox__controls t-text t-text_xs" style={{ color: '#252c35' }}>
                                                        <input type="checkbox" value={option} className="t-checkbox" onChange={(e) => handleCheckboxChange(e, 'question4')} />
                                                        <div className="t-checkbox__indicator" style={{ borderColor: '#76b82a' }}></div>{option}
                                                      </label>
                                                    </li>
                                                  ))}
                                                </ul>
                                              ) : question === 'question5' ? (
                                                <div className="t-input-block">
                                                  <select name="method" value={formData.question5.method} onChange={handleContactChange} style={{ width: '100%', marginBottom: '10px' }}>
                                                    <option value="">Выберите способ связи</option>
                                                    <option value="phone">Телефон</option>
                                                    <option value="email">Электронная почта</option>
                                                    <option value="vk">ВКонтакте</option>
                                                    <option value="instagram">Instagram</option>
                                                  </select>
                                                  <input
                                                    type="text"
                                                    name="contact"
                                                    value={formData.question5.contact}
                                                    onChange={handleContactChange}
                                                    placeholder="Введите контактные данные"
                                                    style={{ width: '100%' }}
                                                  />
                                                </div>
                                              ) : (
                                              <Form.Control
                                                type="text"
                                                name={question}
                                                value={"check"}
                                                onChange={handleChange}
                                                placeholder={`Ваш ответ на вопрос ${index + 2}`}
                                              />
                                            )}
                                          </div>
                                          <div className="d-btn">
                                            {index < 3 && (
                                              <Button variant="success" onClick={() => handleModalShow(`question${index + 3}`)}>
                                                Далее
                                              </Button>
                                            )}
                                            {index === 3 && (
                                              <Button variant="success" onClick={handleSubmit}>
                                                Отправить ответы
                                              </Button>
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Modal>
                          ))}
          </div>
        </div>
      </div>
    </div>
    </>  
  );
};

export default Calculator;