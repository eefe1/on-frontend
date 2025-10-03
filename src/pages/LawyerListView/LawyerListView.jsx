import { useState } from "react";
import { LawyerCard } from "./LawyerCard";

// Mock data for Turkish lawyers
const mockLawyers = [
  {
    id: 1,
    name: "Av. Mehmet Yılmaz",
    title: "Kurucu Ortak, Yılmaz Hukuk Bürosu",
    specialties: ["Ceza Hukuku", "Ticaret Hukuku", "İş Hukuku"],
    location: "İstanbul, Şişli",
    rating: 4.8,
    reviewCount: 127,
    experience: 15,
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    phone: "+90 212 555 0123",
    email: "mehmet@yilmazhukuk.com",
    hourlyRate: "₺800/saat",
    is_active: true,
  },
  {
    id: 2,
    name: "Av. Ayşe Demir",
    title: "Aile Hukuku Uzmanı",
    specialties: ["Aile Hukuku", "Boşanma", "Velayet"],
    location: "Ankara, Çankaya",
    rating: 4.9,
    reviewCount: 89,
    experience: 12,
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b586?w=400&h=400&fit=crop&crop=face",
    phone: "+90 312 555 0456",
    email: "ayse@demirhukuk.com",
    hourlyRate: "₺600/saat",
    is_active: false,
  },
  {
    id: 3,
    name: "Av. Can Özkan",
    title: "Emlak Hukuku Uzmanı",
    specialties: ["Emlak Hukuku", "İnşaat Hukuku", "Gayrimenkul"],
    location: "İzmir, Konak",
    rating: 4.7,
    reviewCount: 156,
    experience: 18,
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    phone: "+90 232 555 0789",
    email: "can@ozkanhukuk.com",
    hourlyRate: "₺750/saat",
    is_active: true,
  },
  {
    id: 4,
    name: "Av. Zeynep Kaya",
    title: "Kurumsal Hukuk Danışmanı",
    specialties: ["Kurumsal Hukuk", "Vergi Hukuku", "Şirketler Hukuku"],
    location: "İstanbul, Levent",
    rating: 4.6,
    reviewCount: 203,
    experience: 10,
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    phone: "+90 212 555 0321",
    email: "zeynep@kayahukuk.com",
    hourlyRate: "₺900/saat",
    is_active: true,
  }
];

const specialties = [
  "Ceza Hukuku", "Aile Hukuku", "Ticaret Hukuku", "İş Hukuku",
  "Emlak Hukuku", "Kurumsal Hukuk", "Vergi Hukuku", "İnşaat Hukuku"
];

const cities = ["İstanbul", "Ankara", "İzmir", "Bursa", "Antalya", "Adana"];

