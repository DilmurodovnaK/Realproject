import React from "react";

import { GrLinkNext } from "react-icons/gr";
const cardData = [
  {
    image: "https://picsum.photos/365/230/?random",
    title: "Card Title 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel arcu eu quam interdum fringilla.",
    buttonText: "Read More"
  },
  {
    image: "https://picsum.photos/365/230/?random",
    title: "Card Title 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel arcu eu quam interdum fringilla.",
    buttonText: "Read More"
  },
  {
    image: "https://picsum.photos/365/230/?random",
    title: "Card Title 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel arcu eu quam interdum fringilla.",
    buttonText: "Read More"
  },
  {
    image: "https://picsum.photos/365/230/?random",
    title: "Card Title 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel arcu eu quam interdum fringilla.",
    buttonText: "Read More"
  },
  {
    image: "https://picsum.photos/365/230/?random",
    title: "Card Title 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel arcu eu quam interdum fringilla.",
    buttonText: "Read More"
  },
  {
    image: "https://picsum.photos/365/230/?random",
    title: "Card Title 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel arcu eu quam interdum fringilla.",
    buttonText: "Read More"
  }
];

const Topuniver = ({ image, title, description, buttonText }) => (
    
  <div className="bg-white max-w-[390px] text-center mx-auto   rounded-lg overflow-hidden hover:shadow-2xl shadow-md duration-500">
    <img src={image} alt="Card Image" className="w-full max-w-[390px] max-h-[230px]" />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
     <button className="  hover:bg-blue-500 rounded-full h-14  bg-blue-300 text-white font-bold py-2 px-4  transition duration-100 ease-in">
     
      <GrLinkNext className="inline-block  h-5 w-6" />
    
    </button>
    </div>
  </div>
);



const Yangiliklarhome = () => (
  <div className="mx-[150px] 2xl:mx-[20px] " >
  <div data-aos="fade-up" data-aos-duration="1000" className=" mt-16">
  <h1 className="text-4xl font-bold text-center lg:text-3xl  mt-8 mb-4"><span className="text-[#1aa4ff]">Eng</span> so`nggi yangiliklar</h1>
  <p className="text-[#8B98B1] text-lg text-center font-normal mt-2">Talabalarimiz tanlagan mashhur chet elda o'qish dasturlari</p>
  </div>

   <div data-aos="fade-up" data-aos-duration="1000" className="grid mt-14 2xl:grid-cols-2 lg:grid-cols-1 lg:gap-y-9 lg:mx-auto gap-x-10 max-w-[1204px] 2xl:max-w-[900px]   gap-y-16 grid-cols-3 ">
    {cardData.map((card, index) => (
      <Topuniver key={index} {...card} />
    ))}
   

  </div>
  <div data-aos="fade-up" data-aos-duration="1000" className=" max-w-[230px] mx-auto ">
   <button className="bg-white uppercase mx-auto text-blue-300 lg:text-base lg:font-normal items-center w-64 lg:w-60  mt-10 hover:shadow-2xl  hover:shadow-sky-200 shadow-md  border-blue-400 border-2 font-bold py-4 px-4 rounded-xl">
      Ko`proq Yangiliklar`
    </button>
    </div>
  </div>
);

export default Yangiliklarhome;