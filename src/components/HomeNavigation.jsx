import React, { useEffect, useState } from "react";
import ImageWithBasePath from "./ImageWithBasePath";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setDataTheme } from "../store/themeSettingSlice";
import NavLinks from "./NavLinks";
import { User, Lock } from "feather-icons-react";

const Header = () => {
  const [searchField, setSearchField] = useState(false);
  const dispatch = useDispatch();
  const dataTheme = useSelector((state) => state.themeSetting.dataTheme);
  const handleDataThemeChange = (theme) => {
    dispatch(setDataTheme(theme));
  };
  const toggleSearch = () => {
    setSearchField(!searchField);
  };
  const navigate = useNavigate();

  const directionPath = () => {
    navigate('/patient/search-doctor1')
  }
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
                <ImageWithBasePath
                  src="img/avukatim_logo.svg"
                  className="img-fluid"
                  alt="Avukatim Logo"
                />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/" className="menu-logo">
                <ImageWithBasePath
                  src="img/avukatim_logo.svg"
                  className="img-fluid"
                  alt="Avukatim Logo"
                />
                </Link>
                <Link id="menu_close" className="menu-close" to="#"  onClick={() => onhandleCloseMenu()}>
                  <i className="fas fa-times" />
                </Link>
              </div>
            
            </div>
            <ul className="nav header-navbar-rht">
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
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