export function LawyerListView() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [selectedCity, setSelectedCity] = useState("all");
  const [filteredLawyers, setFilteredLawyers] = useState(mockLawyers);

  const handleSearch = () => {
    let filtered = mockLawyers;

    if (searchTerm) {
      filtered = filtered.filter(lawyer =>
        lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lawyer.specialties.some(specialty =>
          specialty.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    if (selectedSpecialty && selectedSpecialty !== "all") {
      filtered = filtered.filter(lawyer =>
        lawyer.specialties.includes(selectedSpecialty)
      );
    }

    if (selectedCity && selectedCity !== "all") {
      filtered = filtered.filter(lawyer =>
        lawyer.location.includes(selectedCity)
      );
    }

    setFilteredLawyers(filtered);
  };

  return (
    <div className="min-vh-100" style={{background: 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%)'}}>
      <div className="container-fluid" style={{maxWidth: '80rem', margin: '0 auto', padding: '8rem 1rem 8rem 1rem'}}>
        {/* Search Header */}
        <div className="text-center mb-5">
          <h2 className="text-primary mb-3" style={{fontSize: '1.5rem', fontWeight: '600'}}>Size En Uygun Avukatı Bulun</h2>
          <p className="text-muted mx-auto" style={{maxWidth: '42rem', fontSize: '0.875rem'}}>
            Uzman avukatlar arasından size en uygun olanı seçin. Filtreleri kullanarak 
            aradığınız uzmanlık alanı ve konuma göre arama yapabilirsiniz.
          </p>
        </div>

        {/* Search Filters */}
        <div className="card mb-5" style={{border: '1px solid #e3f2fd'}}>
          <div className="card-header bg-white border-0">
            <h5 className="card-title mb-0 d-flex align-items-center" style={{color: '#1e3a8a', fontSize: '1rem'}}>
              <i className="fas fa-filter me-2" style={{fontSize: '1rem'}}></i>
              <span>Arama Filtreleri</span>
            </h5>
          </div>
          <div className="card-body">
            <div className="row g-3">
              <div className="col-12 col-md-3">
                <div className="position-relative">
                  <i className="fas fa-search position-absolute top-50 start-0 translate-middle-y ms-3" style={{color: '#9ca3af', fontSize: '0.875rem'}}></i>
                  <input
                    type="text"
                    className="form-control ps-5"
                    placeholder="Avukat adı veya uzmanlık ara..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{border: '1px solid #e3f2fd', fontSize: '0.875rem'}}
                  />
                </div>
              </div>
              
              <div className="col-12 col-md-3">
                <select
                  className="form-select"
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  style={{border: '1px solid #e3f2fd', fontSize: '0.875rem'}}
                >
                  <option value="all">Uzmanlık Alanı</option>
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="col-12 col-md-3">
                <select
                  className="form-select"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  style={{border: '1px solid #e3f2fd', fontSize: '0.875rem'}}
                >
                  <option value="all">Şehir</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="col-12 col-md-3">
                <button
                  onClick={handleSearch}
                  className="btn w-100"
                  style={{backgroundColor: '#2563eb', color: '#ffffff', border: 'none', fontSize: '0.875rem'}}
                >
                  <i className="fas fa-search me-2"></i>
                  Ara
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Specialties */}
        <div className="mb-5">
          <h3 className="mb-4" style={{color: '#1e3a8a', fontSize: '1.125rem', fontWeight: '600'}}>Popüler Uzmanlık Alanları</h3>
          <div className="d-flex flex-wrap gap-2">
            {specialties.slice(0, 6).map((specialty) => (
              <span
                key={specialty}
                className="badge me-2 mb-2"
                style={{ 
                  cursor: 'pointer',
                  backgroundColor: 'transparent',
                  color: '#1d4ed8',
                  border: '1px solid #e3f2fd',
                  fontWeight: '500',
                  fontSize: '0.875rem',
                  padding: '0.5rem 0.75rem'
                }}
                onClick={() => {
                  setSelectedSpecialty(specialty);
                  handleSearch();
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#eff6ff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <div className="d-flex align-items-center justify-content-between">
            <h3 style={{color: '#1e3a8a', fontSize: '1.125rem', fontWeight: '600', margin: '0'}}>
              {filteredLawyers.length} Avukat Bulundu
            </h3>
            <div className="d-flex align-items-center" style={{fontSize: '0.875rem', color: '#4b5563'}}>
              <i className="fas fa-map-marker-alt me-2" style={{fontSize: '0.875rem'}}></i>
              <span>Konuma göre sıralandı</span>
            </div>
          </div>
        </div>

        {/* Lawyer Cards */}
        <div className="row g-4">
          {filteredLawyers.map((lawyer) => (
            <div key={lawyer.id} className="col-12 col-lg-6">
              <LawyerCard lawyer={lawyer} />
            </div>
          ))}
        </div>

        {filteredLawyers.length === 0 && (
          <div className="text-center" style={{padding: '3rem 0'}}>
            <div className="mb-4" style={{color: '#9ca3af'}}>
              <i className="fas fa-search" style={{fontSize: '4rem'}}></i>
            </div>
            <h3 className="mb-2" style={{color: '#4b5563', fontSize: '1.125rem', fontWeight: '600'}}>Sonuç Bulunamadı</h3>
            <p style={{color: '#6b7280', fontSize: '0.875rem'}}>
              Arama kriterlerinizi değiştirerek tekrar deneyin.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LawyerListView;