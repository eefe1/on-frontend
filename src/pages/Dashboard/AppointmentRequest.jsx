import React, { useState } from 'react'
import Sidebar from '../../components/Dashboard/sidebar'
import { Link } from 'react-router-dom'
import { doctordashboardprofile01, doctordashboardprofile02, doctordashboardprofile06, doctordashboardprofile3 } from '../../components/imagepath'
import ImageWithBasePath from '../../components/ImageWithBasePath'

const AppointmentRequest = (props) => {
    const [selectedOption, setSelectedOption] = useState('reshedule');
    const [showCancelPopup, setShowCancelPopup] = useState(false);

    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
    };

    const handleContinue = () => {
      if (selectedOption === 'reshedule') {
        // Redirect to calendar page
        window.location.href = '/avukat/panel/takvim';
      } else if (selectedOption === 'refund') {
        // Close the original modal first
        const originalModal = document.querySelector('.modal.show');
        if (originalModal) {
          originalModal.classList.remove('show');
          originalModal.style.display = 'none';
        }
        // Remove backdrop
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
          backdrop.remove();
        }
        // Show cancellation popup
        setShowCancelPopup(true);
      }
    };

    return (
        <div>
            <>
                {/* Breadcrumb */}
                <div className="breadcrumb-bar">
                    <div className="container">
                        <div className="row align-items-center inner-banner">
                            <div className="col-md-12 col-12 text-center">
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="/home">
                                                <i className="isax isax-home-15" />
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item" aria-current="page">
                                            Avukat
                                        </li>
                                        <li className="breadcrumb-item active">Görüşme Talepleri</li>
                                    </ol>
                                    <h2 className="breadcrumb-title">Görüşme Talepleri</h2>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="breadcrumb-bg">
                        <ImageWithBasePath
                            src="assets/img/bg/breadcrumb-bg-01.png"
                            alt="img"
                            className="breadcrumb-bg-01"
                        />
                        <ImageWithBasePath
                            src="assets/img/bg/breadcrumb-bg-02.png"
                            alt="img"
                            className="breadcrumb-bg-02"
                        />
                        <ImageWithBasePath
                            src="assets/img/bg/breadcrumb-icon.png"
                            alt="img"
                            className="breadcrumb-bg-03"
                        />
                        <ImageWithBasePath
                            src="assets/img/bg/breadcrumb-icon.png"
                            alt="img"
                            className="breadcrumb-bg-04"
                        />
                    </div>
                </div>
                {/* /Breadcrumb */}
            </>

            {/* Page Content */}
            <div className="content doctor-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-xl-3 theiaStickySidebar">
                            {/* Profile Sidebar */}
                            <Sidebar />
                            {/* /Profile Sidebar */}
                        </div>
                        <div className="col-lg-8 col-xl-9">
                            <div className="dashboard-header">
                                <h3>Görüşme Talepleri</h3>
                                <ul>
                                    <li>
                                        <div className="dropdown header-dropdown">
                                            <Link
                                                className="dropdown-toggle nav-tog"
                                                data-bs-toggle="dropdown"
                                                to="#"
                                            >
                                                Son 7 Gün
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <Link to="#" className="dropdown-item">
                                                    Bugün
                                                </Link>
                                                <Link to="#" className="dropdown-item">
                                                    Bu Ay 
                                                </Link>
                                                <Link to="#" className="dropdown-item">
                                                    Son 7 Gün
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* Request List */}
                            <div className="appointment-wrap">
                                <ul>
                                    <li>
                                        <div className="patinet-information">
                                            <Link to="">
                                                <img
                                                    src={doctordashboardprofile01}
                                                    alt="User Image"
                                                />
                                            </Link>
                                            <div className="patient-info">
                                                <p>#Apt0001</p>
                                                <h6>
                                                    <Link to="">Yeşim Güler</Link>
                                                    <span className="badge new-tag">Yeni</span>
                                                </h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="appointment-info">
                                        <p>
                                            <i className="fa-solid fa-clock" />
                                            11 Kas 2025 10.45 AM
                                        </p>
                                        <p className="md-text">Danışmanlık</p>
                                    </li>
                                    <li className="appointment-type">
                                        <p className="md-text">Görüşme Tipi</p>
                                        <p>
                                            <i className="fa-solid fa-video text-blue" />
                                            Video Görüşme
                                        </p>
                                    </li>
                                    <li>
                                        <ul className="request-action">
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="accept-link"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#accept_appointment"
                                                >
                                                    <i className="fa-solid fa-check" />
                                                    Kabul Et
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="reject-link"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#cancel_appointment"
                                                >
                                                    <i className="fa-solid fa-xmark" />
                                                    İptal Et
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            {/* /Request List */}
                            {/* Request List */}
                            <div className="appointment-wrap">
                                <ul>
                                    <li>
                                        <div className="patinet-information">
                                            <Link to="">
                                                <img
                                                    src={doctordashboardprofile02}
                                                    alt="User Image"
                                                />
                                            </Link>
                                            <div className="patient-info">
                                                <p>#Apt0002</p>
                                                <h6>
                                                    <Link to="">Kaan Devrim</Link>
                                                </h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="appointment-info">
                                        <p>
                                            <i className="fa-solid fa-clock" />
                                            10 Kas 2025 02.00 PM
                                        </p>
                                        <p className="md-text">Danışmanlık</p>
                                    </li>
                                    <li className="appointment-type">
                                        <p className="md-text">Görüşme Tipi</p>
                                        <p>
                                            <i className="fa-solid fa-video text-blue " />
                                            Video Görüşme
                                            
                                        </p>
                                    </li>
                                    <li>
                                        <ul className="request-action">
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="accept-link"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#accept_appointment"
                                                >
                                                    <i className="fa-solid fa-check" />
                                                    Kabul Et
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="reject-link"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#cancel_appointment"
                                                >
                                                    <i className="fa-solid fa-xmark" />
                                                    İptal Et
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                         
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="loader-item text-center">
                                        <Link to="#" className="btn btn-load">
                                            Daha Fazla Yükle
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Page Content */}
            {/* Appointment Accepted Modal */}
            <div className="modal fade info-modal" id="accept_appointment">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="success-wrap text-center">
                                <span className="icon-success">
                                    <i className="fa-solid fa-calendar-check" />
                                </span>
                                <h3>Görüşmeyi Onaylandı</h3>
                                <p>Görüşmeniz 23 Mar 2023 Tarihi için Onaylandı.</p>
                                <Link to="#" className="btn btn-primary prime-btn" data-bs-dismiss='modal'>
                                    Görüşme Sayfasına Dön
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Appointment Accepted Modal */}
            {/* Appointment Cancel Modal */}
            <div className="modal fade info-modal" id="cancel_appointment">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="success-wrap">
                                <div className="success-info">
                                    <div className="text-center">
                                        <span className="icon-success bg-red">
                                            <i className="fa-solid fa-xmark" />
                                        </span>
                                        <h3>İptal Etmek İstiyor Musunuz?</h3>
                                        <p></p>
                                    </div>
                                    <div className="form-wrap">
                                        <label className="col-form-label">
                                            İptal Sebebi <span className="text-danger"></span>
                                        </label>
                                        <textarea className="form-control" rows={4} defaultValue={""} />
                                    </div>
                                    <div className="form-wrap">
                                        <div className="custom-control form-check custom-control-inline">
                                            <input
                                                type="radio"
                                                id="reshedule"
                                                name="rating_option"
                                                className="form-check-input"
                                                value="reshedule"
                                                checked={selectedOption === 'reshedule'}
                                                onChange={handleOptionChange}
                                            />
                                            <label className="form-check-label" htmlFor="reshedule">
                                                Görüşme Zamanını Yeniden Ayarla
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-wrap">
                                        <div className="custom-control form-check custom-control-inline">
                                            <input
                                                type="radio"
                                                id="refund"
                                                name="rating_option"
                                                className="form-check-input"
                                                value="refund"
                                                checked={selectedOption === 'refund'}
                                                onChange={handleOptionChange}
                                            />
                                            <label className="form-check-label" htmlFor="refund">
                                                İptal etme açıklaması ile devam edin
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-button">
                                    <div className="row gx-3">
                                        <div className="col-sm-6">
                                            <Link
                                                to="#"
                                                className="btn btn-gray w-100"

                                                data-bs-dismiss="modal"
                                            >
                                                Fikrimi Değiştirdim.
                                            </Link>
                                        </div>
                                        <div className="col-sm-6">
                                            <button
                                                type="button"
                                                className="btn btn-primary prime-btn w-100"
                                                onClick={handleContinue}
                                            >
                                                Devam Et
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Appointment Cancel Modal */}
            {showCancelPopup && (
              <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">
                        <i className="isax isax-tick-circle5 text-success me-2" />
                        İptal Onaylandı
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        onClick={() => setShowCancelPopup(false)}
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="text-center">
                        <div className="mb-3">
                          <i className="isax isax-tick-circle5 text-success" style={{ fontSize: '3rem' }}></i>
                        </div>
                        <h6 className="mb-3">Müvekkilinizin Görüşme Talebi İptal Edilmiştir</h6>
                        <p className="text-muted">
                          İptal işlemi başarıyla tamamlanmıştır. Müvekkil bilgilendirilecektir.
                        </p>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => setShowCancelPopup(false)}
                      >
                        Tamam
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Add backdrop for cancel popup */}
            {showCancelPopup && (
              <div 
                className="modal-backdrop fade show"
                onClick={() => setShowCancelPopup(false)}
              ></div>
            )}
        </div>

    )
}

export default AppointmentRequest
