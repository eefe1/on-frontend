import React from 'react'
import { Link } from 'react-router-dom';
import ImageWithBasePath from './ImageWithBasePath';
import { article_01 } from './imagepath';


const SectionArtical = () => {
    return (
        <div>
            <>
                {/* Article Section */}
                <section className="article-section">
                    <div className="container">
                        <div
                            className="section-header sec-header-one text-center aos"
                            data-aos="fade-up"
                        >
                            <span className="badge badge-primary">Gecmis Yazilar</span>
                            <h2>Güncel Blog Yazilarimizi Okuyun</h2>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="article-item aos" data-aos="fade-up">
                                    <div className="article-img">
                                        <Link to="/blog/blog-details">
                                            <ImageWithBasePath
                                                src={article_01}
                                                className="img-fluid"
                                                alt="img"
                                            />
                                        </Link>
                                        <div className="date-icon">
                                            <span>15</span>Mayıs
                                        </div>
                                    </div>
                                    <div className="article-info">
                                        <span className="badge badge-cyan mb-2">Sözleşme Hukuku</span>
                                        <h6 className="mb-2">
                                            <Link to="/blog/blog-details">
                                            Sözleşmelerde Dikkat Edilmesi Gereken 5 Temel Unsur
                                            </Link>
                                        </h6>
                                        <p>
                                        Bir sözleşmenin geçerli ve bağlayıcı olması için nelere dikkat etmeniz gerektiğini öğrenin....
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="article-item aos" data-aos="fade-up">
                                    <div className="article-img">
                                        <Link to="/blog/blog-details">
                                            <ImageWithBasePath
                                                src="/src/assets/img/blog/article-02.jpg"
                                                className="img-fluid"
                                                alt="img"
                                            />
                                        </Link>
                                        <div className="date-icon">
                                            <span>18</span>Mayis
                                        </div>
                                    </div>
                                    <div className="article-info">
                                        <span className="badge badge-cyan mb-2">Ceza Hukuku</span>
                                        <h6 className="mb-2">
                                            <Link to="/blog/blog-details">
                                            Tutuklama ve Gözaltı Arasındaki Farklar Nelerdir?
                                            </Link>
                                        </h6>
                                        <p>
                                        Ceza sürecinde en çok karıştırılan bu iki kavramı netleştiriyoruz.....
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="article-item aos" data-aos="fade-up">
                                    <div className="article-img">
                                        <Link to="/blog/blog-details">
                                            <ImageWithBasePath
                                                src="/src/assets/img/blog/article-03.jpg"
                                                className="img-fluid"
                                                alt="img"
                                            />
                                        </Link>
                                        <div className="date-icon">
                                            <span>21</span>Nisan
                                        </div>
                                    </div>
                                    <div className="article-info">
                                        <span className="badge badge-cyan mb-2">Aile Hukuku</span>
                                        <h6 className="mb-2">
                                            <Link to="/blog/blog-details">
                                            Boşanma Sürecinde Velayet Hakkı Nasıl Belirlenir?
                                            </Link>
                                        </h6>
                                        <p>Çocukların velayetinde hakim hangi kriterleri göz önünde bulundurur?....</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="article-item aos" data-aos="fade-up">
                                    <div className="article-img">
                                        <Link to="/blog/blog-details">
                                            <ImageWithBasePath
                                                src="/src/assets/img/blog/article-04.jpg"
                                                className="img-fluid"
                                                alt="img"
                                            />
                                        </Link>
                                        <div className="date-icon">
                                            <span>22</span>Haz
                                        </div>
                                    </div>
                                    <div className="article-info">
                                        <span className="badge badge-cyan mb-2">
                                            Icra &amp; Iflas Hukuku
                                        </span>
                                        <h6 className="mb-2">
                                            <Link to="/blog/blog-details">
                                            Borç Tahsilatında Avukatın Rolü Nedir?
                                            </Link>
                                        </h6>
                                        <p>
                                        Alacakların tahsilinde profesyonel hukuki destek nasıl fark yaratır?...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center load-item aos" data-aos="fade-up">
                            <Link to="blog-grid.html" className="btn btn-dark">
                                Tum Yazilari Gor
                                <i className="isax isax-arrow-right-3 ms-2" />
                            </Link>
                        </div>
                    </div>
                </section>
                {/* /Article Section */}
                {/* Info Section */}
                <section className="info-section">
                    <div className="container">
                        <div className="contact-info">
                            <div className="d-lg-flex align-items-center justify-content-between w-100 gap-4">
                                <div className="mb-4 mb-lg-0 aos" data-aos="fade-up">
                                    <h6 className="display-6 text-white">
                                        Online Avukat Platformu.
                                    </h6>
                                </div>
                                <div
                                    className="d-sm-flex align-items-center justify-content-lg-end gap-4 aos"
                                    data-aos="fade-up"
                                >
                                    <div className="con-info d-flex align-items-center mb-3 mb-sm-0">
                                        <span className="con-icon">
                                            <i className="isax isax-headphone" />
                                        </span>
                                        <div className="ms-2">
                                            <p className="text-white mb-1">Teknik Destek</p>
                                            <p className="text-white fw-medium mb-0">+90 312 000 00 00</p>
                                        </div>
                                    </div>
                                    <div className="con-info d-flex align-items-center">
                                        <span className="con-icon">
                                            <i className="isax isax-message-2" />
                                        </span>
                                        <div className="ms-2">
                                            <p className="text-white mb-1">Bize Ulasin</p>
                                            <p className="text-white fw-medium mb-0">
                                                info@avukatimonline.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* /Info Section */}
            </>

        </div>
    )
}

export default SectionArtical
