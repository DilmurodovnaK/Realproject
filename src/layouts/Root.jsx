 import React from 'react';
import logo from '../img/1logo.png';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

 const Index = () => {
   return (
     <>
       <div className='navbar bg-[#587FA7] bg-opacity-85 z-50 sticky top-0  '>
       <div className=' px-10 container max-w-[1400px] mx-auto'>
         <header>
           <nav>
             <div className=' flex items-center justify-between'>
               <div>
                 <NavLink to='/'>
                   <span className='flex items-center'>
                 <img src={logo} alt="logo" width={100} height={300} />
                 <p className='text-white text-2xl font-normal'>WorldCamp</p>
                 </span>
                 </NavLink>
               </div>

               <div  className='px-4 py-3 2xl:hidden   '>
                 <ul className='flex gap-8'>
                   <li className='text-white text-base font-normal lato-bold'>
                     <NavLink to='otmlar'  style={({ isActive }) => {
  return isActive ? { color: "#2563eb" } : {};
  }}>OTMlar</NavLink>
                   </li>
                   <li className='text-white lato-bold  text-base font-normal'>
                     <NavLink to='/yonalishlar' style={({ isActive }) => {
  return isActive ? { color: "#2563eb" } : {};
  }}>Yo`nalishlar</NavLink>
                   </li>
                   <li className='text-white lato-bold text-base font-normal'>
                     <NavLink to='/topuniver' style={({ isActive }) => {
  return isActive ? { color: "#2563eb" } : {};
  }}>Top Universitetlar</NavLink>
                   </li>
                 
                 </ul>
              </div>
               <div className='flex gap-x-9 2xl:hidden'>
                 <select  className='lato-bold text-white ' name="til" id="">
                     <option className='lato-bold ' value="uzbek">uzbek</option>
                     <option  className='lato-bold'  value="english">english</option>
                     <option  className='lato-bold' value="russkiy">russkiy</option>
                 </select>
                 <button  className='lato-bold text-white'>Ro`yhatdan o`tish</button>
               </div>
                </div>
 {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button> */}
        
           </nav>
         </header>
        
        
       </div>
       </div>
  
     <div><Outlet/></div>
     {/* <Footer/> */}
     </>
   );
 }

 export default Index;




// import React, { useState } from 'react';
// import { NavLink, Outlet } from 'react-router-dom';
// import logo from '../img/1logo.png';

// const Index = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       <div className='navbar bg-[#587FA7] bg-opacity-85 z-50 sticky top-0'>
//         <div className='px-10 container max-w-[1400px] mx-auto md:px-1'>
//           <header>
//             <nav>
//               <div className='flex items-center justify-between'>
//                 <div>
//                   <NavLink to='/'>
//                     <span className='flex items-center'>
//                       <img src={logo} alt="logo" width={100} height={300} />
//                       <p className='text-white text-2xl font-normal'>WorldCamp</p>
//                     </span>
//                   </NavLink>
//                 </div>
//                 <div id="navbar-default" className={`px-4 py-3 w-full  ${isMenuOpen ? 'block' : 'hidden'}`}>
//                   <ul className='flex flex-col md:flex-row gap-8'>
//                     <li className='text-white text-base font-normal lato-bold'>
//                        <NavLink to='/otmlar' style={({ isActive }) => {
//    return isActive ? { color: "#2563eb" } : {};
//    }}>OTMlar</NavLink>
//                     </li>
//                     <li className='text-white lato-bold  text-base font-normal'>
//                     <NavLink to='/yonalishlar' style={({ isActive }) => {
//    return isActive ? { color: "#2563eb" } : {};
//    }}>Yo`nalishlar</NavLink>
//                     </li>
//                     <li className='text-white lato-bold text-base font-normal'>
//                    <NavLink to='/topuniver' style={({ isActive }) => {
//    return isActive ? { color: "#2563eb" } : {};
//    }}>Top Universitetlar</NavLink>
//                     </li>
//                     <li className='text-white lato-bold text-base font-normal'>
//                      <NavLink to='/yangiliklar' style={({ isActive }) => {
//    return isActive ? { color: "#2563eb" } : {};
//    }}>Yangiliklar</NavLink>
//                     </li>
//                   </ul>
//                   </div>
//                   <div id="navbar-default" className={`px-4 py-3 flex gap-x-9 ${isMenuOpen ? 'block' : 'hidden'}`}>
//                     <select className='lato-bold text-white'>
//                       <option className='lato-bold' value="uzbek">uzbek</option>
//                       <option className='lato-bold' value="english">english</option>
//                       <option className='lato-bold' value="russkiy">russkiy</option>
//                     </select>
//                     <button className='lato-bold text-white'>Ro`yhatdan o`tish</button>
//                   </div>
//                 </div>
//                 <button onClick={toggleMenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded={isMenuOpen ? 'true' : 'false'}>
//                   <span className="sr-only">Open main menu</span>
//                   <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
//                   </svg>
//                 </button>
              
//             </nav>
//           </header>
//         </div>
//       </div>

//       <div><Outlet /></div>
//       {/* <Footer/> */}
//     </>
//   );
// }

// export default Index;


