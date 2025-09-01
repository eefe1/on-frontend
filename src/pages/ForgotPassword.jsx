import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = (props) => {
  const config = "/react/template";

  useEffect(() => {
    document.body.classList.add("account-page");

    return () => document.body.classList.remove("account-page");
  }, []);

  return (
    <>
      <>
        {/* Page Content */}
        <div className="content top-space">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                {/* Account Content */}
                <div className="account-content">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-12 col-lg-6 login-right">
                      <div className="login-header">
                        <h3>Parolanızı mı unuttunuz?</h3>
                        <p className="small text-muted">
                        Şifreni sıfırlama linki gönderebilmemiz için lütfen aşağıya email adresini yaz.
                        </p>
                      </div>
                      {/* Forgot Password Form */}
                      <form action={`${config}/home`}>
                        <div className="form-group form-focus">
                          <input
                            type="email"
                            className="form-control floating"
                          />
                          <label className="focus-label">E-posta adresinizi giriniz.</label>
                        </div>
                        <div className="text-end">
                          <Link className="forgot-link" to="/giris">
                          Parolanızı Hatirliyor musunuz?
                          </Link>
                        </div>
                        <Link to="/giris"
                          className="btn btn-primary w-100 btn-lg login-btn"
                          
                        >
                          Parolanızı Sifirlayin.
                        </Link>
                      </form>
                      {/* /Forgot Password Form */}
                    </div>
                  </div>
                </div>
                {/* /Account Content */}
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </>
    </>
  );
};

export default ForgotPassword;
