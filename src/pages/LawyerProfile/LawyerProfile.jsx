import React, { useEffect, useState } from "react";
import ImageWithBasePath from "../../components/ImageWithBasePath";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LawyerProfile = (props) => {
  const [lawyerData, setLawyerData] = useState({
    name: '',
    surname: '',
    email: '',
    office_address: '',
    office_city: '',
    office_country: '',
    office_phone: '',
    baro_kod: '',
    experience_years: '',
    specialization: '',
    awards: '',
    is_active: true
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchLawyerProfile();
  }, []);

  const fetchLawyerProfile = async () => {
    try {
      const response = await authService.getCurrentUser();
      setLawyerData(response);
    } catch (err) {
      setError('Profil bilgileri yüklenirken bir hata oluştu');
      console.error('Error fetching lawyer profile:', err);
    } finally {
      setLoading(false);
    }
  };

  const CustomNextArrow = ({ className, onClick }) => (
    <div className="nav nav-container slide-1 doctor-profile">
      <button
        type="button"
        role="presentation"
        className="owl-next"
        onClick={onClick}
      >
        <i className="fas fa-chevron-right" />
      </button>
    </div>
  );

  const CustomPrevArrow = ({ className, onClick }) => (
    <div className="nav nav-container slide-1 doctor-profile">
      <button
        type="button"
        role="presentation"
        className="owl-prev"
        onClick={onClick}
      >
        <i className="fas fa-chevron-left" />
      </button>
    </div>
  );

  const insurence = {
    dots: false,
    infinite: false,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const availability = {
    dots: false,
    infinite: false,
    speed: 2000,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const awards = {
    dots: false,
    infinite: false,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="main-wrapper">
        <>
          {/* Breadcrumb */}
          <div className="breadcrumb-bar">
            <div className="container">
              <div className="row align-items-center inner-banner">
                <div className="col-md-12 col-12 text-center">
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/home">
                          <i className="isax isax-home-15" />
                        </Link>
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                        Avukat
                      </li>
                      <li className="breadcrumb-item active">Avukat Profili</li>
                    </ol>
                    <h2 className="breadcrumb-title">Avukat Profili</h2>
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

        <>
          {/* Page Content */}
          <div className="content">
            <div className="container">
              {/* Doctor Widget */}
              <div className="card doc-profile-card">
                <div className="card-body">
                  <div className="doctor-widget doctor-profile-two">
                    <div className="doc-info-left">
                      <div className="doctor-img">
                        <ImageWithBasePath
                          src="assets/img/doctors/doc-profile-02.jpg"
                          className="img-fluid"
                          alt="User Image"
                        />
                      </div>
                      <div className="doc-info-cont">

                        <h4 className="doc-name">
                          Ayhan Uzay
                          <ImageWithBasePath
                            src="assets/img/icons/badge-check.svg"
                            alt="Img"
                          />

                        </h4>
                        <p>Tüketici Hukuku, Icra Hukuku</p>
                        <p>Diller : Türkçe, İngilizce</p>
                      </div>
                    </div>
                    <div className="doc-info-right">
                      <ul className="doctors-activities">
                        <li>
                          <div className="hospital-info">
                            <span className="list-icon">
                              <ImageWithBasePath
                                src="assets/img/icons/watch-icon.svg"
                                alt="Img"
                              />
                            </span>
                            <p>Yuz yuze, Online </p>
                          </div>

                        </li>

                        <li>
                          <div className="hospital-info">
                            <span className="list-icon">
                              <ImageWithBasePath
                                src="assets/img/icons/building-icon.svg"
                                alt="Img"
                              />
                            </span>
                            <p>Ankara Hukuk Burosu</p>
                          </div>
                         
                        </li>
                        <li>
                          <p className="address-detail">
                            <span className="loc-icon">
                            </span>

                          </p>

                          <ul className="contact-doctors">
                            <li>
                              <a href="/avukat_mesajlar">
                                <span className="bg-violet">
                                  <i className="fa-solid fa-message" />
                                </span>
                                Mesaj
                              </a>
                            </li>
                            <li>
                              <a href="/pages/voice-call">
                                <span className="bg-violet">
                                  <i className="fa-solid fa-phone" />
                                </span>
                                Telefon
                              </a>
                            </li>
                            <li>
                              <a href="/pages/video-call">
                                <span className="bg-violet">
                                  <i className="fa-solid fa-video" />
                                </span>
                                Video
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="doc-profile-card-bottom">
                    <ul>
                      <li>
                        <span className="bg-blue">
                          <ImageWithBasePath
                            src="assets/img/icons/calendar3.svg"
                            alt="Img"
                          />
                        </span>
                        200+ Gorusme Yapildi.
                      </li>
                      <li>
                        <span className="bg-dark-blue">
                          <ImageWithBasePath
                            src="assets/img/icons/bullseye.svg"
                            alt="Img"
                          />
                        </span>
                        21 Yıl Tecrübe
                      </li>
                      <li>
                        <span className="bg-green">
                          <ImageWithBasePath
                            src="assets/img/icons/bookmark-star.svg"
                            alt="Img"
                          />
                        </span>
                        7+ Sertifika
                      </li>
                    </ul>
                    <div className="bottom-book-btn">
                      <div className="clinic-booking">
                        <a className="apt-btn" href="/avukat_randevu_ayarla">
                          Gorusme Ayarla
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Doctor Widget */}
              <div className="doctors-detailed-info">
                <ul className="information-title-list">
                  <li className="active">
                    <a href="#doc_bio">Hakkında</a>
                  </li>
                  <li>
                    <a href="#experience">Tecrübe</a>
                  </li>
                  <li>
                    <a href="#speciality">Uzmanlık</a>
                  </li>
                  <li>
                    <a href="#services">Hizmetler</a>
                  </li>
                  <li>
                    <a href="#clinic">Ofisler</a>
                  </li>

                  <li>
                    <a href="#awards">Sertifikalar</a>
                  </li>


                </ul>
                <div className="doc-information-main">
                  <div
                    className="doc-information-details bio-detail"
                    id="doc_bio"
                  >
                    <div className="detail-title">
                      <h4>Avukat Hakkında</h4>
                    </div>
                    <p>
                      Müvekkillerine en yüksek standartlarda hizmet sunmaya
                      kendini adamış, deneyimli ve motivasyonum yüksektir.
                      Hukukun çeşitli alanlarında güçlü bir deneyime sahip olup,
                      özellikle danışmanlık, dava yönetimi ve alternatif
                      uyuşmazlık çözüm yöntemlerinde uzmanlık sahibiyim.
                      Teknolojiyi etkin şekilde kullanarak hukuk süreçlerini
                      daha verimli hale getirmeyi hedefler. Her bir müvekkile
                      özel, özenli ve çözüm odaklı bir yaklaşım sunmayı ilke
                      edindim. Uzun yıllara dayanan tecrübem ve sürekli kendimi
                      geliştirme çabam sayesinde, müvekkillerimin ihtiyaçlarına
                      en uygun çözümleri sunabilmekteyim. Özellikle ticaret hukuku,
                      iş hukuku ve aile hukuku alanlarında uzmanlaşmış olup,
                      her davanın kendine özgü dinamiklerini anlayarak,
                      kişiye özel stratejiler geliştirmekteyim. Adalet sisteminin
                      karmaşıklığını anlayan ve müvekkillerine bu süreçte
                      rehberlik eden bir avukat olarak, hukuki süreçlerin
                      her aşamasında yanlarında olmaya özen gösteriyorum.
                    </p>
                    {/*  <a href="#" className="show-more d-flex align-items-center">
                      Daha Fazla
                      <i className="fa-solid fa-chevron-down ms-2" />
                    </a> */}
                  </div>
                  <div className="doc-information-details" id="experience">
                    <div className="detail-title">
                      <h4>Iş Tecrübeleri</h4>
                    </div>
                    <div className="experience-info">
                      <div className="experience-logo">
                        <span>

                        </span>
                      </div>
                      <div className="experience-content">
                        <h5>Ankara Hukuk Bürosu</h5>
                        <ul className="ent-list">
                          <li>ANK </li>
                          <li>Hukuk Bürosu</li>
                        </ul>
                        <ul className="date-list">
                          <li>Ocak 2020 - Haz 2022 </li>
                          <li>2 Yıl 2 ay</li>
                        </ul>
                        <p>
                          Hukukun çeşitli alanlarında kapsamlı deneyime sahip
                          olup, özellikle hukuki danışmanlık, dava takibi ve
                          acil müdahale gerektiren hukuki süreçlerde uzmanlık
                          sahibiyim.
                        </p>
                      </div>
                    </div>
                    <div className="experience-info">
                      <div className="experience-logo">
                        <span>

                        </span>
                      </div>
                      <div className="experience-content">
                        <h5>Edirne Hukuk Bürosu</h5>
                        <ul className="ent-list">
                          <li>Edirne </li>
                          <li>Hukuk Bürosu</li>
                        </ul>
                        <ul className="date-list">
                          <li>Ekim 2018 - Ekim 2020 </li>
                          <li>4 Yıl</li>
                        </ul>
                        <p>
                          Hukukun çeşitli alanlarında kapsamlı deneyime sahip
                          olup, özellikle hukuki danışmanlık, dava takibi ve
                          acil müdahale gerektiren hukuki süreçlerde uzmanlık
                          sahibiyim.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="doc-information-details" id="speciality">
                    <div className="detail-title">
                      <h4>Uzmanlıklar</h4>
                    </div>
                    <ul className="special-links">
                      <li>
                        <a href="#">Tüketici Hukuku</a>
                      </li>
                      <li>
                        <a href="#">Icra Hukuku</a>
                      </li>
                    </ul>
                  </div>
                  <div className="doc-information-details" id="services">
                    <div className="detail-title">
                      <h4>Hizmetler</h4>
                    </div>
                    <ul className="special-links">
                      <li>
                        <a href="">
                          Ön Görüşme <span>1000TL</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          Danışmanlık <span>2400TL</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="doc-information-details" id="clinic">
                    <div className="detail-title">
                      <h4>Ofis &amp; Lokasyon</h4>
                    </div>
                    <div className="clinic-loc">
                      <div className="row align-items-center">
                        <div className="col-lg-7">
                          <div className="clinic-info">
                            <div className="clinic-img">
                              <ImageWithBasePath
                                src="assets/img/clinic/clinic-11.jpg"
                                alt="Img"
                              />
                            </div>
                            <div className="detail-clinic">
                              <h5>Hukuk Ofisi - </h5>
                              <span></span>
                              <p>Çankaya Ankara 68000</p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center avail-time-slot">
                            <div className="availability-date">
                              <div className="book-date">
                                <h6>Pazartesi</h6>
                                <span>07:00 AM - 09:00 PM</span>
                              </div>
                            </div>
                            <div className="availability-date">
                              <div className="book-date">
                                <h6>Cuma</h6>
                                <span>07:00 AM - 09:00 PM</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <div className="contact-map d-flex">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.7301009561315!2d32.85411962422932!3d39.92080057224007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34e520d0e3adf%3A0xa61eac05156fbdb9!2sAnkara%2C%20Turkey!5e0!3m2!1sen!2sin!4v1670847126209!5m"
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="doc-information-details" id="awards">
                    <div className="detail-title slider-nav d-flex justify-content-between align-items-center">
                      <h4>Sertifikalar</h4>
                      <div className="nav nav-container slide-3" />
                    </div>
                    <Slider
                      {...awards}
                      className="insurence-logo-slider awards-slider owl-carousel"
                    >
                      <div className="award-card">
                        <div className="award-card-info">
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icons/bookmark-star.svg"
                              alt="Img"
                            />
                          </span>
                          <h5>Türkiye İnsan Hakları Vakfı (2019)</h5>
                          <p>
                            Göçmen ve mülteci hakları üzerine yürütülen saha
                            temelli çalışmalar ve hukuki destek faaliyetleri
                            kapsamında takdim edilmiştir.
                          </p>
                        </div>
                      </div>
                      <div className="award-card">
                        <div className="award-card-info">
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icons/bookmark-star.svg"
                              alt="Img"
                            />
                          </span>
                          <h5>
                            Yılın Genç Avukatı Ödülü – İstanbul Barosu (2021)
                          </h5>
                          <p>
                            35 yaş altı avukatlara verilen bu ödül, mesleki
                            etik, toplumsal duyarlılık kriterlerine göre
                            belirlenmiştir.
                          </p>
                        </div>
                      </div>
                      <div className="award-card">
                        <div className="award-card-info">
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icons/bookmark-star.svg"
                              alt="Img"
                            />
                          </span>
                          <h5>Türkiye Barolar Birliği (2020)</h5>
                          <p>
                            Dezavantajlı grupların adalete erişimi için
                            yürüttüğüm gönüllü hukuk danışmanlığı çalışmaları
                            nedeniyle verilmiştir.
                          </p>
                        </div>
                      </div>
                      <div className="award-card">
                        <div className="award-card-info">
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icons/bookmark-star.svg"
                              alt="Img"
                            />
                          </span>
                          <h5>Mor Çatı Kadın Sığınağı Vakfı (2022)</h5>
                          <p>
                            Kadına yönelik şiddet davalarında sağlanan hukuki
                            destek ve farkındalık çalışmaları nedeniyle
                            verilmiştir.
                          </p>
                        </div>
                      </div>
                      <div className="award-card">
                        <div className="award-card-info">
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icons/bookmark-star.svg"
                              alt="Img"
                            />
                          </span>
                          <h5>Hukuk ve Teknoloji Derneği (2023)</h5>
                          <p>
                            Dijital deliller, çevrimiçi adli süreçler ve siber
                            suçlar üzerine yürütülen yenilikçi çalışmalar
                            dolayısıyla verilmiştir.
                          </p>
                        </div>
                      </div>
                    </Slider>
                  </div>


                </div>
              </div>
            </div>
          </div>
          {/* /Page Content */}
        </>
      </div>
    </>
  );
};

export default LawyerProfile;
