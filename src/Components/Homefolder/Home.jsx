// import React from 'react'


// import { FaLocationDot } from "react-icons/fa6";
// import { FaPhoneAlt } from "react-icons/fa";
// import { useEffect, useState } from "react";
// import { FiMenu } from "react-icons/fi";
// import { IoCloseOutline } from "react-icons/io5";
// import { FaEnvelope } from "react-icons/fa";
// import Slider from '../Slider';
// // import { FaFacebook } from "react-icons/fa";
// // import { FaInstagramSquare } from "react-icons/fa";
// // import { IoLogoYoutube } from "react-icons/io";
// // import { NavLink, Link, useLocation } from "react-router-dom";
// // import logo from "../../public/logo.jpeg"
// const Home = () => {

//     const [isSideMenuOpen, setMenu] = useState(false);

//   useEffect(() => {
//     setMenu(false);
//   }, []);

//   // const location = useLocation();

//   // useEffect(() => {
//   //   setMenu(false);
//   // }, [location]);

//   return (
//     <>

// {/* part1 */}

// <div className='bg-black text-white lg:p-2  md:p-2 p-3'>
// <div className=' flex justify-between max-w-screen-xl lg:mx-auto mx-5'>

// <div className='flex  lg:text-xl md:text-xl text-2xl '>
// <FaLocationDot  className='mt-1 text-yellow-300'/>
//   <h1 className='lg:block md:block hidden'>
// Lorem ipsum dolor sit amet, </h1>
// </div>
// <div className='flex  lg:text-xl md:text-xl text-2xl'>
// <FaPhoneAlt className='mt-1 text-yellow-300'/>
//   <h1 className='lg:block md:block hidden'>
// Call : +01 1234567890 </h1>
// </div>
// <div className='flex  lg:text-xl md:text-xl text-2xl'>
// <FaEnvelope  className='mt-1 text-yellow-300'/>
//   <h1 className='lg:block md:block hidden'> demo@gmail.com </h1>
// </div>
// </div>
// </div>


// {/* part2 */}


// <header className="bg-white ">
//       <div className="container mx-auto px-4 py-6">
//         <nav className="flex justify-between items-center">
//           {/* <a href="/" className="text-lg font-bold">https://5.imimg.com/data5/SELLER/Logo/2024/5/417367714/AR/DE/MX/194305307/logo-90x90.jpg</a> */}
//           <img
//         src="https://5.imimg.com/data5/SELLER/Logo/2024/5/417367714/AR/DE/MX/194305307/logo-90x90.jpg"
//         alt="Guarder Logo"
//         className="w-24 h-24 object-contain"
//       />
//           <ul className="flex space-x-4">
//             <li><a href="/" className="text-gray-600 hover:text-gray-800">HOME</a></li>
//             <li><a href="/about" className="text-gray-600 hover:text-gray-800">ABOUT US</a></li>
//             <li><a href="/services" className="text-gray-600 hover:text-gray-800">PRODUCTS</a></li>
//             <li><a href="/guards" className="text-gray-600 hover:text-gray-800">CONTACT US</a></li>
//             {/* <li><a href="/contact" className="text-gray-600 hover:text-gray-800">Contact us</a></li> */}
//           </ul>
//         </nav>
//       </div>
//     </header>



// {/* part3 */}


// {/* <section className="bg-gray-100 py-20">
//       <div className="container mx-auto text-center">
//         <h1 className="text-4xl font-bold mb-4">Guarder Security Services</h1>
//         <p className="text-lg text-gray-700 mb-6">Your safety, our priority</p>
//         <a href="/contact" className="bg-blue-500 text-white px-6 py-3 rounded-lg">Contact Us</a>
//       </div>
//     </section> */}
// {/* 
// <section className="slider_section">
//       <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <div className="container">
//               <div className="row">
//                 <div className="col-md-7">
//                   <div className="detail-box">
//                     <h1>
//                       Your Safety <br />
//                       <span>Our Responsibility</span>
//                     </h1>
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod magna aliqua. Ut enim ad minim veniam
//                     </p>
//                     <div className="btn-box">
//                       <a href="#" className="btn-1">Read more</a>
//                       <a href="#" className="btn-2">Get A Quote</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <div className="container">
//               <div className="row">
//                 <div className="col-md-7">
//                   <div className="detail-box">
//                     <h1>
//                       Your Safety <br />
//                       <span>Our Responsibility</span>
//                     </h1>
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod magna aliqua. Ut enim ad minim veniam
//                     </p>
//                     <div className="btn-box">
//                       <a href="#" className="btn-1">Read more</a>
//                       <a href="#" className="btn-2">Get A Quote</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <div className="container">
//               <div className="row">
//                 <div className="col-md-7">
//                   <div className="detail-box">
//                     <h1>
//                       Your Safety <br />
//                       <span>Our Responsibility</span>
//                     </h1>
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod magna aliqua. Ut enim ad minim veniam
//                     </p>
//                     <div className="btn-box">
//                       <a href="#" className="btn-1">Read more</a>
//                       <a href="#" className="btn-2">Get A Quote</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="container idicator_container">
//           <ol className="carousel-indicators">
//             <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
//             <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//             <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//           </ol>
//         </div>
//       </div>
//     </section> */}


