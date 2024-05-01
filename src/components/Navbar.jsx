import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Navbar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import logo from '../img/1logo.png'
import Footer from "./Footer";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import uzb from './icons/uzb.png'
import rus from './icons/rus.png'
import usa from './icons/usa.png'
const langs= {
  uz:{
    langName: "",
  flag:  uzb},
  ru:{
    langName: "",
  flag: rus},
  en:{
    langName:"",
  flag: usa}
};
function Navbar() {
  const {t} = useTranslation();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar ">
        <div className="nav-container ">
          <NavLink  to="/" className="nav-logo">
             <span className='flex items-center '>
                 <img src={logo} alt="logo" width={100} height={300} />
                 <p className='text-white text-2xl font-normal'>WorldCamp</p>
                 </span>
              
          </NavLink>
<div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>

 <li className="nav-item">
              <NavLink
                
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                {t("asosiy")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                
                to="otmlar"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                {t("otmlar")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                
                to="/yonalishlar"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                {t("yonalishlar")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                
                to="/topuniver"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                {t("topuniversitetlar")}
              </NavLink>
            </li>
            
          </ul>
          </div>
        <div className='flex gap-x-2 2xl:hidden '>
 
  {Object.keys(langs).map((lang, index) => (
    <button key={index} onClick={() => i18n.changeLanguage(lang)} className="text-base"  >
      <img src={langs[lang].flag} alt={langs[lang].langName} className="flag-icon w-8" />
      {langs[lang].langName}
    </button>
  ))}


               
                 <NavLink to={'/login'}>
                 <button  className='lato-bold text-white ml-7 text-base'>{t("royhotish")}</button></NavLink>
               </div>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default Navbar;
