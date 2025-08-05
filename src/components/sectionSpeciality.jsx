import React from 'react';
import ImageWithBasePath from './ImageWithBasePath';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SectionSpeciality = () => {
    const CustomNextArrow = ({ className, onClick }) => (
        <div className="spciality-nav nav-bottom owl-nav">
            <button type="button" role="presentation" className="owl-next" onClick={onClick}>
                <i className="fa-solid fa-chevron-right" />
            </button>
        </div>
    );
    
    
    
    const CustomPrevArrow = ({ className, onClick }) => (
        <div className="spciality-nav nav-bottom owl-nav">
            <button type="button" role="presentation" className="owl-prev" onClick={onClick}>
                <i className="fa-solid fa-chevron-left" />
            </button>
        </div>
    );
    const SpecialitySlider = {
        slidesToShow: 8,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    infinite: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 8,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 0,
            settings: {
                vertical: false,
                slidesToShow: 1,
            },
        },
    ],
    };

    return (
        <>
              {/* Specialities Section */}
      <section className="specialities-section">
        <div className="shapes">
          <ImageWithBasePath
            src="assets/img/shapes/shape-3.png"
            alt="shape-image"
            className="img-fluid shape-3"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 aos" data-aos="fade-up">
              <div className="section-heading bg-area">
                <h2>Uzmanlık Alanları</h2>
                <p>Hizmet Alabileceğiniz Uzmanlık Alanları</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 aos" data-aos="fade-up">
              <div className="specialist-card d-flex">
                <div className="specialist-img">
                  <ImageWithBasePath
                    src="assets/img/category/1.svg"
                    alt="kidney-image"
                    className="img-fluid"
                  />
                </div>
                <div className="specialist-info">
                  <Link to="#">
                    <h4>Aile Hukuku</h4>
                  </Link>
                  <p>21 Avukat</p>
                </div>
                <div className="specialist-nav ms-auto">
                  <Link to="#">
                    <i className="isax isax-arrow-right-1" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 aos" data-aos="fade-up">
              <div className="specialist-card d-flex">
                <div className="specialist-img">
                  <ImageWithBasePath
                    src="assets/img/category/2.svg"
                    alt="bone-image"
                    className="img-fluid"
                  />
                </div>
                <div className="specialist-info">
                  <Link to="#">
                    <h4>Arabuluculuk</h4>
                  </Link>
                  <p>30 Avukat</p>
                </div>
                <div className="specialist-nav ms-auto">
                  <Link to="#">
                    <i className="isax isax-arrow-right-1" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 aos" data-aos="fade-up">
              <div className="specialist-card d-flex">
                <div className="specialist-img">
                  <ImageWithBasePath
                    src="assets/img/category/3.svg"
                    alt="heart-image"
                    className="img-fluid"
                  />
                </div>
                <div className="specialist-info">
                  <Link to="#">
                    <h4>Ceza Hukuku</h4>
                  </Link>
                  <p>15 Avukat</p>
                </div>
                <div className="specialist-nav ms-auto">
                  <Link to="#">
                    <i className="isax isax-arrow-right-1" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 aos" data-aos="fade-up">
              <div className="specialist-card d-flex">
                <div className="specialist-img">
                  <ImageWithBasePath
                    src="assets/img/category/4.svg"
                    alt="brain-image"
                    className="img-fluid"
                  />
                </div>
                <div className="specialist-info">
                  <Link to="#">
                    <h4>Gayrimenkul & Inşaat</h4>
                  </Link>
                  <p>35 Avukat</p>
                </div>
                <div className="specialist-nav ms-auto">
                  <Link to="#">
                    <i className="isax isax-arrow-right-1" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 aos" data-aos="fade-up">
              <div className="specialist-card d-flex">
                <div className="specialist-img">
                  <ImageWithBasePath
                    src="assets/img/category/5.svg"
                    alt="brain-image"
                    className="img-fluid"
                  />
                </div>
                <div className="specialist-info">
                  <Link to="#">
                    <h4>İs Hukuku</h4>
                  </Link>
                  <p>25 Avukat</p>
                </div>
                <div className="specialist-nav ms-auto">
                  <Link to="#">
                    <i className="isax isax-arrow-right-1" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 aos" data-aos="fade-up">
              <div className="specialist-card d-flex">
                <div className="specialist-img">
                  <ImageWithBasePath
                    src="assets/img/category/6.svg"
                    alt="bone-image"
                    className="img-fluid"
                  />
                </div>
                <div className="specialist-info">
                  <Link to="#">
                    <h4>Tüketici Hukuku</h4>
                  </Link>
                  <p>10 Avukat</p>
                </div>
                <div className="specialist-nav ms-auto">
                  <Link to="#">
                    <i className="isax isax-arrow-right-1" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 aos" data-aos="fade-up">
              <div className="specialist-card d-flex">
                <div className="specialist-img">
                  <ImageWithBasePath
                    src="assets/img/category/7.svg"
                    alt="heart-image"
                    className="img-fluid"
                  />
                </div>
                <div className="specialist-info">
                  <Link to="#">
                    <h4>Idare ve Vergi Hukuku</h4>
                  </Link>
                  <p>20 Avukat</p>
                </div>
                <div className="specialist-nav ms-auto">
                  <Link to="#">
                    <i className="isax isax-arrow-right-1" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 aos" data-aos="fade-up">
              <div className="specialist-card d-flex">
                <div className="specialist-img">
                  <ImageWithBasePath
                    src="assets/img/category/8.svg"
                    alt="kidney-image"
                    className="img-fluid"
                  />
                </div>
                <div className="specialist-info">
                  <Link to="#">
                    <h4>Sigorta Hukuku</h4>
                  </Link>
                  <p>12 Avukat</p>
                </div>
                <div className="specialist-nav ms-auto">
                  <Link to="#">
                    <i className="isax isax-arrow-right-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Specialities Section */}
        </>

    )
}

export default SectionSpeciality
