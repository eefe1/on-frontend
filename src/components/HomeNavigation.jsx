import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setDataTheme } from "../store/themeSettingSlice";
import { User, Lock, Bell, Settings } from "feather-icons-react";
import { Scale } from "lucide-react";
import NavbarButtons from "./common/buttons/navbarButtons";

const Header = () => {
  const [searchField, setSearchField] = useState(false);
  const dispatch = useDispatch();
  const dataTheme = useSelector((state) => state.themeSetting.dataTheme);
  const location = useLocation();
  const navigate = useNavigate();

  const handleDataThemeChange = (theme) => {
    dispatch(setDataTheme(theme));
  };
  const toggleSearch = () => {
    setSearchField(!searchField);
  };

  // Determine which buttons to show based on current route
  const showAuthButtons = () => {
    const currentPath = location.pathname;
    return currentPath === '/' ||
      currentPath === '/avukat_liste' ||
      currentPath.startsWith('/avukat_dashboard');
  };

  const showDashboardButtons = () => {
    const currentPath = location.pathname;
    return currentPath.startsWith('/avukat_dashboard') ||
      currentPath.startsWith('/dashboard');
  };

  const showNoButtons = () => {
    const currentPath = location.pathname;
    return currentPath === '/avukat_randevu_ayarla';
  };

  const [headerClass, setHeaderClass] = useState(
    "header header-custom header-fixed header-one home-head-one"
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        setHeaderClass("header header-custom header-fixed header-one home-head-one header-space pharmacy-header");
      } else {
        setHeaderClass("header header-custom header-fixed header-one home-head-one");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };
  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };
  return (
    <>
      <header className={headerClass}>
        <div className="container">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <Link id="mobile_btn" to="#" onClick={() => onHandleMobileMenu()}>
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </Link>
              <Link to="/" className="navbar-brand logo">
                <div className="d-flex align-items-center" style={{ gap: '0.5rem' }}>
                  <Scale
                    size={32}
                    style={{ color: '#0E82FD' }}
                  />
                  <h3 style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '300',
                    fontSize: '1.5rem',
                    color: '#0E82FD',
                    margin: '0'
                  }}>avukatım</h3>
                </div>
              </Link>


            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/" className="menu-logo">
                  <div className="d-flex align-items-center" style={{ gap: '0.5rem' }}>
                    <Scale
                      size={32}
                      style={{ color: '#0E82FD' }}
                    />
                    <h3 style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '300',
                      fontSize: '1.5rem',
                      color: '#0E82FD',
                      margin: '0'
                    }}>avukatım</h3>
                  </div>
                </Link>
                <Link id="menu_close" className="menu-close" to="#" onClick={() => onhandleCloseMenu()}>
                  <i className="fas fa-times" />
                </Link>
              </div>

            </div>
            <ul className="nav header-navbar-rht">
              {showAuthButtons() && !showDashboardButtons() && !showNoButtons() && (
                <>
                  <li className="register-btn">
                    <Link to="/kayit_ol" className="btn btn-dark reg-btn">
                      <User size={16} className="me-2" />
                      Kayıt Ol
                    </Link>
                  </li>
                  <li className="register-btn">
                    <Link to="/giris" className="btn btn-primary log-btn">
                      <Lock size={16} className="me-2" />
                      Giris Yap
                    </Link>
                  </li>
                </>
              )}

              {showDashboardButtons() && !showNoButtons() && (
                <>
                  <NavbarButtons />
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
