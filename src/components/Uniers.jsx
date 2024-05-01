import React from "react";
import { useTranslation } from "react-i18next";
import { GrLinkNext } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const cardData = [
  {
    image: "https://picsum.photos/390/230/?random",
    title: "Card Title 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel arcu eu quam interdum fringilla.",
    buttonText: "Read More"
  },
  {
    image: "https://picsum.photos/390/230/?random",
    title: "Card Title 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel arcu eu quam interdum fringilla.",
    buttonText: "Read More"
  },
  {
    image: "https://picsum.photos/390/230/?random",
    title: "Card Title 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel arcu eu quam interdum fringilla.",
    buttonText: "Read More"
  },
  {
    image: "https://picsum.photos/390/230/?random",
    title: "Card Title 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel arcu eu quam interdum fringilla.",
    buttonText: "Read More"
  },
  {
    image: "https://picsum.photos/390/230/?random",
    title: "Card Title 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel arcu eu quam interdum fringilla.",
    buttonText: "Read More"
  },
  {
    image: "https://picsum.photos/390/230/?random",
    title: "Card Title 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel arcu eu quam interdum fringilla.",
    buttonText: "Read More"
  }
];

const Topuniver = ({ image, title, description, buttonText }) => {
  const { t } = useTranslation(); // Move useTranslation hook here

  return (
    <div className="bg-white max-w-[390px] text-center mx-auto rounded-lg overflow-hidden hover:shadow-2xl shadow-md duration-500">
      <img src={image} alt="Card Image" className="w-full max-w-[390px] max-h-[230px]" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
         <NavLink to={"topuniver"}>
         <button className='border-blue-400 text-blue-400   font-medium border transition-shadow  hover:shadow-blue-700  duration-300 cursor-pointer rounded-full py-2 px-4 text-normal hover:shadow-2xl    shadow-inherit  bg-transparent'>
          {t("batafsil")}
          <GrLinkNext className="inline-block h-5 w-6 ml-2" />
        </button> </NavLink>
      </div>
    </div>
  );
};

const CardGrid = () => {
  const { t } = useTranslation(); // Move useTranslation hook here

  return (
    <div className="mx-[150px] lg:mx-[20px] 2xl:mx-[20px]">
      <div data-aos="fade-up" data-aos-duration="1000" className="mt-80 lg:mt-52">
        <h1 className="text-4xl font-bold text-center lg:text-3xl mt-8 mb-4"><span className="text-[#1aa4ff]">{t("dunyodagi")}</span> {t("topuniver")} </h1>
      </div>

      <div data-aos="fade-up" data-aos-duration="1000" className="grid mt-14 2xl:grid-cols-2 lg:grid-cols-1 lg:gap-y-9 lg:mx-auto gap-x-10 max-w-[1204px] 2xl:max-w-[900px] gap-y-16 grid-cols-3">
        {cardData.map((card, index) => (
          <Topuniver key={index} {...card} />
        ))}
      </div>

      <div data-aos="fade-up" data-aos-duration="1000" className="max-w-[230px] mx-auto">
        <NavLink to={"/topuniver"}><button className="bg-white uppercase mx-auto text-blue-300 lg:text-base lg:font-normal items-center w-64 lg:w-60 mt-10 hover:shadow-2xl hover:shadow-sky-200 shadow-md border-blue-400 border-2 font-bold py-4 px-4 rounded-xl">
          {t("kopuniver")}
        </button></NavLink>
      </div>
    </div>
  );
};

export default CardGrid;
