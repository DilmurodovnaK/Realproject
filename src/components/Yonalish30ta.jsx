import React from 'react';
import logovaqtnchali from '../img/logovaqtnchali.webp'; // Importing the image
import { useTranslation } from 'react-i18next';

const Yonalish30ta = () => {
 const {t}= useTranslation();
  const yonalishlar = [
    { id: 1, logo: logovaqtnchali, nom: 'Informatika' },
    { id: 2, logo: logovaqtnchali, nom: 'Matematika' },
    { id: 3, logo: logovaqtnchali, nom: 'Informatika' },
    { id: 4, logo: logovaqtnchali, nom: 'Matematika' },
    { id: 5, logo: logovaqtnchali, nom: 'Informatika' },
    { id: 6, logo: logovaqtnchali, nom: 'Matematika' },
    { id: 7, logo: logovaqtnchali, nom: 'Informatika' },
    { id: 8, logo: logovaqtnchali, nom: 'Matematika' },
    { id: 9, logo: logovaqtnchali, nom: 'Informatika' },
    { id: 10, logo: logovaqtnchali, nom: 'Matematika' },
     { id: 11, logo: logovaqtnchali, nom: 'Informatika' },
    { id: 12, logo: logovaqtnchali, nom: 'Matematika' },
    { id: 13, logo: logovaqtnchali, nom: 'Informatika' },
    { id: 14, logo: logovaqtnchali, nom: 'Matematika' },
    { id: 15, logo: logovaqtnchali, nom: 'Informatika' },
    { id: 16, logo: logovaqtnchali, nom: 'Matematika' },
    { id: 17, logo: logovaqtnchali, nom: 'Informatika' },
    { id: 18, logo: logovaqtnchali, nom: 'Matematika' },
    { id: 19, logo: logovaqtnchali, nom: 'Informatika' },
    { id: 20, logo: logovaqtnchali, nom: 'Matematika' },
     { id: 21, logo: logovaqtnchali, nom: 'Informatika' },
    { id: 22, logo: logovaqtnchali, nom: 'Matematika' },
    { id: 23, logo: logovaqtnchali, nom: 'Informatika' },
    { id: 24, logo: logovaqtnchali, nom: 'Matematika' },
   
  
  ];

  return (
    <div data-aos="fade-up" data-aos-duration="1000" className='text-center'>
      <h1 className='font-bold text-4xl text-center 2xl:text-3xl'> <span className='text-[#1aa4ff]'>{t("yonalishlar")}</span> {t("royhati")}</h1>
      <p className='text-[#8B98B1] text-lg xl:text-base text-center font-normal mt-2'>{t("siz")}</p>
    <div className="grid grid-cols-4 gap-5 lg:grid-cols-2 md:grid-cols-1 max-w-[1200px] mx-auto 2xl:grid-cols-3 2xl:mx-5 mt-7">
      {yonalishlar.map((yonalish) => (
        <div data-aos="fade-up" data-aos-duration="1000" key={yonalish.id} className="flex duration-300 hover:shadow-xl bg-white shadow-md gap-x-5 px-6 py-5 items-center border-2  rounded-lg">
          <img src={yonalish.logo} alt="Logo" className="" />
          <p className="text-base text-black font-medium ">{yonalish.nom}</p>
        </div>
      ))}
    </div>
    
    </div>
  );
};

export default Yonalish30ta;
