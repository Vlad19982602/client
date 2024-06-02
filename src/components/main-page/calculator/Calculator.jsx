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
    question4: '',
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
                              <li className="t-checkboxesitem">
                                <label className="t-checkboxcontrols t-text t-textxs" style={{ color: '#252c35' }}>
                                  <input type="checkbox" value="Офис" className="t-checkbox" onChange={(e) => handleCheckboxChange(e, 'question1')} />
                                  <div className="t-checkboxindicator" style={{ borderColor: '#76b82a' }}></div>Офис
                                </label>
                              </li>
                              <li className="t-checkboxesitem">
                                <label className="t-checkboxcontrols t-text t-textxs" style={{ color: '#252c35' }}>
                                  <input type="checkbox" value="Магазин/торговое помещение" className="t-checkbox" onChange={(e) => handleCheckboxChange(e, 'question1')} />
                                  <div className="t-checkboxindicator" style={{ borderColor: '#76b82a' }}></div>Магазин/торговое помещение
                                </label>
                              </li>
                              <li className="t-checkboxesitem">
                                <label className="t-checkboxcontrols t-text t-textxs" style={{ color: '#252c35' }}>
                                  <input type="checkbox" value="Бассейн" className="t-checkbox" onChange={(e) => handleCheckboxChange(e, 'question1')} />
                                  <div className="t-checkboxindicator" style={{ borderColor: '#76b82a' }}></div>Бассейн
                                </label>
                              </li>
                              <li className="t-checkboxesitem">
                                <label className="t-checkboxcontrols t-text t-textxs" style={{ color: '#252c35' }}>
                                  <input type="checkbox" value="Частный дом/коттедж" className="t-checkbox" onChange={(e) => handleCheckboxChange(e, 'question1')} />
                                  <div className="t-checkboxindicator" style={{ borderColor: '#76b82a' }}></div>Частный дом/коттедж
                                </label>
                              </li>
                              <li className="t-checkboxesitem">
                                <label className="t-checkboxcontrols t-text t-textxs" style={{ color: '#252c35' }}>
                                  <input type="checkbox" value="Квартира" className="t-checkbox" onChange={(e) => handleCheckboxChange(e, 'question1')} />
                                  <div className="t-checkboxindicator" style={{ borderColor: '#76b82a' }}></div>Квартира
                                </label>
                              </li>
                              <li className="t-checkboxesitem">
                                <label className="t-checkboxcontrols t-text t-textxs" style={{ color: '#252c35' }}>
                                  <input type="checkbox" value="Кафе/ресторан/бар" className="t-checkbox" onChange={(e) => handleCheckboxChange(e, 'question1')} />
                                  <div className="t-checkboxindicator" style={{ borderColor: '#76b82a' }}></div>Кафе/ресторан/бар
                                </label>
                              </li>
                              <li className="t-checkboxesitem">
                                <label className="t-checkboxcontrols t-text t-textxs" style={{ color: '#252c35' }}>
                                  <input type="checkbox" value="Промышленное помещение/цех" className="t-checkbox" onChange={(e) => handleCheckboxChange(e, 'question1')} />
                                  <div className="t-checkboxindicator" style={{ borderColor: '#76b82a' }}></div>Промышленное помещение/цех
                                </label>
                              </li>
                              <li className="t-checkboxesitem">
                                <label className="t-checkboxcontrols t-text t-textxs" style={{ color: '#252c35' }}>
                                  <input type="checkbox" value="Гостиница" className="t-checkbox" onChange={(e) => handleCheckboxChange(e, 'question1')} />
                                  <div className="t-checkboxindicator" style={{ borderColor: '#76b82a' }}></div>Гостиница
                                </label>
                              </li>
                              <li className="t-checkboxesitem">
                                <label className="t-checkboxcontrols t-text t-textxs" style={{ color: '#252c35' }}>
                                  <input type="checkbox" value="Медицинское учреждение" className="t-checkbox" onChange={(e) => handleCheckboxChange(e, 'question1')} />
                                  <div className="t-checkboxindicator" style={{ borderColor: '#76b82a' }}></div>Медицинское учреждение
                                </label>
                              </li>
                              <li className="t-checkboxesitem">
                                <label className="t-checkboxcontrols t-text t-textxs" style={{ color: '#252c35' }}>
                                  <input type="checkbox" value="Другое" className="t-checkbox" onChange={(e) => handleCheckboxChange(e, 'question1')} />
                                  <div className="t-checkboxindicator" style={{ borderColor: '#76b82a' }}></div>Другое
                                </label>
                              </li>
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
                <div className="popupcalc">
                  <div className="popupdialog">
                    <div className="popupcalccontent text-center">
                      <button type="button" className="popupcalcclose" onClick={() => handleModalClose(question)}>
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
                              {question === 'question2' ? 'Площадь помещения (квадратные метры)?' : question === 'question3' ? 'Какую задачу должна решать вентиляция?' : `Ваш ответ на вопрос ${index + 2}`}
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
                                  <li className="t-checkboxes__item">
                                    <label className="t-checkbox__controls t-text t-text_xs" style={{ color: '#252c35' }}>
                                      <input type="checkbox" value="Подача чистого воздуха в помещение вентиляционной установкой с автоматизацией управления" className="t-checkbox" onChange={(e) => handleCheckboxChange(e, 'question3')} />
                                      <div className="t-checkbox__indicator" style={{ borderColor: '#76b82a' }}></div>Подача чистого воздуха в помещение вентиляционной установкой с автоматизацией управления
                                    </label>
                                  </li>
                                  <li className="t-checkboxes__item">
                                    <label className="t-checkbox__controls t-text t-text_xs" style={{ color: '#252c35' }}>
                                      <input type="checkbox" value="Изменение и поддержание температуры воздуха" className="t-checkbox" onChange={(e) => handleCheckboxChange(e, 'question3')} />
                                      <div className="t-checkbox__indicator" style={{ borderColor: '#76b82a' }}></div>Изменение и поддержание температуры воздуха
                                    </label>
                                  </li>
                                  <li className="t-checkboxesitem">
                                    <label className="t-checkboxcontrols t-text t-textxs" style={{ color: '#252c35' }}>
                                      <input type="checkbox" value="Осушение воздуха (уменьшение влажности)" className="t-checkbox" onChange={(e) => handleCheckboxChange(e, 'question3')} />
                                      <div className="t-checkboxindicator" style={{ borderColor: '#76b82a' }}></div>Осушение воздуха (уменьшение влажности)
                                    </label>
                                  </li>
                                  <li className="t-checkboxesitem">
                                    <label className="t-checkboxcontrols t-text t-textxs" style={{ color: '#252c35' }}>
                                      <input type="checkbox" value="Другое" className="t-checkbox" onChange={(e) => handleCheckboxChange(e, 'question3')} />
                                      <div className="t-checkboxindicator" style={{ borderColor: '#76b82a' }}></div>Другое
                                    </label>
                                  </li>
                                </ul>
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