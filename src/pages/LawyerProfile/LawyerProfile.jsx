import ImageWithBasePath from "../../components/ImageWithBasePath";
import { Link } from "react-router-dom";

// Mock profile data
const lawyerProfile = {
  id: 1,
  name: "Av. Mehmet Yılmaz",
  title: "Kurucu Ortak",
  firm: "Yılmaz Hukuk Bürosu",
  specialties: ["Ceza Hukuku", "Ticaret Hukuku", "İş Hukuku", "Şirketler Hukuku"],
  location: "İstanbul, Şişli",
  address: "Büyükdere Cad. No:123 Kat:5 Şişli/İstanbul",
  rating: 4.8,
  reviewCount: 127,
  experience: 15,
  photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  phone: "+90 212 555 0123",
  email: "mehmet@yilmazhukuk.com",
  hourlyRate: "₺800/saat",
  education: [
    "İstanbul Üniversitesi Hukuk Fakültesi (2005)",
    "Harvard Law School - LL.M (2008)"
  ],
  languages: ["Türkçe", "İngilizce", "Almanca"],
  barNumber: "İstanbul Barosu - 2005/12345",
  about: "15 yıllık deneyimi ile ceza hukuku, ticaret hukuku ve iş hukuku alanlarında uzmanlaşmış avukat. Ulusal ve uluslararası müvekkillere hizmet vermekte, özellikle kurumsal hukuk danışmanlığı ve ceza davalarında başarılı sonuçlar elde etmektedir.",
  achievements: [
    "2023 - Yılın En İyi Ceza Avukatı Ödülü",
    "2022 - İstanbul Barosu Başarı Belgesi",
    "2021 - Legal500 Türkiye Listesinde"
  ],
  cases: 450,
  successRate: 92,
  responseTime: "2 saat içinde"
};

const reviews = [
  {
    id: 1,
    name: "Ahmet K.",
    rating: 5,
    date: "2 hafta önce",
    comment: "Çok profesyonel ve başarılı bir avukat. Davamı kazandık ve süreç boyunca sürekli bilgilendirme yaptı."
  },
  {
    id: 2,
    name: "Elif M.",
    rating: 5,
    date: "1 ay önce",
    comment: "İş hukuku konusunda gerçekten uzman. Hızlı çözüm odaklı yaklaşımı çok faydalı oldu."
  },
  {
    id: 3,
    name: "Murat S.",
    rating: 4,
    date: "2 ay önce",
    comment: "Deneyimli ve güvenilir bir avukat. Ticaret hukuku davamda çok yardımcı oldu."
  }
];

