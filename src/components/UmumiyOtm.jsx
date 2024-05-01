import React, { useState } from 'react';
import logoImage from '../img/logovaqtnchali.webp'; // Import the image
import { Card, CardHeader, CardBody, CardFooter, Button, IconButton, Heading, Flex, Avatar, Box, Image, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next';
import { NavLink, Outlet } from 'react-router-dom';
const people = [
  {
    name: 'John Doe',
    countryName: 'United States',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod...',
    contact: '+1 123 456 7890',
    contract: '20 000 $'
  },
  {
    name: 'Jane Smith',
    countryName: 'Canada',
    about: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod....',
    contact: '+1 987 654 3210',
    contract: '20 000 $'
  },
  {
    name: 'Alice Johnson',
    countryName: 'United Kingdom',
    about: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod......',
    contact: '+44 1234 567890',
    contract: '20 000 $'
  },
  {   name: 'John Doe',
    countryName: 'United States',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod...',
    contact: '+1 123 456 7890',
    contract: '20 000 $'
  },
  {
    name: 'Jane Smith',
    countryName: 'Canada',
    about: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod....',
    contact: '+1 987 654 3210',
    contract: '20 000 $'
  },
  {
    name: 'Alice Johnson',
    countryName: 'United Kingdom',
    about: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod......',
    contact: '+44 1234 567890',
    contract: '20 000 $'
  },
  {   name: 'John Doe',
    countryName: 'United States',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod...',
    contact: '+1 123 456 7890',
    contract: '20 000 $'
  },
  {
    name: 'Jane Smith',
    countryName: 'Canada',
    about: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod....',
    contact: '+1 987 654 3210',
    contract: '20 000 $'
  },
  {
    name: 'Alice Johnson',
    countryName: 'United Kingdom',
    about: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod......',
    contact: '+44 1234 567890',
    contract: '20 000 $'
  }
];

const UmumiyOtm = () => {

  const [isOpenFirst, setIsOpenFirst] = useState(false);
  const [selectedItemFirst, setSelectedItemFirst] = useState('MDH');

  const [isOpenSecond, setIsOpenSecond] = useState(false);
  const [selectedItemSecond, setSelectedItemSecond] = useState('Yevropa');

  const toggleDropdownFirst = () => {
    setIsOpenFirst(!isOpenFirst);
  };

  const handleItemClickFirst = (item) => {
    setSelectedItemFirst(item);
    setIsOpenFirst(false);
  };

  const toggleDropdownSecond = () => {
    setIsOpenSecond(!isOpenSecond);
  };

  const handleItemClickSecond = (item) => {
    setSelectedItemSecond(item);
    setIsOpenSecond(false);
  };
  const {t} = useTranslation();
  return (
    <div className='mt-72 mb-20 mx-[100px] flex  items-start 2xl:flex-col gap-x-24 xl:mx-[20px] xl:mt-48 2xl:items-center'>
      {/* <div className='max-w-[350px] relative z-10'>
        <Card maxW='md' maxWidth={'340px'}>
  <CardHeader>
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name='Segun Adebayo' src={logoImage} />

        <Box>
          <Heading size='sm'>Segun Adebayo</Heading>
          <Text>Creator, Chakra UI</Text>
        </Box>
      </Flex>
    
    </Flex>
  </CardHeader>
  <CardBody>
    <Text>
      With Chakra UI, I wanted to sync the speed of development with the speed
      of design. I wanted the developer to be just as excited as the designer to
      create a screen.
    </Text>
  </CardBody>
  <Image
    objectFit='cover'
    src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    alt='Chakra UI'
  />

  <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        minW: '136px',
      },
    }}
  >
  
  </CardFooter>
</Card>
      </div> */}
      <div className=''>  
<div className='w-72 rounded-xl bg-white'>
<div className='py-4 '>
<div>
<form action="">
  <div className='pb-3 sm:px-5 flex items-center border-b border-border-color'>
<h2 className='text-2xl font-medium mr-auto'>Filter</h2>
<button type='button' className='font-medium border transition-shadow duration-300  bg-transparent text-[#F42C2C] border-[#F42C2C] hover:shadow-[8px_8px_20px_10px_rgba(244,44,44,0.2)] active:shadow-[4px_4px_10px_5px_rgba(244,44,44,0.4)] cursor-pointer rounded-full py-2 px-4 text-xs'><span className='flex items-center'><span className='block grow'>Tozalash</span></span></button>
</div>
<div className='custom-select'>    <select
          name="MDH"
          id="mnjn"
          className="block w-full px-4 py-2 mt-2 text-base border border-gray-300 focus:outline-none focus:border-indigo-500 rounded-md"
        >
          <option value="" className="text-gray-800 my-3">Rossiya</option>
          <option value="" className="text-gray-800">Gruziya</option>
          <option value="" className="text-gray-800">Ozarbajon</option>
          <option value="" className="text-gray-800">Belarus</option>
          <option value="" className="text-gray-800">Qozog`iston</option>
          <option value="" className="text-gray-800">Qirg`iziston</option>
          <option value="" className="text-gray-800">Ukraina</option>
          <option value="" className="text-gray-800">Tojikiston</option>
        </select></div>
</form>
<div></div>
</div>
</div>
</div>



      </div>
      <div className=''>
      {people.map((person, index) => (
        <article data-aos="fade-up" data-aos-duration="1000" key={index} className="rounded-xl max-w-[900px]  mb-7 bg-white p-6  shadow-lg hover:duration-300 hover:shadow-2xl sm:p-6 lg:p-8 ">
          <div  className="flex items-start  sm:gap-8">
           

            <div>
              <div  className='flex items-center gap-x-5'>
                <img src={logoImage} alt="" />
                <h3 className="sm:text-[20px] text-lg font-semibold truncate ">
                  <a href="#" className="hover:underline">{person.name}</a>
                </h3>
              </div>
              <p className="sm:text-sm text-normal mt-1 text-[#8d8f91] font-medium">
                {person.about}
              </p>

              <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                <div className="flex items-center gap-1 text-gray-500">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>

                  <p className="text-sm font-medium mt-1m">48:32 minutes</p>
                </div>

               
<div className='flex justify-between items-center'>
                <p className=" text-gray-500 sm:mt-0">
                  {person.countryName}</p>
                
       <NavLink to={"/otmhaqida"}>
         <button className='border-blue-400 text-blue-400   font-medium border transition-shadow  hover:shadow-blue-700  duration-300 cursor-pointer rounded-full py-2 px-4 text-xs hover:shadow-2xl   shadow-inherit  bg-transparent'>
  {t("batafsil")}
</button>
       </NavLink>

                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
      </div>
   
    </div>
  );
}

export default UmumiyOtm;
