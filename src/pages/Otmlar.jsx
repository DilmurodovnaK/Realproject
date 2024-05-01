import React from 'react'
import UmumiyOtm from '../components/UmumiyOtm'
import { useTranslation } from 'react-i18next'

const Otmlar = () => {
  const {t} = useTranslation();
  return (
   <>
    <div className='bgotm top-0 absolute max-h-[700px] lg:max-h-[470px]'>  </div>
    <div  className=' bg-text  '>
      <h1 data-aos="fade-up" data-aos-duration="1000" className=" text-white lg:text-4xl lg:max-w-[480px] lg:mx-auto md:text-2xl  leading-tight drop-shadow-2xl  text-5xl  font-bold text-center mb-4">{t("magistr")}</h1>
<p data-aos="fade-up" data-aos-duration="1000" className="text-2xl  text-center text-white drop-shadow-2xl md:text-lg mb-8">{t("istagan")}</p>
   </div> 
   <UmumiyOtm/>
   </>
  )
}

export default Otmlar