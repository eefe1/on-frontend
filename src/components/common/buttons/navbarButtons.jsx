import { Bell, Settings, LogOut, User } from "lucide-react";
import { useState } from "react";

// Mock notification data
const mockNotifications = [
  {
    id: 1,
    title: "Yeni mesaj",
    description: "Av. Mehmet Yılmaz'dan yeni mesaj aldınız",
    time: "2 dakika önce",
    unread: true
  },
  {
    id: 2,
    title: "Randevu hatırlatması",
    description: "Yarın saat 14:00'te randevunuz var",
    time: "1 saat önce",
    unread: true
  },
  {
    id: 3,
    title: "Sistem güncellemesi",
    description: "Yeni özellikler eklendi",
    time: "3 saat önce",
    unread: false
  },
  {
    id: 4,
    title: "Profil güncellendi",
    description: "Profil bilgileriniz kaydedildi",
    time: "1 gün önce",
    unread: false
  }
];

export default function NavbarButtons() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const unreadCount = mockNotifications.filter(n => n.unread).length;

  const handleLogout = () => {
    alert("Çıkış yapıldı - Giriş sayfasına yönlendirileceksiniz");
  };

  const handleProfileSettings = () => {
    alert("Profil ayarları açılacak");
  };

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
    setShowSettings(false); // Close settings when opening notifications
  };

  const handleSettingsClick = () => {
    setShowSettings(!showSettings);
    setShowNotifications(false); // Close notifications when opening settings
  };

  return (
    <div className="d-flex align-items-center gap-2">
      {/* Notifications Button */}
      <div className="position-relative">
        <button 
          className="btn btn-outline-primary btn-sm" 
          style={{
            borderRadius: '50%', 
            width: '40px', 
            height: '40px', 
            padding: '0',
            borderColor: '#2563eb',
            color: '#2563eb'
          }}
          onClick={handleNotificationClick}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#2563eb';
            e.target.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#2563eb';
          }}
        >
          <Bell size={16} />
          {unreadCount > 0 && (
            <span 
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{fontSize: '0.6rem', minWidth: '16px', height: '16px'}}
            >
              {unreadCount}
            </span>
          )}
        </button>
        
        {/* Notifications Dropdown */}
        {showNotifications && (
          <div 
            className="position-absolute dropdown-menu show"
            style={{
              top: '100%',
              right: '0',
              minWidth: '320px',
              maxHeight: '400px',
              overflowY: 'auto',
              zIndex: 1000,
              border: '1px solid #e3f2fd',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div className="p-3 border-bottom">
              <h6 className="mb-1" style={{color: '#1e3a8a', fontSize: '1rem', fontWeight: '600'}}>Bildirimler</h6>
              <p className="text-muted mb-0" style={{fontSize: '0.875rem'}}>{unreadCount} okunmamış bildirim</p>
            </div>
            <div style={{maxHeight: '300px', overflowY: 'auto'}}>
              {mockNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-3 border-bottom ${notification.unread ? 'bg-light' : ''}`}
                  style={{cursor: 'pointer'}}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = notification.unread ? '#f8f9fa' : 'transparent'}
                >
                  <div className="d-flex align-items-start">
                    <div className="flex-grow-1">
                      <div className="d-flex align-items-center gap-2 mb-1">
                        <p className="mb-0 fw-medium" style={{fontSize: '0.875rem', color: '#1e3a8a'}}>
                          {notification.title}
                        </p>
                        {notification.unread && (
                          <div 
                            className="rounded-circle"
                            style={{width: '8px', height: '8px', backgroundColor: '#2563eb'}}
                          ></div>
                        )}
                      </div>
                      <p className="text-muted mb-1" style={{fontSize: '0.875rem'}}>
                        {notification.description}
                      </p>
                      <p className="text-muted mb-0" style={{fontSize: '0.75rem'}}>
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Settings Button */}
      <div className="position-relative">
        <button 
          className="btn btn-outline-primary btn-sm" 
          style={{
            borderRadius: '50%', 
            width: '40px', 
            height: '40px', 
            padding: '0',
            borderColor: '#2563eb',
            color: '#2563eb'
          }}
          onClick={handleSettingsClick}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#2563eb';
            e.target.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#2563eb';
          }}
        >
          <Settings size={16} />
        </button>
        
        {/* Settings Dropdown */}
        {showSettings && (
          <div 
            className="position-absolute dropdown-menu show"
            style={{
              top: '100%',
              right: '0',
              minWidth: '200px',
              zIndex: 1000,
              border: '1px solid #e3f2fd',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          >
            <button 
              className="dropdown-item d-flex align-items-center"
              onClick={handleProfileSettings}
              style={{fontSize: '0.875rem'}}
            >
              <User size={16} className="me-2" />
              Profil Ayarları
            </button>
            <hr className="my-1" />
            <button 
              className="dropdown-item d-flex align-items-center text-danger"
              onClick={handleLogout}
              style={{fontSize: '0.875rem'}}
            >
              <LogOut size={16} className="me-2" />
              Çıkış Yap
            </button>
          </div>
        )}
      </div>
    </div>
  );
}