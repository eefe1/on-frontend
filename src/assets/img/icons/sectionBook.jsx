import React from "react";
import ImageWithBasePath from "./ImageWithBasePath";

const SectionBook = () => {
  return (
    <>
      {/* Work Section */}
      <section
        className="work-section d-flex align-items-center justify-content-center"
        style={{ marginBottom: "100px" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 work-details">
              <div className="section-header-one aos" data-aos="fade-up">
                <h5>Nasıl Çalışır?</h5>
                <h2 className="section-title">
                  Çözümünüze Ulaşmanın 4 Kolay Adımı
                </h2>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 aos" data-aos="fade-up">
                  <div className="work-info">
                    <div className="work-icon">
                      <span>
                        <ImageWithBasePath
                          src="/img/icons/work-01.svg"
                          alt="search-doctor-icon"
                        />
                      </span>
                    </div>
                    <div className="work-content">
                      <h5>Avukat Ara</h5>
                      <p>
                        Uzmanlık alanı, konum veya uygunluk kriterlerine göre
                        bir avukat arayın.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 aos" data-aos="fade-up">
                  <div className="work-info">
                    <div className="work-icon">
                      <span>
                        <ImageWithBasePath
                          src="/img/icons/work-04.svg"

                          alt="doctor-profile-icon"
                        />
                      </span>
                    </div>
                    <div className="work-content">
                      <h5>Avukat Profilini İncele</h5>
                      <p>
                        Platformumuzdaki detaylı avukat profillerini inceleyerek
                        bilinçli hukuki kararlar verin.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 aos" data-aos="fade-up">
                  <div className="work-info">
                    <div className="work-icon">
                      <span>
                        <ImageWithBasePath
                          src="/img/icons/work-03.svg"
                          alt="calendar-icon"
                        />
                      </span>
                    </div>
                    <div className="work-content">
                      <h5>Randevu Planla</h5>
                      <p>
                        Tercih ettiğiniz avukatı seçin, size uygun bir zaman
                        dilimi belirleyin ve randevunuzu onaylayın.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 aos" data-aos="fade-up">
                  <div className="work-info">
                    <div className="work-icon">
                      <span>
                        <ImageWithBasePath
                          src="/img/icons/work-02.svg"

                          alt="solution-icon"
                        />
                      </span>
                    </div>
                    <div className="work-content">
                      <h5>Çözümüne Ulaş</h5>
                      <p>
                        Hukuki sorunlarınızı avukatla görüşerek
                        kişiselleştirilmiş danışmanlık ve çözüm alın.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Work Section */}
    </>
  );
};

export default SectionBook;
