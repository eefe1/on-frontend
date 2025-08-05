import React from 'react'

const SectionReason = () => {
    return (
        <>
            {/* Reasons Section */}
            <section className="reason-section">
                <div className="container">
                    <div
                        className="section-header sec-header-one text-center aos"
                        data-aos="fade-up"
                    >
                        <span className="badge badge-primary">Neden Biz?</span>
                        <h2>Bizi Tercih Etmeniz İçin Güçlü Nedenler</h2>
                    </div>
                    <div className="row row-gap-4 justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="reason-item aos" data-aos="fade-up">
                                <h6 className="mb-2">
                                    <i className="isax isax-tag-user5 text-orange me-2" />
                                    Takip ve Süreklilik Hizmeti
                                </h6>
                                <p className="fs-14 mb-0">
                                Görüşme sonrası takiple süreci yalnız bırakmıyor, düzenli iletişimle hukuki sürecin sürdürülebilirliğini sağlıyoruz.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="reason-item aos" data-aos="fade-up">
                                <h6 className="mb-2">
                                    <i className="isax isax-voice-cricle text-purple me-2" />
                                    Danışan Odaklı Yaklaşım
                                </h6>
                                <p className="fs-14 mb-0">
                                İhtiyaç ve beklentilerinizi önceliklendiriyor, hizmetimizi size özel şekilde uyarlıyor, alanında uzman avukatlarla sizleri buluşturuyoruz.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="reason-item aos" data-aos="fade-up">
                                <h6 className="mb-2">
                                    <i className="isax isax-wallet-add-15 text-cyan me-2" />
                                    Kolay ve Esnek Erişim
                                </h6>
                                <p className="fs-14 mb-0">
                                Online sistemimiz  üzerinden randevunuzu kolayca oluşturabilir, esnek zaman seçenekleriyle size uygun saatlerde hizmet alabilirsiniz.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Reasons Section */}
        </>

    )
}

export default SectionReason
