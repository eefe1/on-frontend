import React from "react";
import { Link } from "react-router-dom";
import Select from 'react-select'
import ImageWithBasePath from "../ImageWithBasePath";


const Sidebar = () => {
  let pathnames = window.location.pathname;

  const availablity = [
    { value: 'Uygun', label: 'Uygun' },
    { value: 'Uygun Değil', label: 'Uygun Değil' },
  ]

  return (
    <>
      {/* Profile Sidebar */}
      <div className="profile-sidebar doctor-sidebar profile-sidebar-new">
        <div className="widget-profile pro-widget-content">
          <div className="profile-info-widget">
            <Link to="avukat_profil" className="booking-doc-img">
            <ImageWithBasePath
                            src="assets/img/bg/breadcrumb-bg-01.png"
                            alt="img"
                        />
            </Link>
            <div className="profile-det-info">
              <h3>
                <Link to="avukat_profil">Ayhan Uzay</Link>
              </h3>
              <div className="patient-details">
                <h5 className="mb-0">
                  Avukat
                </h5>
              </div>
              <span className="badge doctor-role-badge">
                <i className="fa-solid fa-circle" />
                Online
              </span>
            </div>
          </div>
        </div>
        <div className="doctor-available-head">
          <div className="input-block input-block-new">
            <label className="form-label">
              Uygunluk Durumu <span className="text-danger">*</span>
            </label>

            <Select
              className='select'
              options={availablity}
              defaultValue={availablity[0]} />

          </div>
        </div>
        <div className="dashboard-widget">
          <nav className="dashboard-menu">
            <ul>
              <li className={pathnames.includes("/avukat_dashboard") ? "active" : ""}>

                <Link to="/avukat_dashboard">
                  <i className="isax isax-category-2 me-2"></i>
                  <span>Panel</span>
                </Link>
              </li>
              <li className={pathnames.includes("/avukat_randevu_talebi") ? "active" : ""}>
                <Link to="/avukat_randevu_talebi">
                  <i className="isax isax-clipboard-tick me-2"></i>
                  <span>Randevu Talepleri</span>
                  <small className="unread-msg">2</small>
                </Link>
              </li>
              <li
                className={
                  pathnames.includes("/avukat_randevular") || pathnames.includes('/avukat_randevular') || pathnames.includes('') || pathnames.includes('') || pathnames.includes('') || pathnames.includes('/avukat_randevular') ? "active" : ""
                }
              >
                <Link to="/avukat_randevular">
                  <i className="isax isax-calendar-1 me-2"></i>
                  <span>Randevular</span>
                </Link>
              </li>

              <li className={pathnames.includes('/avukat_uygun_saatler') ? 'active' : ''}>
                <Link to="/avukat_uygun_saatler">
                  <i className="isax isax-calendar-tick me-2"></i>
                  <span>Uygun Saatler</span>
                </Link>
              </li>
              <li className={pathnames.includes('/avukat_müvekkillerim') || pathnames.includes('/doctor/patient-profile') ? "active" : ''}>
                <Link to="/avukat_müvekkillerim">
                  <i className="fa-solid fa-user me-2"></i>
                  <span>Müvekkillerim</span>
                </Link>
              </li>
              <li className={pathnames.includes('/avukat_uzmanlik') ? 'active' : ''}>
                <Link to="/avukat_uzmanlik">
                  <i className="isax isax-clock me-2"></i>
                  <span>Uzmanlıklar &amp; Servisler</span>
                </Link>
              </li>
            

              <li>
                <Link to="/avukat_mesajlar">
                  <i className="isax isax-messages-1 me-2"></i>
                  <span>Mesajlar</span>
                  <small className="unread-msg">7</small>
                </Link>
              </li>
              <li>
                <Link to="/avukat_tekviller">
                  <i className="fa-solid fa-users me-2"></i>
                  <span>Tekvil</span>
                </Link>
              </li>
              <li>
                <Link to="/avukat_bloglar">
                  <i className="fa-solid fa-file-pen me-2"></i>
                  <span>Bloglar</span>
                </Link>
              </li>
              <li className={pathnames.includes('/avukat_sosyal_medya') ? 'active' : ''}>
                <Link to="/avukat_sosyal_medya">
                  <i className="fa-solid fa-shield-halved me-2"></i>
                  <span>Sosyal Medya</span>
                </Link>
              </li>


            </ul>
          </nav>
        </div>
      </div>
      {/* /Profile Sidebar */}
    </>
  );
};

export default Sidebar;
