import React, { useState } from 'react'
import ImageWithBasePath from './ImageWithBasePath';

const HomeBanner = () => {
    const [date1, setDate1] = useState(null);


    
    return (

        <>
      {/* Home Banner */}
      <section className="banner-section">
        <div className="container">
        <div className="row justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
            <div className="col-lg-8 text-center">
              <div className="banner-content aos" data-aos="fade-up">
                <h1>
                  Online <span> Avukat</span> Platformu.
                </h1>
                <ImageWithBasePath
                  src="assets/img/icons/header-icon.svg"
                  className="header-icon"
                  alt="header-icon"
                />
              </div>
              <div className="search-box-one aos" data-aos="fade-up">
              <form action="/avukat/avukat-list-grid">
                    <div className="search-input search-line">
                    <i className="feather icon-search bficon" />
                    <div className=" mb-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Avukat Ara.."
                      />
                    </div>
                  </div>
                  <div className="search-input search-map-line">
                    <i className="feather icon-map-pin" />
                    <div className=" mb-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Şehir Seçiniz"
                      />
                    </div>
                  </div>
                  <div className="form-search-btn">
                    <button className="btn btn-primary" type="submit">
                      Aramaya Basla
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Home Banner */}
        </>


    )
}

export default HomeBanner
