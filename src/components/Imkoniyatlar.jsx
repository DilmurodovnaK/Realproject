import React from 'react'
import world from '../img/around-the-world.mp4'
import user from '../img/user.mp4'
import shield from '../img/shield.mp4'
import { useTranslation } from 'react-i18next'
const Imkoniyatlar = () => {
  const {t} = useTranslation();
  return (
    <>
   <div className='lg:mx-2'>
   <div data-aos="fade-up" data-aos-duration="1000" className="text-center mt-24 lg:mt-14 ">
      <h2 className="text-4xl font-bold mb-4 lg:text-3xl "><span className="text-[#1aa4ff]">{t("bizning")}</span> {t("xususiyatlarimiz")}</h2>
      <p className="text-[#8B98B1] text-lg font-normal mt-2">{t("noyob")}</p>
    </div>
    <div className='flex gap-x-10 mb-28 mt-10 lg:gap-y-7 max-w-[1100px] lg:grid-cols-1 lg:max-w-[340px] mx-auto 2xl:grid 2xl:max-w-[727px] 2xl:grid-cols-2'>
  <div data-aos="zoom-in-up" data-aos-duration="1000" className="text-center px-2 py-2 border-2 hover:translate-y-3 hover:shadow-2xl bg-white rounded-md shadow-2xl hover:shadow-slate-500 border-blue-400 max-w-[340px]">
      <video src={world} width={80} className='mx-auto' autoPlay loop muted />
      <h4 className="text-lg font-semibold  text-[#1aa4ff]">No_1</h4>
      <p className="font-semibold mb-4 mt-2 ">{t("n1")}</p>
    </div>
     <div data-aos="zoom-in-up" data-aos-duration="1000" className="text-center px-2 py-2 border-2 hover:translate-y-3 hover:shadow-2xl  bg-white  rounded-md shadow-2xl hover:shadow-slate-500 border-blue-400 max-w-[340px]">
      <video src={user} width={80} className='mx-auto' autoPlay loop muted />
      <h4 className="text-lg font-semibold  text-[#1aa4ff]">No_2</h4>
      <p className="font-semibold mb-4 mt-2 ">{t("n2")}</p>
    </div>
     <div data-aos="zoom-in-up" data-aos-duration="1000" className="text-center px-2 py-2 border-2 hover:translate-y-3 2xl:hidden lg:block hover:shadow-2xl  bg-white  rounded-md shadow-2xl hover:shadow-slate-500 border-blue-400 max-w-[340px]">
      <video src={shield} width={80} className='mx-auto' autoPlay loop muted />
      <h4 className="text-lg font-semibold  text-[#1aa4ff]">No_3</h4>
      <p className="font-semibold mb-4 mt-2">{t("n3")}</p>
    </div>
</div>
</div>
<div className=' bg3 flex items-center lg:flex-col lg:items-center lg:justify-around md:px-2 justify-between px-[150px] 2xl:px-[50px] mb-20'>
  <div data-aos="fade-up" data-aos-duration="800" className='bg-text2 '>
 <h2 className="text-3xl font-bold mb-4">{t("bzga")}</h2>
<p className="text-lg font-normal md:text-base">{t("talim")}</p>
</div>
<div data-aos="fade-up" data-aos-duration="800" className='bg-text2 flex justify-between items-center '>
  <span className='flex flex-col xl:px-5 items-center px-10'><span className='text-5xl xl:text-3xl mb-2'>30K+</span><span className='font-semibod text-lg'>{t("otmlar")}</span></span>
  <span className='flex xl:px-1 flex-col items-center px-10'><span className=' text-5xl xl:text-3xl mb-2'>25K+</span><span className='text-lg font-semibold '>{t("yonalishlar")}</span></span>

</div>

</div>



  </>
  )
}

export default Imkoniyatlar