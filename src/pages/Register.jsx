import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Register = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    baro_kod: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);



  return (
    <>

      <>
        {/* Page Content */}
        <div className="content top-space">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                {/* Register Content */}
                <div className="account-content">
                  <div className="row align-items-center justify-content-center">
                   
                    <div className="col-md-12 col-lg-6 login-right">
                      <div className="login-header">
                        <h3>
                          Kayıt Ol
                        </h3>
                      </div>
                      {error && (
                        <div className="alert alert-danger" role="alert">
                          {error}
                        </div>
                      )}
                      {/* Register Form */}
                      <form>
                        <div className="form-group form-focus">
                          <input
                            type="text"
                            className="form-control floating"
                            name="name"
                            value={formData.name}
                            required
                          />
                          <label className="focus-label">Ad</label>
                        </div>
                        <div className="form-group form-focus">
                          <input
                            type="text"
                            className="form-control floating"
                            name="surname"
                            value={formData.surname}
                            required
                          />
                          <label className="focus-label">Soyad</label>
                        </div>
                        <div className="form-group form-focus">
                          <select
                            className="form-control floating"
                            name="baro_kod"
                            value={formData.baro_kod}
                            required
                          >
                            <option value="">Şehir Seçiniz</option>
                            <option value="ankara">Ankara</option>
                            <option value="istanbul">İstanbul</option>
                            <option value="izmir">İzmir</option>
                            <option value="bursa">Bursa</option>
                            <option value="antalya">Antalya</option>
                            <option value="adana">Adana</option>
                            <option value="konya">Konya</option>
                            <option value="gaziantep">Gaziantep</option>
                            <option value="mersin">Mersin</option>
                            <option value="diyarbakir">Diyarbakır</option>
                            <option value="samsun">Samsun</option>
                            <option value="denizli">Denizli</option>
                            <option value="eskisehir">Eskişehir</option>
                            <option value="urfa">Şanlıurfa</option>
                            <option value="malatya">Malatya</option>
                            <option value="erzurum">Erzurum</option>
                            <option value="batman">Batman</option>
                            <option value="elazig">Elazığ</option>
                            <option value="isparta">Isparta</option>
                          </select>
                          <label className="focus-label">Baro </label>
                        </div>
                        <div className="form-group form-focus">
                          <input
                            type="text"
                            className="form-control floating"
                            name="baro_kod"
                            value={formData.baro_kod}
                         
                            required
                          />
                          <label className="focus-label">Baro Sicil No</label>
                        </div>
                        <div className="form-group form-focus">
                          <input
                            type="email"
                            className="form-control floating"
                            name="email"
                            value={formData.email}
                            required
                          />
                          <label className="focus-label">Cep Numarası</label>
                        </div>
                        <div className="form-group form-focus">
                          <input
                            type="email"
                            className="form-control floating"
                            name="email"
                            value={formData.email}
                            required
                          />
                          <label className="focus-label">E-posta</label>
                        </div>
                          <div className="form-group form-focus">
                            <input
                              type="password"
                              className="form-control floating"
                              name="password"
                              value={formData.password}
                              required
                            />
                            <label className="focus-label">Şifre</label>
                          </div>
                          <div className="form-group form-focus">
                          <input
                            type="password"
                            className="form-control floating"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            required
                          />
                          <label className="focus-label">Şifre Yeniden Giriniz</label>
                        </div>
                        <div className="text-end">
                          <Link className="forgot-link" to="/giris">
                            Zaten bir hesabiniz var mi?
                          </Link>
                        </div>
                        <button
                          className="btn btn-primary w-100 btn-lg login-btn"
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? 'Kaydediliyor...' : 'Kayıt Ol'}
                        </button>
                   
                      </form>
                      {/* /Register Form */}
                    </div>
                  </div>
                </div>
                {/* /Register Content */}
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </>

    </>
  );
};

export default Register;
