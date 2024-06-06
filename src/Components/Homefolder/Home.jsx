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
import hero from '../../../public/images/hero-bg.jpg'

import { GiRingingAlarm } from "react-icons/gi";

import client from '../../../public/images/client.png'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { NavLink, Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
      


      {/* Part 1 */}


      <div className="hero_area">
  
  <div className="hero_bg_box">
    <div className="img-box">
     
<img src={hero} alt='' />
    </div>
  </div>

  <header className="header_section">
    <div className="header_top">
      <div className="container-fluid">
        <div className="contact_link-container ">
          <a href="" className="contact_link1">
          
            <FaLocationDot className='text-yellow-400 text-2xl' />
            <span className='ml-1'> 
              Lorem ipsum dolor sit amet,
            </span>
          </a>
          <a href="" className="contact_link2">
          
            <IoMdCall className='text-yellow-400 text-2xl' />
            <span className='ml-1'>
              Call : +01 1234567890
            </span>
          </a>
          <a href="" className="contact_link3">
            
            <FaEnvelope className='text-yellow-400 text-2xl'/>

            <span className='ml-1'>
              demo@gmail.com
            </span>
          </a>
        </div>
      </div>
    </div>
    <div className="header_bottom">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container">
         

        <NavLink to='/'> 
         <div className='mt-2'>
          <img src="https://5.imimg.com/data5/SELLER/Logo/2024/5/417367714/AR/DE/MX/194305307/logo-90x90.jpg" alt="" />
          </div></NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
          </button>

          {/* <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
            <ul className="navbar-nav  ">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">HOME <span className="sr-only">(current)</span></a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="about.html"> ABOUT US</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="service.html"> PRODUCTS </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="guard.html"> CONTACT US</a>
              </li>
            
            </ul>
          </div> */}

<div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
  <ul className="navbar-nav">
    <li className="nav-item active">
      <Link className="nav-link" to="index.html">
        HOME <span className="sr-only">(current)</span>
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="about.html">ABOUT US</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="service.html">PRODUCTS</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="guard.html">CONTACT US</Link>
    </li>
  </ul>
</div>

        </nav>
      </div>
    </div>
  </header>
  

  <header className="-mt-20 text-white lg:block md:block hidden ">
    <div className="container mx-auto px-4 py-6">
      <nav className="flex items-end justify-end ">
       
     
        <ul className="flex space-x-4 cursor-pointer">
          <Link to className=" hover:text-gray-800">HOME</Link>
          <Link to className=" hover:text-gray-800">ABOUT US</Link>
          <Link to className=" hover:text-gray-800">PRODUCTS</Link>
          <Link to className=" hover:text-gray-800">CONTACT US</Link>
         
        </ul>
      </nav>
    </div>
  </header>


  <section className=" slider_section ">
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="detail-box">
                  <h1>
                    Your Saftey 
                    <span>
                      Our Responsibility
                    </span>
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod magna aliqua. Ut enim ad minim veniam
                  </p>
                  <div className="btn-box">
                    <Link to className="btn-1"> Read more </Link>
                    <Link to className="btn-2">Get A Quote</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="detail-box">
                  <h1>
                    Your Saftey 
                    <span>
                      Our Responsibility
                    </span>
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod magna aliqua. Ut enim ad minim veniam
                  </p>
                  <div className="btn-box">
                  <Link to className="btn-1"> Read more </Link>
                  <Link to className="btn-2">Get A Quote</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="detail-box">
                  <h1>
                    Your Saftey 
                    <span>
                      Our Responsibility
                    </span>
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod magna aliqua. Ut enim ad minim veniam
                  </p>
                  <div className="btn-box">
                  <Link to className="btn-1"> Read more </Link>
                  <Link to className="btn-2">Get A Quote</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container idicator_container">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
      </div>
    </div>
  </section>
 
</div>










{/* PART2 */}





<section className="about_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-6 px-0">
          <div className="img_container">
            <div className="img-box">
              <img src="images/about-img.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-6 px-0">
          <div className="detail-box">
            <div className="heading_container ">
              <h2>
                Who Are We?
              </h2>
            </div>
            <p>
            Ziontech - Wholesaler of security alarm system & cctv surveillance system in Bardhaman, West Bengal.
            </p>
            <div className="btn-box mt-1">
              <Link to >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>




{/* PART3 */}



<div className='bg-black '>
  
<div className="heading_container heading_center text-white text-3xl">
        <h2 className='mt-20'>
        PRODUCTS
        </h2>
      </div>
<body className=" bg-black lg:flex-row  md:flex-row flex-col 
flex justify-center items-center  p-4 lg:mx-20">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


{/* part 1*/}
    <div className="bg-white p-4 lg:h-96  lg:w-[374px]  shadow-md mt-2">
    <GiRingingAlarm  className='text-7xl lg:mx-32 mx-24 md:mx-32'/>
      <h2 className="text-xl font-bold mb-2 mt-3 lg:mx-6 md:mx-14">SECURITY ALARM SYSTEM</h2>
      <p className="text-gray-700 lg:mx-2 mx-0">Our product range includes a wide range of shop shutter security system, non gsm shutter siren, gsm shutter system, non gsm door siren, gsm multi door security system and eco 5 gsm security system.</p>
      <button className="mt-4 px-4 py-2 bg-yellow-500 m text-white rounded lg:mx-24 mx-16 md:mx-28 ">Read More</button>
    </div>


{/* part2 */}
    <div className="bg-white p-4 lg:h-96  lg:w-[374px] shadow-md mt-2">
    <GiRingingAlarm   className='text-7xl lg:mx-32 mx-24 md:mx-32'/>
      <h2 className="text-xl font-bold mb-2 mt-3 lg:mx-6 md:mx-14">Shutter Security System</h2>
      <p className="text-gray-700 lg:mx-2 mx-0">Leading Wholesaler of shutter gsm with motion and fire sensor, hybrid 10 security sensor, k3gps security system, eco 6 gsm security sensor, hybrid 5 wired security sensor and secure 5 sensor from Bardhaman.</p>
      <button className="mt-4 px-4 py-2 bg-yellow-500 m text-white rounded lg:mx-24 mx-16  md:mx-28">Read More</button>
    </div>


{/* part3 */}
    <div className="bg-white p-4 lg:h-96  lg:w-[374px] shadow-md mt-2">
    <GiRingingAlarm  className='text-7xl lg:mx-32 mx-24 md:mx-32'/>
      <h2 className="text-xl font-bold mb-2 mt-3 lg:mx-16 mx-10 md:mx-20">Security Systems</h2>
      <p className="text-gray-700 lg:mx-2 mx-3 ">Leading Wholesaler of panic button alarm, wireless gsm alarm and wireless alarm system from Bardhaman.</p>
      <button className="lg:mt-[21%] mt-24 px-4 py-2 bg-yellow-500  text-white rounded lg:mx-24  mx-16 md:mx-28">Read More</button>
    </div>


{/* part4 */}
    <div className="bg-white p-4 lg:h-96  lg:w-[374px] shadow-md mb-10">
    <GiRingingAlarm  className='text-7xl lg:mx-32 mx-24 md:mx-32'/>
      <h2 className="text-xl font-bold mb-2 mt-3 lg:mx-7 mx-0 md:mx-12">Cctv Surveillance System</h2>
      <p className="text-gray-700 lg:mx-2 mx-3 ">Pioneers in the industry, we offer cctv surveillance system from India.</p>
      <button className="lg:mt-[36%] mt-24 px-4 py-2 bg-yellow-500  text-white rounded lg:mx-24  mx-16 md:mx-28">Read More</button>
    </div>
 

 {/* part5 */}
    <div className="bg-white p-4 lg:h-96  lg:w-[374px] shadow-md">
    <GiRingingAlarm  className='text-7xl lg:mx-32 mx-24 md:mx-32'/>
      <h2 className="text-xl font-bold mb-2 mt-3 lg:mx-7 mx-1 md:mx-12">Automatic Door Systems</h2>
      <p className="text-gray-700 lg:mx-2 mx-3 ">We are a leading Wholesaler of gsm door system from Bardhaman, India.</p>
      <button className="lg:mt-[36%] mt-24 px-4 py-2 bg-yellow-500  text-white rounded lg:mx-24  mx-16 md:mx-28">Read More</button>
    </div>
  


  {/* part6 */}
    <div className="bg-white p-4 lg:h-96  lg:w-[374px] shadow-md">
    <GiRingingAlarm  className='text-7xl lg:mx-32 mx-24 md:mx-32'/>
      <h2 className="text-xl font-bold mb-2 mt-3 lg:mx-32 mx-20 md:mx-32">Sensors</h2>
      <p className="text-gray-700 lg:mx-2 mx-3 ">Our range of products include automatic door sensor and wifi based door sensor.</p>
      <button className="lg:mt-[30%] mt-24 px-4 py-2 bg-yellow-500  text-white rounded lg:mx-24  mx-16 md:mx-28">Read More</button>
    </div>
  </div>
</body>

</div>




{/* PART4 */}


<section className="client_section layout_padding">
    <div className="container ">
      <div className="heading_container heading_center">
        <h2 className='text-3xl'>
          What is says our clients
        </h2>
      </div>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="box">
            
               <img src={client} alt='' className='h-28' />
              <div className="detail-box">
                <h4>
                  Minim Veniam
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="box">
           
               <img src={client} alt='' className='h-28' />
              <div className="detail-box">
                <h4>
                  Minim Veniam
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="box">
              
              
              <img src={client} alt='' className='h-28' />
              <div className="detail-box">
                <h4>
                  Minim Veniam
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel_btn-box">
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        
            <IoIosArrowBack />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            
            <IoIosArrowForward />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </section>




  {/* PART5 */}

  <section className="contact_section layout_padding">
    <div className="contact_bg_box">
    
    </div>
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Get In touch
        </h2>
      </div>
      <div className="">
        <div className="row">
          <div className="col-md-7 mx-auto">
            <form action="#">
              <div className="contact_form-container">
                <div>
                  <div>
                    <input type="text" placeholder="Full Name" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email " />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone Number" />
                  </div>
                  <div className="">
                    <input type="text" placeholder="Message" className="message_input" />
                  </div>
                  <div className="btn-box ">
                    <button type="submit">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>



 


    </>
  )
}

export default Home
