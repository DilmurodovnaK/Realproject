import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/2logo.png'
import { useTranslation } from 'react-i18next';


const Footer = () => {
    const {t}= useTranslation();
  return (
    <div className="w-full max-h-[400px] md:max-h-[400px] bottom-0 bg-[#587FA7] bg-opacity-85  flex items-center justify-center">
        <div data-aos="fade-up" data-aos-duration="1000" className="w-[90%] h-[100%] my-8 flex md:flex-col md:items-center items-start justify-between">
            <img src={logo} alt="Not found" className="w-[180px]" />
            <div className=" gap-x-24 md:max-w-[500px]  h-full flex justify-around">
                <ul className="flex flex-col gap-2">
                    <li className="text-white font-bold text-2xl">{t("haqida")}</li>
                    <li className="opacity-[70%] text-white font-light text-lg mt-3">{t("otmlar")}</li>
                    <li className="opacity-[70%] text-white font-light text-lg">{t("yonalishlar")}</li>
                    <li className="opacity-[70%] text-white font-light text-lg">{t("topuniversitetlar")}</li>

                </ul>
               
                <ul className="flex flex-col gap-2">
                    <li className="text-white font-bold text-2xl">{t("ulanish")}</li>
                    <li className="opacity-[70%] text-white font-light text-lg mt-3">Facebook</li>
                    <li className="opacity-[70%] text-white font-light text-lg">Instagram</li>
                    <li className="opacity-[70%] text-white font-light text-lg">Twitter</li>
                    <li className="opacity-[70%] text-white font-light text-lg">Linkedin </li>
                </ul>
            </div>
            <div className="text-center mt-7">
                <h2 className="text-white font-bold 2xl:text-2xl  lg:hidden max-w-[440px] text-[35px]">{t("songgi")}</h2>

            </div>
        </div>
    </div>
  )
}

export default Footer
