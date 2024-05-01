import React from 'react'
import Topunivers from '../components/Topunivers'
import { useTranslation } from 'react-i18next'

const Universitetlar = () => {
  const {t} = useTranslation();
  return (
   <>
   
  <div className='univer top-0 absolute max-h-[640px] lg:max-h-[350px]'>  </div>
    <div data-aos="fade-up" data-aos-duration="1000" className=' bg-text  '>
      <h1 className=" text-white lg:text-4xl lg:max-w-[480px] lg:mx-auto md:text-2xl  leading-tight drop-shadow-2xl  text-5xl  font-bold text-center mb-4">{t("bizbilan")}</h1>
<p className="text-2xl  text-center text-white drop-shadow-2xl md:text-lg mb-8">{t("vauu")}</p>
   </div> 
   <Topunivers/>
   </>
  )
}

export default Universitetlar