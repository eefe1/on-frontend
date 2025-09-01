import React, { useState } from 'react'
import ImageWithBasePath from '../../components/ImageWithBasePath'
import { Link } from "react-router-dom";
import Select from "react-select";
import { Calendar, theme } from 'antd';



const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};
const BookingWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState(true);
  const [selectedService1, setSelectedService1] = useState(false);
  const [selectedService2, setSelectedService2] = useState(false);
  const [selectedService3, setSelectedService3] = useState(false);
  const [selectedService4, setSelectedService4] = useState(false);
  const [selectedService5, setSelectedService5] = useState(false);
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: '100%',
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };
  const Patient = [
    { value: "", label: "Select" },
    { value: "1", label: "Andrew Fletcher" },
    { value: "Newyork", label: "Newyork" },
  ];
  const Speciality = [
    { value: "", label: "Hukuk Alanı Seçiniz" },
    { value: "aile_hukuku", label: "Aile Hukuku" },
    { value: "ticaret_hukuku", label: "Ticaret Hukuku" },
    { value: "ceza_hukuku", label: "Ceza Hukuku" },
    { value: "is_hukuku", label: "İş Hukuku" },
    { value: "idari_hukuk", label: "İdari Hukuk" },
    { value: "medeni_hukuk", label: "Medeni Hukuk" },
    { value: "borclar_hukuku", label: "Borçlar Hukuku" },
    { value: "gayrimenkul_hukuku", label: "Gayrimenkul Hukuku" },
    { value: "miras_hukuku", label: "Miras Hukuku" },
    { value: "icra_hukuku", label: "İcra ve İflas Hukuku" },
    { value: "sigorta_hukuku", label: "Sigorta Hukuku" },
    { value: "bankacilik_hukuku", label: "Bankacılık Hukuku" },
    { value: "fikri_mulkiyet", label: "Fikri Mülkiyet Hukuku" },
    { value: "rekabet_hukuku", label: "Rekabet Hukuku" },
    { value: "vergi_hukuku", label: "Vergi Hukuku" },
    { value: "saglik_hukuku", label: "Sağlık Hukuku" },
    { value: "cevre_hukuku", label: "Çevre Hukuku" },
    { value: "enerji_hukuku", label: "Enerji Hukuku" },
    { value: "spor_hukuku", label: "Spor Hukuku" },
    { value: "deniz_hukuku", label: "Deniz Hukuku" },
    { value: "havacilik_hukuku", label: "Havacılık Hukuku" },
    { value: "teknoloji_hukuku", label: "Teknoloji Hukuku" },
    { value: "dijital_hukuk", label: "Dijital Hukuk" },
  ];
  const handleVoiceCall = () => {
    setShowPhoneModal(true);
  };
  const handleCancel = () => {
    setShowCancelModal(true);
  };

  const confirmCancel = () => {
    // Handle the actual cancellation logic here
    console.log('Appointment cancelled');
    setShowCancelModal(false);
    // You can redirect or show success message here
  };
  return (
    <div classname="main-wrapper">
      <header className="header header-custom header-fixed inner-header relative">
        <div className="container">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <Link id="mobile_btn" to="#">
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </Link>
              <Link to="/home" className="navbar-brand logo">
                <ImageWithBasePath src="assets/img/logo_avukatim.svg" className="img-fluid" alt="Logo" />
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <div className="doctor-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto">
              <div className="booking-wizard">
                <ul
                  className="form-wizard-steps d-sm-flex align-items-center justify-content-center"
                  id="progressbar2"
                >
                  <li className={
                    currentStep === 1
                      ? 'progress-active'
                      : currentStep > 1
                        ? 'progress-activated'
                        : ''
                  }>
                    <div className="profile-step">
                      <span className="multi-steps">1</span>
                      <div className="step-section">
                        <h6>Uzmanlık Alanı</h6>
                      </div>
                    </div>
                  </li>
                  <li className={
                    currentStep === 2
                      ? 'progress-active'
                      : currentStep > 2
                        ? 'progress-activated'
                        : ''
                  }>
                    <div className="profile-step">
                      <span className="multi-steps">2</span>
                      <div className="step-section">
                        <h6>Görüşme Tipi</h6>
                      </div>
                    </div>
                  </li>
                  <li className={
                    currentStep === 3
                      ? 'progress-active'
                      : currentStep > 3
                        ? 'progress-activated'
                        : ''
                  }>
                    <div className="profile-step">
                      <span className="multi-steps">3</span>
                      <div className="step-section">
                        <h6>Tarih &amp; Saat</h6>
                      </div>
                    </div>
                  </li>
                  <li className={
                    currentStep === 4
                      ? 'progress-active'
                      : currentStep > 4
                        ? 'progress-activated'
                        : ''
                  }>
                    <div className="profile-step">
                      <span className="multi-steps">4</span>
                      <div className="step-section">
                        <h6>Temel Bilgiler</h6>
                      </div>
                    </div>
                  </li>

                  <li className={
                    currentStep === 5
                      ? 'progress-active'
                      : currentStep > 5
                        ? 'progress-activated'
                        : ''
                  }>
                    <div className="profile-step">
                      <span className="multi-steps">5</span>
                      <div className="step-section">
                        <h6>Onay</h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="booking-widget multistep-form mb-5">
                {currentStep === 1 && (
                  <fieldset id="first">
                    <div className="card booking-card mb-0">
                      <div className="card-header">
                        <div className="booking-header pb-0">
                          <div className="card mb-0">
                            <div className="card-body">
                              <div className="d-flex align-items-center flex-wrap rpw-gap-2 flex-wrap row-gap-2">
                                <span className="avatar avatar-xxxl avatar-rounded me-2 flex-shrink-0">
                                  <ImageWithBasePath
                                    src="assets/img/clients/client-15.jpg"
                                    alt=""
                                  />
                                </span>
                                <div>
                                  <h4 className="mb-1">
                                    Ayhan Uzay{" "}

                                  </h4>
                                  <p className="text-indigo mb-3 fw-medium">
                                    Avukat
                                  </p>
                                  <p className="mb-0">
                                    <i className="isax isax-location me-2" />
                                    Ankara
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body booking-body">
                        <div className="card mb-0">
                          <div className="card-body pb-1">
                            <div className="mb-4 pb-4 border-bottom">
                              <label className="form-label">Uzmanlık Alanı Seçiniz</label>

                              <Select
                                className="select"
                                options={Speciality}
                                placeholder="Seçiniz"
                                isClearable={true}
                                isSearchable={true}
                              />

                            </div>
                            <h6 className="mb-3">Hizmetler</h6>
                            <div className="row">
                              <div className="col-lg-4 col-md-6">
                                <div className={`service-item ${selectedService ? 'active' : ''}`}>
                                  <input
                                    className="form-check-input ms-0 mt-0"
                                    name="service1"
                                    type="checkbox"
                                    id="service1"
                                    onChange={() => setSelectedService(!selectedService)}
                                    checked={selectedService ? true : false}
                                  />
                                  <label
                                    className="form-check-label ms-2"
                                    htmlFor="service1"
                                  >
                                    <span className="service-title d-block mb-1">
                                      Ön Görüşme                              </span>
                                    <span className="fs-14 d-block">$310</span>
                                  </label>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6">
                                <div className={`service-item ${selectedService1 ? 'active' : ''}`}>
                                  <input
                                    className="form-check-input ms-0 mt-0"
                                    name="service1"
                                    type="checkbox"
                                    id="service2"
                                    onChange={() => setSelectedService1(!selectedService1)}
                                    checked={selectedService1 ? true : false}
                                  />
                                  <label
                                    className="form-check-label ms-2"
                                    htmlFor="service2"
                                  >
                                    <span className="service-title d-block mb-1">
                                      Danışmanlık                              </span>
                                    <span className="fs-14 d-block">$754</span>
                                  </label>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6">
                                <div className={`service-item ${selectedService2 ? 'active' : ''}`}>
                                  <input
                                    className="form-check-input ms-0 mt-0"
                                    name="service1"
                                    type="checkbox"
                                    id="service3"
                                    onChange={() => setSelectedService2(!selectedService2)}
                                    checked={selectedService2 ? true : false}
                                  />
                                  <label
                                    className="form-check-label ms-2"
                                    htmlFor="service3"
                                  >
                                    <span className="service-title d-block mb-1">
                                      Dosya İnceleme                              </span>
                                    <span className="fs-14 d-block">$754</span>
                                  </label>
                                </div>
                              </div>
                            
                            
                           
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="d-flex align-items-center flex-wrap rpw-gap-2 justify-content-between">
                          <Link
                            to="#"
                            className="btn btn-md btn-dark inline-flex align-items-center rounded-pill"
                          >
                            <i className="isax isax-arrow-left-2 me-1" />
                            Back
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-md btn-primary-gradient next_btns inline-flex align-items-center rounded-pill"
                            onClick={handleNext}
                          >
                            Görüşme Tipi Seçiniz
                            <i className="isax isax-arrow-right-3 ms-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                )}
                {currentStep === 2 && (
                  <fieldset style={{ display: 'block' }}>
                    <div className="card booking-card mb-0">
                      <div className="card-header">
                        <div className="booking-header pb-0">
                          <div className="card mb-0">
                            <div className="card-body">
                              <div className="d-flex align-items-center flex-wrap rpw-gap-2 flex-wrap row-gap-2">
                                <span className="avatar avatar-xxxl avatar-rounded me-2 flex-shrink-0">
                                  <ImageWithBasePath
                                    src="assets/img/clients/client-15.jpg"
                                    alt=""
                                  />
                                </span>
                                <div>
                                  <h4 className="mb-1">
                                    Ayhan Uzay{" "}

                                  </h4>
                                  <p className="text-indigo mb-3 fw-medium">
                                    Avukat
                                  </p>
                                  <p className="mb-0">
                                    <i className="isax isax-location me-2" />
                                    Ankara
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body booking-body">
                        <div className="card mb-0">
                          <div className="card-body pb-1">
                            <h6 className="mb-3">Görüşme Tipi Seçiniz</h6>
                            <div className="row">
                              <div className="col-xl col-md-3 col-sm-4">
                                <div className="radio-select text-center">
                                  <input
                                    className="form-check-input ms-0 mt-0"
                                    name="service2"
                                    type="radio"
                                    id="service7"
                                    defaultChecked
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="service7"
                                  >
                                    <i className="isax isax-hospital5" />
                                    <span className="service-title d-block">
                                      Ofis
                                    </span>
                                  </label>
                                </div>
                              </div>
                              <div className="col-xl col-md-3 col-sm-4">
                                <div className="radio-select text-center">
                                  <input
                                    className="form-check-input ms-0 mt-0"
                                    name="service2"
                                    type="radio"
                                    id="service8"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="service8"
                                  >
                                    <i className="isax isax-video5" />
                                    <span className="service-title d-block">
                                      Video Görüşme
                                    </span>
                                  </label>
                                </div>
                              </div>
                              <div className="col-xl col-md-3 col-sm-4">
                                <div className="radio-select text-center">
                                  <input
                                    className="form-check-input ms-0 mt-0"
                                    name="service2"
                                    type="radio"
                                    id="service9"
                                    onClick={handleVoiceCall}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="service9"
                                  >
                                    <i className="isax isax-call5" />
                                    <span className="service-title d-block">
                                      Sesli Görüşme
                                    </span>
                                  </label>
                                </div>
                              </div>
                             

                            </div>
                            <h6 className="mb-3">Ofisler</h6>
                            <div>
                              <div className="service-item">
                                <input
                                  className="form-check-input ms-0 mt-0"
                                  name="service2"
                                  type="checkbox"
                                  id="service12"
                                />
                                <label
                                  className="form-check-label ms-2"
                                  htmlFor="service12"
                                >
                                  <span className="d-flex align-items-center flex-wrap rpw-gap-2">
                                    <span className="d-inline-block me-2">
                                      <ImageWithBasePath
                                        src="assets/img/icons/clinic-icon-01.svg"
                                        className="rounded-circle"
                                        alt=""
                                      />
                                    </span>
                                    <span>
                                      <span className="service-title d-block mb-1">
                                        Ankara Ofisi
                                      </span>
                                      <span className="fs-14">
                                        Ankara
                                      </span>
                                      <i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1" />
                                      <span className="fs-14">500 Metre</span>
                                    </span>
                                  </span>
                                </label>
                              </div>
                              <div className="service-item">
                                <input
                                  className="form-check-input ms-0 mt-0"
                                  name="service2"
                                  type="checkbox"
                                  id="service13"
                                />
                                <label
                                  className="form-check-label ms-2"
                                  htmlFor="service13"
                                >
                                  <span className="d-flex align-items-center flex-wrap rpw-gap-2">
                                    <span className="d-inline-block me-2">
                                      <ImageWithBasePath
                                        src="assets/img/icons/clinic-icon-02.svg"
                                        className="rounded-circle"
                                        alt=""
                                      />
                                    </span>
                                    <span>
                                      <span className="service-title d-block mb-1">
                                        İstanbul Ofisi
                                      </span>
                                      <span className="fs-14">
                                        İstanbul
                                      </span>
                                      <i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1" />
                                      <span className="fs-14">12 KM </span>
                                    </span>
                                  </span>
                                </label>
                              </div>
                              <div className="service-item">
                                <input
                                  className="form-check-input ms-0 mt-0"
                                  name="service2"
                                  type="checkbox"
                                  id="service13"
                                />
                                <label
                                  className="form-check-label ms-2"
                                  htmlFor="service13"
                                >
                                  <span className="d-flex align-items-center flex-wrap rpw-gap-2">
                                    <span className="d-inline-block me-2">
                                      <ImageWithBasePath
                                        src="assets/img/icons/clinic-icon-03.svg"
                                        className="rounded-circle"
                                        alt=""
                                      />
                                    </span>
                                    <span>
                                      <span className="service-title d-block mb-1">
                                        İzmir Ofisi
                                      </span>
                                      <span className="fs-14">
                                        İzmir
                                      </span>
                                      <i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1" />
                                      <span className="fs-14">16 KM </span>
                                    </span>
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="d-flex align-items-center flex-wrap rpw-gap-2 justify-content-between">
                          <Link
                            to="#"
                            className="btn btn-md btn-dark prev_btns inline-flex align-items-center rounded-pill"
                            onClick={handlePrev}
                          >
                            <i className="isax isax-arrow-left-2 me-1" />
                            Back
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-md btn-primary-gradient next_btns inline-flex align-items-center rounded-pill"
                            onClick={handleNext}
                          >
                            Tarih &amp; Saat Seçiniz
                            <i className="isax isax-arrow-right-3 ms-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                )}
                {currentStep === 3 && (
                  <fieldset style={{ display: 'block' }}>
                    <div className="card booking-card mb-0">
                      <div className="card-header">
                        <div className="booking-header pb-0">
                          <div className="card mb-0">
                            <div className="card-body">
                              <div className="d-flex align-items-center flex-wrap rpw-gap-2 mb-4 flex-wrap row-gap-2">
                                <span className="avatar avatar-xxxl avatar-rounded me-2 flex-shrink-0">
                                  <ImageWithBasePath
                                    src="assets/img/clients/client-15.jpg"
                                    alt=""
                                  />
                                </span>
                                <div>
                                  <h4 className="mb-1">
                                    Ayhan Uzay{" "}

                                  </h4>
                                  <p className="text-indigo mb-3 fw-medium">
                                    Avukat
                                  </p>
                                  <p className="mb-0">
                                    <i className="isax isax-location me-2" />
                                    Ankara
                                  </p>
                                </div>
                              </div>
                              <h6 className="mb-2">Rezervasyon Bilgileri</h6>
                              <div className="row gx-2 gy-3">
                                <div className="col-lg-3 col-sm-6">
                                  <div>
                                    <h6 className="fs-14 fw-medium mb-1">Hizmet</h6>
                                    <p className="mb-0">Ön Görüşme (30 Dakika)</p>
                                  </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                  <div>
                                    <h6 className="fs-14 fw-medium mb-1">Hizmet</h6>
                                    <p className="mb-0">Danışmanlık (30 Dakika)</p>
                                  </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                  <div>
                                    <h6 className="fs-14 fw-medium mb-1">
                                      Tarih &amp; Saat
                                    </h6>
                                    <p className="mb-0">10:00 - 11:00 AM, 15, Oct</p>
                                  </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                  <div>
                                    <h6 className="fs-14 fw-medium mb-1">
                                      Görüşme Tipi
                                    </h6>
                                    <p className="mb-0">Video Görüşme</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body booking-body">
                        <div className="card mb-0">
                          <div className="card-body pb-1">
                            <div className="row">
                              <div className="col-lg-5">
                                <div className="card">
                                  <div className="card-body p-2 pt-3">
                                    <div style={wrapperStyle}>
                                      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-7">
                                <div className="card booking-wizard-slots">
                                  <div className="card-body">
                                    <div className="book-title">
                                      <h6 className="fs-14 mb-2">Sabah</h6>
                                    </div>
                                    <div className="token-slot mt-2 mb-2">
                                      <div className="form-check-inline visits me-1">
                                        <label className="visit-btns">
                                          <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="appintment"
                                            defaultChecked
                                          />
                                          <span className="visit-rsn">09:45</span>
                                        </label>
                                      </div>
                                      <div className="form-check-inline visits me-1">
                                        <label className="visit-btns">
                                          <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="appintment"
                                          />
                                          <span className="visit-rsn">-</span>
                                        </label>
                                      </div>
                                      <div className="form-check-inline visits me-1">
                                        <label className="visit-btns">
                                          <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="appintment"
                                          />
                                          <span className="visit-rsn">10:45</span>
                                        </label>
                                      </div>
                                      <div className="form-check-inline visits me-1">
                                        <label className="visit-btns">
                                          <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="appintment"
                                          />
                                          <span className="visit-rsn">10:45</span>
                                        </label>
                                      </div>
                                      <div className="form-check-inline visits me-1">
                                        <label className="visit-btns">
                                          <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="appintment"
                                          />
                                          <span className="visit-rsn">10:45</span>
                                        </label>
                                      </div>
                                      <div className="form-check-inline visits me-1">
                                        <label className="visit-btns">
                                          <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="appintment"
                                          />
                                          <span className="visit-rsn">-</span>
                                        </label>
                                      </div>
                                      <div className="form-check-inline visits me-1">
                                        <label className="visit-btns">
                                          <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="appintment"
                                          />
                                          <span className="visit-rsn">09:45</span>
                                        </label>
                                      </div>
                                      <div className="form-check-inline visits me-1">
                                        <label className="visit-btns">
                                          <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="appintment"
                                          />
                                          <span className="visit-rsn">-</span>
                                        </label>
                                      </div>
                                      <div className="form-check-inline visits me-1">
                                        <label className="visit-btns">
                                          <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="appintment"
                                          />
                                          <span className="visit-rsn">10:45</span>
                                        </label>
                                      </div>
                                      <div className="form-check-inline visits me-1">
                                        <label className="visit-btns">
                                          <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="appintment"
                                          />
                                          <span className="visit-rsn">10:45</span>
                                        </label>
                                      </div>
                                      <div className="form-check-inline visits me-1">
                                        <label className="visit-btns">
                                          <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="appintment"
                                          />
                                          <span className="visit-rsn">10:45</span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="book-title">
                                      <h6 className="fs-14 mb-2">Öğleden Sonra</h6>
                                    </div>
                                    <div className="token-slot mt-2 mb-2">
                                      <div className="form-check-inline visits me-1">
                                        <label className="visit-btns">
                                          <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="appintment"
                                            defaultChecked
                                          />
                                          <span className="visit-rsn">09:45</span>
                                        </label>
                                      </div>
                                      <div className="form-check-inline visits me-1">
                                        <label className="visit-btns">
                                          <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="appintment"
                                          />
                                          <span className="visit-rsn">-</span>
                                        </label>
                                      </div>
                                      <div className="form-check-inline visits me-1">
                                        <label className="visit-btns">
                                          <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="appintment"
                                          />
                                          <span className="visit-rsn">10:45</span>
                                        </label>
                                      </div>
                                      <div className="form-check-inline visits me-1">
                                        <label className="visit-btns">
                                          <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="appintment"
                                          />
                                          <span className="visit-rsn">10:45</span>
                                        </label>
                                      </div>
                                      <div className="form-check-inline visits me-1">
                                        <label className="visit-btns">
                                          <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="appintment"
                                          />
                                          <span className="visit-rsn">10:45</span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="book-title">
                                      <h6 className="fs-14 mb-2">Akşam</h6>
                                    </div>
                                    <div className="token-slot mt-2 mb-2">
                                      <div className="form-check-inline visits me-1">
                                        <label className="visit-btns">
                                          <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="appintment"
                                            defaultChecked
                                          />
                                          <span className="visit-rsn">09:45</span>
                                        </label>
                                      </div>
                                      <div className="form-check-inline visits me-1">
                                        <label className="visit-btns">
                                          <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="appintment"
                                          />
                                          <span className="visit-rsn">-</span>
                                        </label>
                                      </div>
                                      <div className="form-check-inline visits me-1">
                                        <label className="visit-btns">
                                          <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="appintment"
                                          />
                                          <span className="visit-rsn">10:45</span>
                                        </label>
                                      </div>
                                      <div className="form-check-inline visits me-1">
                                        <label className="visit-btns">
                                          <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="appintment"
                                          />
                                          <span className="visit-rsn">10:45</span>
                                        </label>
                                      </div>
                                      <div className="form-check-inline visits me-1">
                                        <label className="visit-btns">
                                          <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="appintment"
                                          />
                                          <span className="visit-rsn">10:45</span>
                                        </label>
                                      </div>
                                      <div className="form-check-inline visits me-1">
                                        <label className="visit-btns">
                                          <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="appintment"
                                          />
                                          <span className="visit-rsn">-</span>
                                        </label>
                                      </div>
                                      <div className="form-check-inline visits me-1">
                                        <label className="visit-btns">
                                          <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="appintment"
                                          />
                                          <span className="visit-rsn">09:45</span>
                                        </label>
                                      </div>
                                      <div className="form-check-inline visits me-1">
                                        <label className="visit-btns">
                                          <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="appintment"
                                          />
                                          <span className="visit-rsn">-</span>
                                        </label>
                                      </div>
                                      <div className="form-check-inline visits me-1">
                                        <label className="visit-btns">
                                          <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="appintment"
                                          />
                                          <span className="visit-rsn">10:45</span>
                                        </label>
                                      </div>
                                      <div className="form-check-inline visits me-1">
                                        <label className="visit-btns">
                                          <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="appintment"
                                          />
                                          <span className="visit-rsn">10:45</span>
                                        </label>
                                      </div>
                                      <div className="form-check-inline visits me-1">
                                        <label className="visit-btns">
                                          <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="appintment"
                                          />
                                          <span className="visit-rsn">10:45</span>
                                        </label>
                                      </div>
                                      <div className="form-check-inline visits me-1">
                                        <label className="visit-btns">
                                          <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="appintment"
                                          />
                                          <span className="visit-rsn">-</span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="d-flex align-items-center flex-wrap rpw-gap-2 justify-content-between">
                          <Link
                            to="#"
                            className="btn btn-md btn-dark prev_btns inline-flex align-items-center rounded-pill"
                            onClick={handlePrev}
                          >
                            <i className="isax isax-arrow-left-2 me-1" />
                            Back
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-md btn-primary-gradient next_btns inline-flex align-items-center rounded-pill"
                            onClick={handleNext}
                          >
                            Temel Bilgileri Ekle
                            <i className="isax isax-arrow-right-3 ms-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                )}
                {currentStep === 4 && (
                  <fieldset style={{ display: 'block' }}>
                    <div className="card booking-card mb-0">
                      <div className="card-header">
                        <div className="booking-header pb-0">
                          <div className="card mb-0">
                            <div className="card-body">
                              <div className="d-flex align-items-center flex-wrap rpw-gap-2 mb-4 flex-wrap row-gap-2">
                                <span className="avatar avatar-xxxl avatar-rounded me-2 flex-shrink-0">
                                  <ImageWithBasePath
                                    src="assets/img/clients/client-15.jpg"
                                    alt=""
                                  />
                                </span>
                                <div>
                                  <h4 className="mb-1">
                                    Ayhan Uzay{" "}

                                  </h4>
                                  <p className="text-indigo mb-3 fw-medium">
                                    Avukat
                                  </p>
                                  <p className="mb-0">
                                    <i className="isax isax-location me-2" />
                                    Ankara
                                  </p>
                                </div>
                              </div>
                              <h6 className="mb-2">Rezervasyon Bilgileri</h6>
                              <div className="row gx-2 gy-3">
                                <div className="col-lg-3 col-sm-6">
                                  <div>
                                    <h6 className="fs-14 fw-medium mb-1">Hizmet</h6>
                                    <p className="mb-0">Ön Görüşme (30 Dakika)</p>
                                  </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                  <div>
                                    <h6 className="fs-14 fw-medium mb-1">Hizmet</h6>
                                    <p className="mb-0">Danışmanlık (30 Dakika)</p>
                                  </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                  <div>
                                    <h6 className="fs-14 fw-medium mb-1">
                                      Tarih &amp; Saat
                                    </h6>
                                    <p className="mb-0">10:00 - 11:00 AM, 15, Oct</p>
                                  </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                  <div>
                                    <h6 className="fs-14 fw-medium mb-1">
                                      Görüşme Tipi
                                    </h6>
                                    <p className="mb-0">Video Görüşme</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body booking-body">
                        <div className="card mb-0">
                          <div className="card-body pb-1">
                            <div className="row">
                              <div className="col-lg-4 col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">Adı*</label>
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">Soyadı*</label>
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">Telefon Numarası*</label>
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">Email Adresi</label>
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                              
                            
                              <div className="col-lg-12">
                                <div className="mb-3">
                                  <label className="form-label">Dosya Ekle</label>
                                  <input type="file" className="form-control" />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Görüşme Nedeni* (Hukuk Alanı veya görüşme hakkında genel bilgileri giriniz.)
                                  </label>
                                  <textarea
                                    className="form-control"
                                    rows={3}
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="d-flex align-items-center flex-wrap rpw-gap-2 justify-content-between">
                          <Link
                            to="#"
                            className="btn btn-md btn-dark prev_btns inline-flex align-items-center rounded-pill"
                            onClick={handlePrev}
                          >
                            <i className="isax isax-arrow-left-2 me-1" />
                            Back
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-md btn-primary-gradient next_btns inline-flex align-items-center rounded-pill"
                            onClick={handleNext}
                          >
                            Onayla
                            <i className="isax isax-arrow-right-3 ms-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                )}

                {currentStep === 5 && (
                  <fieldset style={{ display: 'block' }}>
                    <div className="card booking-card">
                      <div className="card-body booking-body pb-1">
                        <div className="row">
                          <div className="col-lg-12 d-flex">
                            <div className="flex-fill">
                              <div className="card ">
                                <div className="card-header">
                                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                                    <h5 className="d-flex align-items-center flex-wrap rpw-gap-2">
                                      <i className="isax isax-tick-circle5 text-success me-2" />
                                      Görüşme Talebi Onaylandı
                                    </h5>
                                    <h5 className="d-flex align-items-center flex-wrap rpw-gap-2">
                                      <i className="isax isax-tick-circle5 text-success me-2" />
                                      Rez. NO: 1234567890
                                    </h5>
                                  </div>
                                </div>
                                <div className="card-header d-flex align-items-center flex-wrap rpw-gap-2">
                                  <span className="avatar avatar-lg avatar-rounded me-2 flex-shrink-0">
                                    <ImageWithBasePath
                                      src="assets/img/clients/client-16.jpg"
                                      alt=""
                                    />
                                  </span>
                                  <p className="mb-0">
                                    <span className="text-dark">
                                      Avukatınız: Ayhan Uzay
                                    </span>{" "}
                                   tarafından onaylandığında size e-posta ile bilgilendirme yapılacaktır.
                                    </p>
                                </div>
                                <div className="card-body pb-1">
                                  <div className="d-flex align-items-center flex-wrap rpw-gap-2 justify-content-between mb-3">
                                    <h6>Görüşme Bilgileri</h6>
                                    <Link
                                      to="#"
                                      className="btn btn-light rounded-pill"
                                    >
                                      <i className="isax isax-calendar me-1" />
                                      Başa Dön
                                    </Link>
                                    <Link
                                      to="#"
                                      className="btn btn-light rounded-pill"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        handleCancel();
                                      }}
                                    >
                                      <i className="isax isax-close-circle me-1" />
                                      İptal Et
                                    </Link>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label className="form-label">Hizmet</label>
                                        <div className="form-plain-text">
                                          Danışmanlık (30 Dakika)
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label className="form-label">
                                          Ek Hizmet
                                        </label>
                                        <div className="form-plain-text">
                                          Ön Görüşme (30 Dakika)
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label className="form-label">
                                          Tarih &amp; Saat
                                        </label>
                                        <div className="form-plain-text">
                                          10:00 - 11:00 AM, 15, Oct 2025{" "}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label className="form-label">
                                          Görüşme Tipi
                                        </label>
                                        <div className="form-plain-text">Ofis </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label className="form-label">
                                          Ofis Adı &amp; Konumu
                                        </label>
                                        <div className="form-plain-text">
                                          Ankara Hukuk Ofisi                                    <Link
                                            to="#"
                                            className="text-primary"
                                          >
                                            Konumunu Görüntüle
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card">
                                <div className="card-body d-flex align-items-center flex-wrap rpw-gap-2 justify-content-between">
                                  <div>
                                    <h6 className="mb-1">Yardıma İhtiyacınız var mı?</h6>
                                    <p className="mb-0">
                                      Rezervasyon / İptal sırasında herhangi bir sorunla karşılaşırsanız bize ulaşın
                                    </p>
                                  </div>
                                  <Link
                                    to="mailto:info@avukatimonline.com"
                                    className="btn btn-light rounded-pill d-flex flex-column align-items-center"
                                  >
                                    <span className="d-flex align-items-center">
                                      <i className="isax isax-message-text me-1" />
                                      Bize Ulaşın
                                    </span>
                                    <small className="text-muted">info@avukatimonline.com</small>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                    <div>
                      <Link to="#" className="" onClick={() => setCurrentStep(1)}>
                        <i className="isax isax-arrow-left-2 me-1" />
                        Rezervasyona Geri Dön
                      </Link>
                    </div>
                  </fieldset>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
      {showPhoneModal && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  <i className="isax isax-call5 text-primary me-2" />
                  Sesli Görüşme Bilgileri
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowPhoneModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="text-center">
                  <div className="mb-3">
                    <i className="isax isax-call5 text-primary" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <h6 className="mb-3">Avukatınızla Sesli Görüşme</h6>
                 Avukatınızla sesli görüşme yapmak için aşağıdaki telefon numarasını kullanınız.
                  <div className="phone-number-display p-3 bg-light rounded">
                    <h4 className="text-primary mb-0">
                      <i className="isax isax-call5 me-2" />
                      +90 (312) 123 45 67
                    </h4>
                  </div>
                
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowPhoneModal(false)}
                >
                  Kapat
                </button>
            
              </div>
            </div>
          </div>
        </div>
      )}
      {showPhoneModal && (
        <div 
          className="modal-backdrop fade show"
          onClick={() => setShowPhoneModal(false)}
        ></div>
      )}
      {showCancelModal && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  <i className="isax isax-danger text-danger me-2" />
                  İptal Onayı
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowCancelModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="text-center">
                  <div className="mb-3">
                    <i className="isax isax-danger text-danger" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <h6 className="mb-3">Görüşmeyi İptal Etmek İstiyor musunuz?</h6>
                  <p className="text-muted">
                    Bu işlem geri alınamaz. Görüşme talebiniz iptal edilecektir.
                  </p>
                  <div className="alert alert-warning mt-3">
                    <i className="isax isax-info-circle me-2" />
                    <strong>Rezervasyon No:</strong> 1234567890
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowCancelModal(false)}
                >
                  Vazgeç
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={confirmCancel}
                >
                  <i className="isax isax-danger me-2" />
                  Evet, İptal Et
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showCancelModal && (
        <div 
          className="modal-backdrop fade show"
          onClick={() => setShowCancelModal(false)}
        ></div>
      )}
    </div>

  )
}

export default BookingWizard