import React from 'react'

import CardGrid from '../components/Uniers'
import Imkoniyatlar from '../components/Imkoniyatlar'
import Yonalish30ta from '../components/Yonalish30ta'
// import Yangiliklarhome from '../components/Yangiliklarhome'
import Ramka from '../components/Ramka'
import { useTranslation } from 'react-i18next'


const Home = () => {
  const {t} = useTranslation();
  return (
    <>
    
   <div className='bg1 top-0 absolute max-h-[700px] lg:max-h-[470px]'>  </div>
    <div data-aos="fade-up" data-aos-duration="1000" className=' bg-text  '>
      <h1  className=" text-white lg:text-4xl lg:max-w-[480px] lg:mx-auto md:text-2xl  leading-tight drop-shadow-2xl  text-5xl  font-bold text-center mb-4">{t("bizbilan")}</h1>
<p className="text-2xl  text-center text-white drop-shadow-2xl md:text-lg mb-8">{t("ozingiz")}</p>
   </div> 
  <CardGrid/>
  <Imkoniyatlar/>
  <Yonalish30ta/>
{/* <Yangiliklarhome/> */}
<Ramka/>
   

   
   
    </>
  )
}

export default Home