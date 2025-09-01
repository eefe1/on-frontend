import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.classList.add("account-page");
    return () => document.body.classList.remove("account-page");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate a brief loading state
    setTimeout(() => {
      // Navigate directly to the lawyer dashboard
      navigate('/avukat_dashboard');
    }, 1000);
  };

  return (
    <>
      <div className="content top-space">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>Giriş Yap</h3>
                    </div>
                    {error && (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    )}
                    <form onSubmit={handleSubmit}>
                      <div className="form-group form-focus">
                        <input
                          type="email"
                          className="form-control floating"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
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
                          onChange={handleChange}
                          required
                        />
                        <label className="focus-label">Şifre</label>
                      </div>
                      <div className="text-end">
                        <Link className="forgot-link" to="/sifremi_unuttum">
                          Şifremi Unuttum
                        </Link>
                      </div>
                      <button
                        className="btn btn-primary w-100 btn-lg login-btn"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
                      </button>
                      <div className="text-center dont-have">
                        Hesabınız yok mu?{" "}
                        <Link to="/kayit_ol">Kayıt Ol</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
