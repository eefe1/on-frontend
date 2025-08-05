import React from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "./ImageWithBasePath";

const Footer = () => {
  return (
    <footer className="footer inner-footer footer-info">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-3 col-md-3">
                  <div className="footer-widget footer-menu">
                    <h6 className="footer-title">Şirket</h6>
                    <ul>
                      <li>
                        <Link to="/pages/about-us">Hakkımızda</Link>
                      </li>
                      <li>
                        <Link to="/patient/search-doctor1">Özellikler</Link>
                      </li>
                      <li>
                        <Link to="#">Bizimle Çalışın</Link>
                      </li>
                      <li>
                        <Link to="#">Kariyer</Link>
                      </li>
                      <li>
                        <Link to="#">Gizlilik Politikası</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3">
                  <div className="footer-widget footer-menu">
                    <h6 className="footer-title">Uzmanlık Alanları</h6>
                    <ul>
                      <li>
                        <Link to="/patient/search-doctor1">Tüketici Hakları</Link>
                      </li>
                      <li>
                        <Link to="/patient/search-doctor1">Aile Hukuku</Link>
                      </li>
                      <li>
                        <Link to="/patient/search-doctor1">İş Hukuku</Link>
                      </li>
                      <li>
                        <Link to="/patient/search-doctor1">Vergi Hukuku</Link>
                      </li>
                      <li>
                        <Link to="/patient/search-doctor1">Sigorta Hukuku</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3">
                  <div className="footer-widget footer-menu">
                    <h6 className="footer-title">Üyelik</h6>
                    <ul>
                      <li>
                        <Link to="/pages/pricing">Ücretlendirme</Link>
                      </li>
                      <li>
                        <Link to="/pages/contact-us">Sorularınız</Link>
                      </li>
                      <li>
                        <Link to="/pages/contact-us">İletişim</Link>
                      </li>
                      <li>
                        <Link to="#">Destek</Link>
                      </li>
                      <li>
                        <Link to="#">Kullanım Şartları</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-7">
              <div className="footer-widget">
                <h6 className="footer-title">Haftalık Bültenimiz</h6>
                <p className="mb-2">
                  Üye Olun &amp; Yeniliklerden Haberdar Olun.
                </p>
                <div className="subscribe-input">
                  <form action="#">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="E-posta Adresinizi Girin"
                    />
                    <button
                      type="submit"
                      className="btn btn-md btn-primary-gradient d-inline-flex align-items-center"
                    >
                      <i className="isax isax-send-25 me-1" />
                      Gönder
                    </button>
                  </form>
                </div>
                <div className="social-icon">
                  <h6 className="mb-3">Takipte Kalın</h6>
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-x-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-linkedin" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-pinterest" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="footer-bottom-links">
                <ul className="nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/pages/terms">
                    © 2025 Avukatım Online. Tüm hakları saklıdır.
                    </Link>
                  </li>
                 
                </ul>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
