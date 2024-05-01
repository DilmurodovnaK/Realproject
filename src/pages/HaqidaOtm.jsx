import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoArrowBack } from "react-icons/io5";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import photo from '../img/koprik.jpg'
const libraries = ['places'];
const mapContainerStyle = {
  width: '390vw',
  height: '390vh',
};
const center = {
  lat: 7.2905715, // default latitude
  lng: 80.6337262, // default longitude
};
const HaqidaOtm = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'YOUR_API_KEY',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div className='mx-[100px] mb-16 2xl:mx-[20px]'>
    <div className='mt-10'>
       <NavLink to={"/otmlar"}>
    
         <button className='border-blue-400 text-blue-400 flex justify-between items-center  font-medium border transition-shadow  hover:shadow-blue-700  duration-300 cursor-pointer rounded-full py-2 px-4 text-normal hover:shadow-2xl    shadow-inherit  bg-transparent'>
         <IoArrowBack  className="inline-block h-5 w-6 ml-2" />
          Ortga qaytish
         
        </button> </NavLink>
    </div>
    <div className=' flex justify-between gap-x-20 items-center mt-16 2xl:flex-col 2xl:gap-y-10'>
      <img className='rounded-xl shadow-2xl shadow-slate-400'  src={photo}  width="860" height="380" alt="ph" />
      <iframe className='rounded-xl shadow-2xl shadow-slate-400' max-width="420" height="380"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
src="https://www.youtube.com/watch?v=6qOLAdeS49k">
</iframe>
    </div>
<div className='mt-10 bg-white rounded-xl max-w-[860px] p-4 flex justify-between items-start '>
  <div className='max-w-[390px]'>
      
  </div>
  <div>
  <h2 className='text-xl font-bold '>OTM haqida</h2>
  <p className='text-lg font-normal mb-1'>Toshkent axborot texnologiyalari universiteti</p>
  <p className='text-lg font-normal mb-1'>O`zbekistondagi 1-darajali universite</p>
  <p className='text-lg font-normal mb-1'>1956-yilda tashkil topgan va b Lorem ipsum dolor sit amet consectetur adipisicing elit. In provident doloribus suscipit culpa ex vel magni fuga maiores, architecto voluptatum!</p>
<p className='text-lg font-normal mb-1'>Dunyo bo`yicha 540 chi o`rinda turadigan universitet</p>
<p className='text-lg font-normal mb-1'>Davlat stipendiiyasi bor</p>
  <strong>Talablar</strong>
  <p className='text-lg font-normal mb-1'>IELTS 8.0, CEFR C1</p>
  <h3>Diplom</h3>
  <p className='text-lg font-normal mb-1'>Diplomi hamma joyda o`tadi, Ish bilan taminlaydi</p>
  <strong>Kontrakr narxlari</strong>
  <p className='text-lg font-normal mb-1'>Highest amount”: 2500, “Average amount”: 1200, “Minimum
amount”: 500, “currency”: “usd</p>
  <strong>Studentlar uchun...</strong>
  <p className='text-lg font-normal mb-1'>Davlat stipendiyasi mavjud</p>
  <p className='text-lg font-normal mb-1'>21 000 dan oshiq studentlar ta`lim oladi</p>

  <strong>Bog`lanish</strong>

  <p className=''>+998901234567</p>
  <p className='text-lg font-normal mb-1'>9989012355537</p>


  <h2>Location</h2>
  <p className='text-lg font-normal mb-1'>Continent”: “Asia”, “Country”: “Uzbekistan”, “City”:
“Tashkent”, “Location”: “Amir Temur ko’chasi 108-uy</p>
</div>
</div>



    </div>
  )
}

export default HaqidaOtm