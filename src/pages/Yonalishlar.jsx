import React from 'react'
import UmumiyYonalish from '../components/UmumiyYonalish'
import { useTranslation } from 'react-i18next'

const Yonalishlar = () => {
  const {t} = useTranslation();
  return (
    <>
     <div className='bg5 top-0 absolute  lg:max-h-[470px]'>  </div>
    <div data-aos="fade-up" data-aos-duration="1000" className=' bg-text  '>
      <h1  className=" text-white lg:text-4xl lg:max-w-[480px] lg:mx-auto md:text-2xl  leading-tight drop-shadow-2xl  text-5xl  font-bold text-center mb-4">{t("bizbilan")}</h1>
<p data-aos="fade-up" data-aos-duration="1000" className="text-2xl  text-center text-white drop-shadow-2xl md:text-lg mb-8">{t("aql")}</p>
   </div> 
    <UmumiyYonalish/>
    </>
  )
}

export default Yonalishlar