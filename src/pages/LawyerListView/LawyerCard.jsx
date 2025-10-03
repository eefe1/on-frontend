import { ImageWithFallBack } from "../ImageWithFallBack";

export function LawyerCard({ lawyer, onViewProfile }) {
  return (
    <div className="card bg-white border border-primary-subtle hover-shadow">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-auto">
            <ImageWithFallBack
              src={lawyer.photo}
              alt={lawyer.name}
              className="rounded-circle border border-primary-subtle"
              style={{ width: '80px', height: '80px', objectFit: 'cover' }}
            />
          </div>
          <div className="col">
            <h5 className="card-title text-primary mb-1">{lawyer.name}</h5>
            <p className="text-muted small mb-2">{lawyer.title}</p>
            <div className="d-flex align-items-center gap-3 text-muted small">
              <div className="d-flex align-items-center gap-1">
                <i className="fas fa-map-marker-alt"></i>
                <span>{lawyer.location}</span>
              </div>
              <div className="d-flex align-items-center gap-1">
                <i className="fas fa-star text-warning"></i>
                <span>{lawyer.rating}</span>
                <span>({lawyer.reviewCount} değerlendirme)</span>
              </div>
            </div>
          </div>
          <div className="col-auto text-end">
            <div className="text-primary fw-bold mb-1">{lawyer.hourlyRate}</div>
            <div className="text-muted small">{lawyer.experience} yıl deneyim</div>
          </div>
        </div>
        
        <div className="mt-3">
          <div className="d-flex flex-wrap gap-2 mb-3">
            {lawyer.specialties.map((specialty, index) => (
              <span
                key={index}
                className="badge bg-light text-primary border border-primary"
              >
                {specialty}
              </span>
            ))}
          </div>
          
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex gap-2">
              <button className="btn btn-outline-primary btn-sm">
                <i className="fas fa-phone me-1"></i>
                Ara
              </button>
              <button className="btn btn-outline-primary btn-sm">
                <i className="fas fa-envelope me-1"></i>
                Mesaj
              </button>
            </div>
            <button 
              onClick={() => onViewProfile && onViewProfile(lawyer.id)}
              className="btn btn-primary btn-sm"
            >
              Profili Görüntüle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}