import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom';

const Ramka = () => {
  const {t} = useTranslation();
  return (
    <div className='bg4 my-20 flex px-[150px] lg:flex-col lg:items-center lg:pt-5 items-start pt-14 3xl:px-10'>
<div data-aos="fade-up" data-aos-duration="1000" ><h3 className='text-lg font-semibold text-white max-w-[700px] lg:text-base md:text-sm lg:font-medium'>{t("bigfuture")}</h3></div>
    <NavLink to={"/otmlar"} ><button data-aos="fade-up" data-aos-duration="1000" className="bg-white h-14 uppercase ml-[400px] lg:py-0 lg:ml-0 lg:text-base 3xl:ml-20 text-blue-300 items-center w-64  mt-10 hover:shadow-2xl  hover:shadow-sky-200 shadow-md  border-blue-400 border-2 font-bold py-4 px-4 rounded-xl">
      {t("otmlar")}   {t("royhati")} 
    </button>
    </NavLink></div>
  )
}

export default Ramka