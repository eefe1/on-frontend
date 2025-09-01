import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../components/ImageWithBasePath";



const LawyerListView = (props) => {
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    message: '',
    name: '',
    surname: '',
    phone: '',
    email: ''
  });



  const specialities = [
    { value: 'Specialities', label: 'Uzmanlık Alanı' },
    { value: 'Ceza Hukuku', label: 'Ceza Hukuku' },
    { value: 'Aile Hukuku', label: 'Aile Hukuku' },
    { value: 'İş Hukuku', label: 'İş Hukuku' },
    { value: 'Ticaret Hukuku', label: 'Ticaret Hukuku' },
    { value: 'Gayrimenkul Hukuku', label: 'Gayrimenkul Hukuku' },
    { value: 'Fikri Mülkiyet Hukuku', label: 'Fikri Mülkiyet Hukuku' },
    { value: 'Vergi Hukuku', label: 'Vergi Hukuku' },
    { value: 'İcra ve İflas Hukuku', label: 'İcra ve İflas Hukuku' },
    { value: 'Sigorta Hukuku', label: 'Sigorta Hukuku' },
    { value: 'İdare Hukuku', label: 'İdare Hukuku' }
  ];

  const clinic = [
    { value: 'İstanbul', label: 'İstanbul' },
    { value: 'Ankara', label: 'Ankara' },
    { value: 'İzmir', label: 'İzmir' },
    { value: 'Bursa', label: 'Bursa' },
    { value: 'Antalya', label: 'Antalya' },
    { value: 'Adana', label: 'Adana' },
    { value: 'Konya', label: 'Konya' },
    { value: 'Gaziantep', label: 'Gaziantep' },
    { value: 'Şanlıurfa', label: 'Şanlıurfa' },
    { value: 'Kocaeli', label: 'Kocaeli' }
  ];
  const servicetype = [
    { value: 'Ofis', label: 'Ofis' },
    { value: 'Online', label: 'Online' },
    { value: 'Mesaj', label: 'Mesaj' }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNextStep = () => {
    if (currentStep === 1 && formData.message.trim()) {
      setCurrentStep(2);
    }
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted:', formData);
    setShowModal(false);
    setCurrentStep(1);
    setFormData({
      message: '',
      name: '',
      surname: '',
      phone: '',
      email: ''
    });
  };

  return (
    <>

      {/* Breadcrumb */}
      <div className="breadcrumb-bar overflow-visible">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <nav aria-label="breadcrumb" className="page-breadcrumb">

                <h2 className="breadcrumb-title">Avukatlar</h2>
              </nav>
            </div>
          </div>

        </div>

      </div>
      {/* /Breadcrumb */}

      <div className="content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
             
              <div className="row">
                <div className="col-lg-12">
                  <div className="row align-items-center mb-4 map-select">
                    <div className="col-md-10">
                      <div className="row">
                          <div className="col-sm-4 col-6">
                            <div className="mb-4">
                              <Select
                                className="select"
                                options={specialities}
                                placeholder="Uzmanlık Alanı"
                                isClearable={true}
                                isSearchable={true}
                              />
                            </div>
                          </div>
                         
                        <div className="col-sm-4 col-6">
                          <div className="mb-4">
                            <Select
                              className="select"
                              options={clinic}
                              placeholder="Şehir"
                              isClearable={true}
                              isSearchable={true}
                            />
                          </div>
                        </div>
                        <div className="col-sm-4 col-6">
                          <div className="mb-4">
                            <Select
                              className="select"
                              options={servicetype}
                              placeholder="Servis Tipi"
                              isClearable={true}
                              isSearchable={true}
                            />
                          </div>
                        </div>
                        <div className="col-sm-4 col-3">
                          <div className="dropdown header-dropdown me-2">
                            <Link
                              className="dropdown-toggle sort-dropdown"
                              data-bs-toggle="dropdown"
                              to="#"
                              aria-expanded="false"
                            >
                              <span>Sıralama (Fiyat)</span>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-end">
                              <Link to="#" className="dropdown-item">
                                Fiyat (Düşükten Yüksek)
                              </Link>
                              <Link to="#" className="dropdown-item">
                                Fiyat (Yüksekten Düşük)
                              </Link>
                            </div>
                          </div>
                        </div>





                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="text-start mb-3">
                        <Link
                          to="#"
                          className="fw-medium text-secondary text-decoration-underline"
                        >
                          temizle
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                    <div className="doctor-filter-availability">
                      <p>Uygunluk</p>
                      <div className="status-toggle status-tog">
                        <input type="checkbox" id="status_6" className="check" />
                        <label htmlFor="status_6" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </div>

                  </div>

                  <div className="row">
                    {/* Hardcoded Lawyer Card 1 */}
                    <div className="col-lg-12">
                      <div className="card doctor-list-card">
                        <div className="d-md-flex align-items-center">
                          <div className="card-img card-img-hover">
                            <Link to="avukat_profil">
                              <ImageWithBasePath src="assets/img/doctor-grid/doctor-list-02.jpg" alt="" />
                            </Link>
                            <div className="grid-overlay-item d-flex align-items-center justify-content-between">
                              <Link to="javascript:void(0)" className="fav-icon">
                                <i className="fa fa-heart" />
                              </Link>
                            </div>
                          </div>
                          <div className="card-body p-0">
                            <div className="d-flex align-items-center justify-content-between border-bottom p-3">
                              <Link to="#" className="text-teal fw-medium fs-14">
                                Ceza Hukuku, Aile Hukuku
                              </Link>
                              <span className="badge bg-success-light d-inline-flex align-items-center">
                                <i className="fa-solid fa-circle fs-5 me-1" />
                                Uygun
                              </span>
                            </div>
                            <div className="p-3">
                              <div className="doctor-info-detail pb-3">
                                <div className="row align-items-center gy-3">
                                  <div className="col-sm-6">
                                    <div>
                                      <h6 className="d-flex align-items-center mb-1">
                                        <Link to="avukat_profil">
                                          Elif Yılmaz
                                        </Link>
                                        <i className="isax isax-tick-circle5 text-success ms-2" />
                                      </h6>
                                      <p className="mb-2">Ofis Adresi</p>
                                      <p className="d-flex align-items-center mb-0 fs-14">
                                        <i className="isax isax-location me-2" />
                                        İstanbul
                                        <Link
                                          to="#"
                                          className="text-primary text-decoration-underline ms-2"
                                        >
                                          Adresi Gör
                                        </Link>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div>
                                      <p className="d-flex align-items-center mb-0 fs-14 mb-2">
                                        <i className="isax isax-language-circle text-dark me-2" />
                                        Türkçe, İngilizce
                                      </p>
                                      <p className="d-flex align-items-center mb-0 fs-14 mb-2">
                                        <i className="isax isax-like-1 text-dark me-2" />
                                        95% (180 / 190 Oylama)
                                      </p>

                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mt-3">
                                <div className="d-flex align-items-center flex-wrap row-gap-3">
                                  <div className="me-3">
                                    <p className="mb-1">Ücret</p>
                                    <h3 className="text-orange">1500 TL</h3>
                                  </div>
                                  <p className="mb-0">
                                    Sonraki Randevu<br />
                                    14:00 PM - 20 Ekim, Cuma
                                  </p>
                                </div>
                                <Link
                                  to="/avukat_randevu_ayarla"
                                  className="btn btn-md btn-primary-gradient d-inline-flex align-items-center rounded-pill"
                                >
                                  <i className="isax isax-calendar-1 me-2" />
                                  Görüşme Ayarla
                                </Link>
                                <button
                                  onClick={() => setShowModal(true)}
                                  className="btn btn-md btn-primary-gradient d-inline-flex align-items-center rounded-pill"
                                >
                                  <i className="isax isax-message-text me-2" />
                                  Mesaj Gönder
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Hardcoded Lawyer Card 2 */}
                    <div className="col-lg-12">
                      <div className="card doctor-list-card">
                        <div className="d-md-flex align-items-center">
                          <div className="card-img card-img-hover">
                            <Link to="/patient/doctor-profile">
                              <ImageWithBasePath src="assets/img/doctor-grid/doctor-list-03.jpg" alt="" />
                            </Link>
                            <div className="grid-overlay-item d-flex align-items-center justify-content-between">
                              <Link to="javascript:void(0)" className="fav-icon">
                                <i className="fa fa-heart" />
                              </Link>
                            </div>
                          </div>
                          <div className="card-body p-0">
                            <div className="d-flex align-items-center justify-content-between border-bottom p-3">
                              <Link to="#" className="text-teal fw-medium fs-14">
                                Ticaret Hukuku, Miras Hukuku
                              </Link>
                              <span className="badge bg-danger-light d-inline-flex align-items-center">
                                <i className="fa-solid fa-circle fs-5 me-1" />
                                Müsait Değil
                              </span>
                            </div>
                            <div className="p-3">
                              <div className="doctor-info-detail pb-3">
                                <div className="row align-items-center gy-3">
                                  <div className="col-sm-6">
                                    <div>
                                      <h6 className="d-flex align-items-center mb-1">
                                        <Link to="avukat_profil/102">
                                          Mehmet Kaya
                                        </Link>
                                        <i className="isax isax-tick-circle5 text-success ms-2" />
                                      </h6>
                                      <p className="mb-2">Ofis Adresi</p>
                                      <p className="d-flex align-items-center mb-0 fs-14">
                                        <i className="isax isax-location me-2" />
                                        İzmir
                                        <Link
                                          to="#"
                                          className="text-primary text-decoration-underline ms-2"
                                        >
                                          Adresi Gör
                                        </Link>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div>
                                      <p className="d-flex align-items-center mb-0 fs-14 mb-2">
                                        <i className="isax isax-language-circle text-dark me-2" />
                                        Türkçe
                                      </p>
                                      <p className="d-flex align-items-center mb-0 fs-14 mb-2">
                                        <i className="isax isax-like-1 text-dark me-2" />
                                        90% (100 / 111 Oylama)
                                      </p>
                                      <p className="d-flex align-items-center mb-0 fs-14">
                                        <i className="isax isax-archive-14 text-dark me-2" />
                                        8 Yıllık Tecrübe
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mt-3">
                                <div className="d-flex align-items-center flex-wrap row-gap-3">
                                  <div className="me-3">
                                    <p className="mb-1">Ücret</p>
                                    <h3 className="text-orange">1200 TL</h3>
                                  </div>
                                  <p className="mb-0">
                                    Sonraki Randevu<br />
                                    11:00 AM - 18 Ekim, Çarşamba
                                  </p>
                                </div>
                                <Link
                                  to="/booking"
                                  className="btn btn-md btn-primary-gradient d-inline-flex align-items-center rounded-pill"
                                >
                                  <i className="isax isax-calendar-1 me-2" />
                                  Görüşme Ayarla
                                </Link>
                                <Link
                                  to="/booking"
                                  className="btn btn-md btn-primary-gradient d-inline-flex align-items-center rounded-pill"
                                >
                                  <i className="isax isax-message-text me-2" />
                                  Mesaj Gönder
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Existing mapped lawyer cards */}
                    {lawyers.map((lawyer) => (
                      <div className="col-lg-12" key={lawyer.id}>
                        <div className="card doctor-list-card">
                          <div className="d-md-flex align-items-center">
                            <div className="card-img card-img-hover">
                              <Link to="/patient/doctor-profile">
                                <ImageWithBasePath src="assets/img/doctor-grid/doctor-list-01.jpg" alt="" />
                              </Link>
                              <div className="grid-overlay-item d-flex align-items-center justify-content-between">

                                <Link to="javascript:void(0)" className="fav-icon">
                                  <i className="fa fa-heart" />
                                </Link>
                              </div>
                            </div>
                            <div className="card-body p-0">
                              <div className="d-flex align-items-center justify-content-between border-bottom p-3">
                                <Link to="#" className="text-teal fw-medium fs-14">
                                  Tüketici Hukuku, Icra Hukuku
                                </Link>
                                <span className={`badge ${lawyer.is_active ? 'bg-success-light' : 'bg-danger-light'} d-inline-flex align-items-center`}>
                                  <i className="fa-solid fa-circle fs-5 me-1" />
                                  Uygun
                                </span>
                              </div>
                              <div className="p-3">
                                <div className="doctor-info-detail pb-3">
                                  <div className="row align-items-center gy-3">
                                    <div className="col-sm-6">
                                      <div>
                                        <h6 className="d-flex align-items-center mb-1">
                                          <Link to={`avukat_profil/${lawyer.id}`}>
                                            Ayhan Uzay
                                          </Link>
                                          <i className="isax isax-tick-circle5 text-success ms-2" />
                                        </h6>
                                        <p className="mb-2">Ofis Adresi</p>
                                        <p className="d-flex align-items-center mb-0 fs-14">
                                          <i className="isax isax-location me-2" />
                                          Ankara
                                          <Link
                                            to="#"
                                            className="text-primary text-decoration-underline ms-2"
                                          >
                                            Adresi Gör
                                          </Link>
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-sm-6">
                                      <div>
                                        <p className="d-flex align-items-center mb-0 fs-14 mb-2">
                                          <i className="isax isax-language-circle text-dark me-2" />
                                          Ingilizce, Türkçe
                                        </p>
                                        <p className="d-flex align-items-center mb-0 fs-14 mb-2">
                                          <i className="isax isax-like-1 text-dark me-2" />
                                          98% (252 / 287 Oylama)
                                        </p>
                                        <p className="d-flex align-items-center mb-0 fs-14">
                                          <i className="isax isax-archive-14 text-dark me-2" />
                                          15 Yıllık Tecrübe
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mt-3">
                                  <div className="d-flex align-items-center flex-wrap row-gap-3">
                                    <div className="me-3">
                                      <p className="mb-1">Ücret</p>
                                      <h3 className="text-orange">1000 TL</h3>
                                    </div>
                                    <p className="mb-0">
                                      Sonraki Randevu<br />
                                      10:00 AM - 15 Ekim, Çarşamba
                                    </p>
                                  </div>
                                  <Link
                                    to="/booking"
                                    className="btn btn-md btn-primary-gradient d-inline-flex align-items-center rounded-pill"
                                  >
                                    <i className="isax isax-calendar-1 me-2" />
                                    Randevu Al
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="col-md-12">
                      <div className="pagination dashboard-pagination mt-md-3 mt-0 mb-4">
                        <ul>
                          <li>
                            <Link to="#" className="page-link prev">
                              Prev
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="page-link">
                              1
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="page-link active">
                              2
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="page-link">
                              3
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="page-link">
                              4
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="page-link next">
                              Next
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {currentStep === 1 ? 'Mesajınızı Yazın' : 'İletişim Bilgileri'}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    setShowModal(false);
                    setCurrentStep(1);
                    setFormData({
                      message: '',
                      name: '',
                      surname: '',
                      phone: '',
                      email: ''
                    });
                  }}
                ></button>
              </div>
              <div className="modal-body">
                {currentStep === 1 ? (
                  <div>
                    <div className="form-group">
                      <label className="form-label">Mesajınız</label>
                      <textarea
                        className="form-control"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        placeholder="Mesajınızı buraya yazın..."
                        required
                      ></textarea>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Ad</label>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Soyad</label>
                          <input
                            type="text"
                            className="form-control"
                            name="surname"
                            value={formData.surname}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <label className="form-label">Telefon Numarası</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label className="form-label">E-posta</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="modal-footer">
                {currentStep === 1 ? (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleNextStep}
                    disabled={!formData.message.trim()}
                  >
                    İleri
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                    disabled={!formData.name || !formData.surname || !formData.phone || !formData.email}
                  >
                    Onayla
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Add backdrop */}
      {showModal && (
        <div
          className="modal-backdrop fade show"
          onClick={() => {
            setShowModal(false);
            setCurrentStep(1);
            setFormData({
              message: '',
              name: '',
              surname: '',
              phone: '',
              email: ''
            });
          }}
        ></div>
      )}
    </>
  );
};

export default LawyerListView;