// <Slider />





//       <div style={{ fontFamily: "Century Gothic" }} className="w-full">
//       <div style={{ position: "relative" }}>
//         {/* <NavLink to="/"> */}
//           <img
//             // src={logo}
//             alt=""
//             className="w-16 rounded-xl"
//             style={{
//               position: "absolute",
//               left: 0,
//               top: 0,
//               cursor: "pointer",
//               zIndex: 1,
//             }}
//           />
//         {/* </NavLink> */}
//         <video
//           className="w-full h-auto"
//           autoPlay
//           loop
//           muted
//           style={{ position: "relative" }}
//         >
//           <source
//             // src="https://media.istockphoto.com/id/1849196332/video/close-up-hand-of-woman-using-calculator-for-calculate-checking-bills-taxes-bank-account.mp4?s=mp4-640x640-is&k=20&c=kjvK7YLFmJtCoPBfcvNyix9hqHlkWEOORTR26OlJZiQ="
//             type="video/mp4"
//           />
//         </video>
//       </div>

//       {/* navbar */}
//       <nav className='lg:hidden md:hidden block '>
//         <div className="container mx-auto flex justify-between items-center cursor-pointer">
//           <div className="left flex items-center">
//             <div className="absolute lg:top-5 top-16 right-5 md:top-5 md:right-20 lg:right-32 p-2 bg-[#E79F30]  text-white rounded-full">
//               <FiMenu
//                 onClick={() => setMenu(true)}
//                 className="lg:text-4xl md:text-4xl text-3xl  cursor-pointer"
//               />
//             </div>
//           </div>

//           {isSideMenuOpen && (
//             <div className="fixed h-screen w-full z-[999] font-Poppins  cursor-pointer  bg-black bg-opacity-50 backdrop-blur-sm top-0 right-0">
//               <section className="text-black bg-gray-100 flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-full text-center flex">
//                 <IoCloseOutline
//                   onClick={() => setMenu(false)}
//                   className="mt-0 mb-8 text-5xl text-white rounded-full p-2 cursor-pointer bg-[#E79F30] absolute  md:top-5 md:right-20  right-0 top-0  lg:top-5 lg:right-32"
//                 />

//                 {/* <NavLink
//                   to="/"
//                   className={({ isActive }) =>
//                     `  ${
//                       isActive ? "text-orange-700" : "text-gray-700"
//                     } font-light text-2xl`
//                   }
//                 >
//                   HOME
//                 </NavLink> */}

//                  <h1>
// HOME</h1>
//                 {/* <NavLink
//                   to="/about-us"
//                   className={({ isActive }) =>
//                     `  ${
//                       isActive ? "text-orange-700" : "text-gray-700"
//                     } font-light text-2xl`
//                   }
//                 >
//                   ABOUT US
//                 </NavLink> */}


// <h1>ABOUT US</h1>



//                 {/* <NavLink
//                   to="/service"
//                   className={({ isActive }) =>
//                     `  ${
//                       isActive ? "text-orange-700" : "text-gray-700"
//                     } font-light text-2xl`
//                   }
//                 >
//                   Services
//                 </NavLink> */}



// <h1>PRODUCTS</h1>


//                 {/* <NavLink
//                   to="/enquiry"
//                   className={({ isActive }) =>
//                     `  ${
//                       isActive ? "text-orange-700" : "text-gray-700"
//                     } font-light text-2xl`
//                   }
//                 >
//                   Enquiry
//                 </NavLink> */}


//                 <h1>CONTACT US</h1>

//                 {/* <NavLink
//                   to="/contact-us"
//                   className={({ isActive }) =>
//                     `  ${
//                       isActive ? "text-orange-700" : "text-gray-700"
//                     } font-light text-2xl`
//                   }
//                 >
//                   Contact US
//                 </NavLink> */}


//                 {/* <h1>  Contact US</h1> */}

//                 {/* icons  */}

//                 {/* <div className="flex justify-center items-center lg:text-4xl text-3xl gap-10">
//                   <Link
//                     to="https://www.facebook.com/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaFacebook />
//                   </Link>

//                   <Link
//                     to="https://www.instagram.com/accounts/login/?hl=en"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaInstagramSquare />
//                   </Link>

//                   <Link
//                     to="https://www.youtube.com/channel/YourChannelID"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <IoLogoYoutube />
//                   </Link>
//                 </div> */}
//               </section>
//             </div>
//           )}
//         </div>
//       </nav>
//     </div>
//     </>
//   )
// }

// export default Home



import React from 'react'

const Home = () => {
  return (
    <div>
      
    </div>
  )
}

export default Home