export default function LawyerProfile() {
  return (
    <div className="min-vh-100" style={{background: 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%)'}}>
      <div className="container-fluid" style={{maxWidth: '80rem', margin: '0 auto', padding: '8rem 1rem 8rem 1rem'}}>
        <div className="row g-4">
          {/* Main Profile */}
          <div className="col-12 col-lg-8">
            {/* Profile Header */}
            <div className="card mb-4" style={{border: '1px solid #e3f2fd'}}>
              <div className="card-body p-4">
                <div className="row align-items-center">
                  <div className="col-12 col-md-auto text-center mb-3 mb-md-0">
                    <ImageWithBasePath
                      src={lawyerProfile.photo}
                      alt={lawyerProfile.name}
                      className="rounded-circle border border-primary-subtle"
                      style={{width: '120px', height: '120px', objectFit: 'cover'}}
                    />
                  </div>
                  
                  <div className="col-12 col-md">
                    <div className="text-center text-md-start">
                      <h1 className="mb-2" style={{color: '#1e3a8a', fontSize: '1.2rem', fontWeight: '300'}}>{lawyerProfile.name}</h1>
                      <p className="text-muted mb-3" style={{fontSize: '0.875rem'}}>{lawyerProfile.title}, {lawyerProfile.firm}</p>
                      
                      <div className="d-flex flex-wrap justify-content-center justify-content-md-start align-items-center gap-3 mb-3 text-muted" style={{fontSize: '0.875rem'}}>
                        <div className="d-flex align-items-center gap-1">
                          <i className="fas fa-map-marker-alt"></i>
                          <span>{lawyerProfile.location}</span>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <i className="fas fa-star text-warning"></i>
                          <span>{lawyerProfile.rating}</span>
                          <span>({lawyerProfile.reviewCount} değerlendirme)</span>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <i className="fas fa-clock"></i>
                          <span>{lawyerProfile.experience} yıl deneyim</span>
                        </div>
                      </div>

                      <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-2 mb-3">
                        {lawyerProfile.specialties.map((specialty, index) => (
                          <span
                            key={index}
                            className="badge"
                            style={{
                              backgroundColor: '#eff6ff',
                              color: '#1d4ed8',
                              border: '1px solid #e3f2fd'
                            }}
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>

                      <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-2">
                        <button className="btn btn-primary btn-sm" style={{borderRadius: '0.50rem'}}>
                          <i className="fas fa-comment me-2"></i>
                          Mesaj Gönder
                        </button>
                        <button className="btn btn-outline-primary btn-sm" style={{borderRadius: '0.50rem'}}>
                          <i className="fas fa-phone me-2"></i>
                          Ara
                        </button>
                        <Link to="/avukat_randevu_ayarla" className="btn btn-outline-primary btn-sm d-flex align-items-center" style={{borderRadius: '0.50rem'}}>
                          <i className="isax isax-calendar-1 me-2" style={{fontSize: '1rem'}}></i>
                          Randevu Al
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="card mb-4" style={{border: '1px solid #e3f2fd'}}>
              <div className="card-header bg-white border-0">
                <h5 className="card-title mb-0" style={{color: '#1e3a8a', fontSize: '1rem', fontWeight: '600'}}>Hakkında</h5>
              </div>
              <div className="card-body">
                <p className="text-muted" style={{lineHeight: '1.6', fontSize: '0.875rem'}}>{lawyerProfile.about}</p>
              </div>
            </div>

            {/* Education & Qualifications */}
            <div className="card mb-4" style={{border: '1px solid #e3f2fd'}}>
              <div className="card-header bg-white border-0">
                <h5 className="card-title mb-0 d-flex align-items-center" style={{color: '#1e3a8a', fontSize: '1rem', fontWeight: '600'}}>
                  <i className="fas fa-book me-2"></i>
                  <span>Eğitim ve Nitelikler</span>
                </h5>
              </div>
              <div className="card-body">
                <div className="mb-4">
                  <h6 className="mb-2" style={{color: '#1e40af', fontWeight: '600', fontSize: '0.875rem'}}>Eğitim</h6>
                  <ul className="list-unstyled">
                    {lawyerProfile.education.map((edu, index) => (
                      <li key={index} className="text-muted mb-1" style={{fontSize: '0.875rem'}}>{edu}</li>
                    ))}
                  </ul>
                </div>
                
                <hr className="my-3" />
                
                <div className="mb-4">
                  <h6 className="mb-2" style={{color: '#1e40af', fontWeight: '600', fontSize: '0.875rem'}}>Baro Kayıt</h6>
                  <p className="text-muted mb-0" style={{fontSize: '0.875rem'}}>{lawyerProfile.barNumber}</p>
                </div>
                
                <hr className="my-3" />
                
                <div>
                  <h6 className="mb-2" style={{color: '#1e40af', fontWeight: '600', fontSize: '0.875rem'}}>Diller</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {lawyerProfile.languages.map((lang, index) => (
                      <span
                        key={index}
                        className="badge"
                        style={{
                          backgroundColor: 'transparent',
                          color: '#1d4ed8',
                          border: '1px solid #e3f2fd'
                        }}
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="card mb-4" style={{border: '1px solid #e3f2fd'}}>
              <div className="card-header bg-white border-0">
                <h5 className="card-title mb-0 d-flex align-items-center" style={{color: '#1e3a8a', fontSize: '1rem', fontWeight: '600'}}>
                  <i className="fas fa-award me-2"></i>
                  <span>Başarılar ve Ödüller</span>
                </h5>
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  {lawyerProfile.achievements.map((achievement, index) => (
                    <li key={index} className="text-muted d-flex align-items-center mb-2" style={{fontSize: '0.875rem'}}>
                      <i className="fas fa-award text-warning me-2"></i>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Reviews */}
            <div className="card mb-4" style={{border: '1px solid #e3f2fd'}}>
              <div className="card-header bg-white border-0">
                <h5 className="card-title mb-0" style={{color: '#1e3a8a', fontSize: '1rem', fontWeight: '600'}}>Müvekkil Değerlendirmeleri</h5>
              </div>
              <div className="card-body">
                {reviews.map((review) => (
                  <div key={review.id} className="border-bottom pb-3 mb-3" style={{borderColor: '#e3f2fd !important'}}>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div className="d-flex align-items-center gap-2">
                        <span style={{color: '#1e3a8a', fontWeight: '500', fontSize: '0.875rem'}}>{review.name}</span>
                        <div className="d-flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <i key={i} className="fas fa-star text-warning"></i>
                          ))}
                        </div>
                      </div>
                      <span className="text-muted" style={{fontSize: '0.875rem'}}>{review.date}</span>
                    </div>
                    <p className="text-muted mb-0" style={{fontSize: '0.875rem'}}>{review.comment}</p>
                  </div>
                ))}
                
                <button className="btn btn-outline-primary w-100">
                  Tüm Değerlendirmeleri Gör
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-12 col-lg-4">
            {/* Contact Info */}
            <div className="card mb-4" style={{border: '1px solid #e3f2fd'}}>
              <div className="card-header bg-white border-0">
                <h5 className="card-title mb-0" style={{color: '#1e3a8a', fontSize: '1rem', fontWeight: '600'}}>İletişim Bilgileri</h5>
              </div>
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-phone text-primary me-3"></i>
                  <span className="text-muted" style={{fontSize: '0.875rem'}}>{lawyerProfile.phone}</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-envelope text-primary me-3"></i>
                  <span className="text-muted" style={{fontSize: '0.875rem'}}>{lawyerProfile.email}</span>
                </div>
                <div className="d-flex align-items-start">
                  <i className="fas fa-map-marker-alt text-primary me-3 mt-1"></i>
                  <span className="text-muted" style={{fontSize: '0.875rem'}}>{lawyerProfile.address}</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="card mb-4" style={{border: '1px solid #e3f2fd'}}>
              <div className="card-header bg-white border-0">
                <h5 className="card-title mb-0" style={{color: '#1e3a8a', fontSize: '1rem', fontWeight: '600'}}>İstatistikler</h5>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-users text-primary me-2"></i>
                    <span className="text-muted" style={{fontSize: '0.875rem'}}>Toplam Dava</span>
                  </div>
                  <span style={{color: '#1e3a8a', fontWeight: '600', fontSize: '0.875rem'}}>{lawyerProfile.cases}</span>
                </div>
                
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-shield-alt text-primary me-2"></i>
                    <span className="text-muted" style={{fontSize: '0.875rem'}}>Başarı Oranı</span>
                  </div>
                  <span style={{color: '#1e3a8a', fontWeight: '600', fontSize: '0.875rem'}}>%{lawyerProfile.successRate}</span>
                </div>
                
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-clock text-primary me-2"></i>
                    <span className="text-muted" style={{fontSize: '0.875rem'}}>Yanıt Süresi</span>
                  </div>
                  <span style={{color: '#1e3a8a', fontWeight: '600', fontSize: '0.875rem'}}>{lawyerProfile.responseTime}</span>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="card mb-4" style={{border: '1px solid #e3f2fd'}}>
              <div className="card-header bg-white border-0">
                <h5 className="card-title mb-0" style={{color: '#1e3a8a', fontSize: '1rem', fontWeight: '600'}}>Ücret Bilgisi</h5>
              </div>
              <div className="card-body text-center">
                <div className="mb-2" style={{color: '#1e3a8a', fontSize: '1.25rem', fontWeight: '600'}}>{lawyerProfile.hourlyRate}</div>
                <p className="text-muted mb-3" style={{fontSize: '0.875rem'}}>Danışmanlık ücreti</p>
                <button className="btn btn-primary w-100">
                  Ücretsiz Ön Görüşme
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}