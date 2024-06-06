// import React from 'react'
// import Homepage from './Components/Homefolder/Homepage'

// const App = () => {
//   return (
//     <div>
//  <Homepage />

 
//     </div>
//   )
// }

// export default App






// // import React from 'react'
// import hero from '../public/images/hero-bg.jpg'
// import { GiRingingAlarm } from "react-icons/gi";
// import client from '../public/images/client.png'
// import { IoIosArrowForward } from "react-icons/io";
// import { IoIosArrowBack } from "react-icons/io";
// import { FaLocationDot } from "react-icons/fa6";
// import { IoMdCall } from "react-icons/io";
// import { FaEnvelope } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { TfiYoutube } from "react-icons/tfi";
// import { FaInstagram } from "react-icons/fa";

// const App = () => {
//   return (
//     <>
      
  
//   <div className="hero_area">
  
//     <div className="hero_bg_box">
//       <div className="img-box">
       
// <img src={hero} alt='' />
//       </div>
//     </div>

//     <header className="header_section">
//       <div className="header_top">
//         <div className="container-fluid">
//           <div className="contact_link-container ">
//             <a href="" className="contact_link1">
            
//               <FaLocationDot className='text-yellow-400 text-2xl' />
//               <span className='ml-1'> 
//                 Lorem ipsum dolor sit amet,
//               </span>
//             </a>
//             <a href="" className="contact_link2">
            
//               <IoMdCall className='text-yellow-400 text-2xl' />
//               <span className='ml-1'>
//                 Call : +01 1234567890
//               </span>
//             </a>
//             <a href="" className="contact_link3">
              
//               <FaEnvelope className='text-yellow-400 text-2xl'/>

//               <span className='ml-1'>
//                 demo@gmail.com
//               </span>
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="header_bottom">
//         <div className="container-fluid">
//           <nav className="navbar navbar-expand-lg custom_nav-container">
//             <a className="navbar-brand" href="index.html">
//             <img src="https://5.imimg.com/data5/SELLER/Logo/2024/5/417367714/AR/DE/MX/194305307/logo-90x90.jpg" alt="" />

//             </a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//               <span></span>
//             </button>

//             <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
//               <ul className="navbar-nav  ">
//                 <li className="nav-item active">
//                   <a className="nav-link" href="index.html">HOME <span class="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="about.html"> ABOUT US</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="service.html"> PRODUCTS </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="guard.html"> CONTACT US</a>
//                 </li>
              
//               </ul>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </header>
    

//     <header className="-mt-20 text-white lg:block md:block hidden ">
//       <div className="container mx-auto px-4 py-6">
//         <nav className="flex items-end justify-end ">
         
       
//           <ul className="flex space-x-4">
//             <li><a href="/" className=" hover:text-gray-800">HOME</a></li>
//             <li><a href="/about" className=" hover:text-gray-800">ABOUT US</a></li>
//             <li><a href="/services" className=" hover:text-gray-800">PRODUCTS</a></li>
//             <li><a href="/guards" className=" hover:text-gray-800">CONTACT US</a></li>
           
//           </ul>
//         </nav>
//       </div>
//     </header>


//     <section className=" slider_section ">
//       <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <div className="container">
//               <div className="row">
//                 <div className="col-md-7">
//                   <div className="detail-box">
//                     <h1>
//                       Your Saftey 
//                       <span>
//                         Our Responsibility
//                       </span>
//                     </h1>
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod magna aliqua. Ut enim ad minim veniam
//                     </p>
//                     <div className="btn-box">
//                       <a href="" className="btn-1"> Read more </a>
//                       <a href="" className="btn-2">Get A Quote</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="carousel-item ">
//             <div className="container">
//               <div className="row">
//                 <div className="col-md-7">
//                   <div className="detail-box">
//                     <h1>
//                       Your Saftey 
//                       <span>
//                         Our Responsibility
//                       </span>
//                     </h1>
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod magna aliqua. Ut enim ad minim veniam
//                     </p>
//                     <div className="btn-box">
//                       <a href="" className="btn-1"> Read more </a>
//                       <a href="" className="btn-2">Get A Quote</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="carousel-item ">
//             <div className="container">
//               <div className="row">
//                 <div className="col-md-7">
//                   <div className="detail-box">
//                     <h1>
//                       Your Saftey 
//                       <span>
//                         Our Responsibility
//                       </span>
//                     </h1>
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                       sed do eiusmod magna aliqua. Ut enim ad minim veniam
//                     </p>
//                     <div className="btn-box">
//                       <a href="" className="btn-1"> Read more </a>
//                       <a href="" className="btn-2">Get A Quote</a>
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
//     </section>
   
//   </div>



//   <section className="about_section layout_padding">
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 px-0">
//           <div className="img_container">
//             <div className="img-box">
//               <img src="images/about-img.jpg" alt="" />
//             </div>
//           </div>
//         </div>
//         <div className="col-md-6 px-0">
//           <div className="detail-box">
//             <div className="heading_container ">
//               <h2>
//                 Who Are We?
//               </h2>
//             </div>
//             <p>
//             Ziontech - Wholesaler of security alarm system & cctv surveillance system in Bardhaman, West Bengal.
//             </p>
//             <div className="btn-box mt-1">
//               <a href="">
//                 Read More
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>

 

  


// <div className='bg-black '>
  
// <div className="heading_container heading_center text-white text-3xl">
//         <h2 className='mt-20'>
//         PRODUCTS
//         </h2>
//       </div>
// <body className=" bg-black lg:flex-row  md:flex-row flex-col 
// flex justify-center items-center  p-4 lg:mx-20">
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


// {/* part */}
//     <div className="bg-white p-4 lg:h-96  lg:w-[374px]  shadow-md mt-2">
//     <GiRingingAlarm  className='text-7xl lg:mx-32 mx-24 md:mx-32'/>
//       <h2 className="text-xl font-bold mb-2 mt-3 lg:mx-6 md:mx-14">SECURITY ALARM SYSTEM</h2>
//       <p className="text-gray-700 lg:mx-2 mx-0">Our product range includes a wide range of shop shutter security system, non gsm shutter siren, gsm shutter system, non gsm door siren, gsm multi door security system and eco 5 gsm security system.</p>
//       <button className="mt-4 px-4 py-2 bg-yellow-500 m text-white rounded lg:mx-24 mx-16 md:mx-28 ">Read More</button>
//     </div>


// {/* part2 */}
//     <div className="bg-white p-4 lg:h-96  lg:w-[374px] shadow-md mt-2">
//     <GiRingingAlarm   className='text-7xl lg:mx-32 mx-24 md:mx-32'/>
//       <h2 className="text-xl font-bold mb-2 mt-3 lg:mx-6 md:mx-14">Shutter Security System</h2>
//       <p className="text-gray-700 lg:mx-2 mx-0">Leading Wholesaler of shutter gsm with motion and fire sensor, hybrid 10 security sensor, k3gps security system, eco 6 gsm security sensor, hybrid 5 wired security sensor and secure 5 sensor from Bardhaman.</p>
//       <button className="mt-4 px-4 py-2 bg-yellow-500 m text-white rounded lg:mx-24 mx-16  md:mx-28">Read More</button>
//     </div>


// {/* part3 */}
//     <div className="bg-white p-4 lg:h-96  lg:w-[374px] shadow-md mt-2">
//     <GiRingingAlarm  className='text-7xl lg:mx-32 mx-24 md:mx-32'/>
//       <h2 className="text-xl font-bold mb-2 mt-3 lg:mx-16 mx-10 md:mx-20">Security Systems</h2>
//       <p className="text-gray-700 lg:mx-2 mx-3 ">Leading Wholesaler of panic button alarm, wireless gsm alarm and wireless alarm system from Bardhaman.</p>
//       <button className="lg:mt-[21%] mt-24 px-4 py-2 bg-yellow-500  text-white rounded lg:mx-24  mx-16 md:mx-28">Read More</button>
//     </div>


// {/* part4 */}
//     <div className="bg-white p-4 lg:h-96  lg:w-[374px] shadow-md mb-10">
//     <GiRingingAlarm  className='text-7xl lg:mx-32 mx-24 md:mx-32'/>
//       <h2 className="text-xl font-bold mb-2 mt-3 lg:mx-7 mx-0 md:mx-12">Cctv Surveillance System</h2>
//       <p className="text-gray-700 lg:mx-2 mx-3 ">Pioneers in the industry, we offer cctv surveillance system from India.</p>
//       <button className="lg:mt-[36%] mt-24 px-4 py-2 bg-yellow-500  text-white rounded lg:mx-24  mx-16 md:mx-28">Read More</button>
//     </div>
 

//  {/* part5 */}
//     <div className="bg-white p-4 lg:h-96  lg:w-[374px] shadow-md">
//     <GiRingingAlarm  className='text-7xl lg:mx-32 mx-24 md:mx-32'/>
//       <h2 className="text-xl font-bold mb-2 mt-3 lg:mx-7 mx-1 md:mx-12">Automatic Door Systems</h2>
//       <p className="text-gray-700 lg:mx-2 mx-3 ">We are a leading Wholesaler of gsm door system from Bardhaman, India.</p>
//       <button className="lg:mt-[36%] mt-24 px-4 py-2 bg-yellow-500  text-white rounded lg:mx-24  mx-16 md:mx-28">Read More</button>
//     </div>
  


//   {/* part6 */}
//     <div className="bg-white p-4 lg:h-96  lg:w-[374px] shadow-md">
//     <GiRingingAlarm  className='text-7xl lg:mx-32 mx-24 md:mx-32'/>
//       <h2 className="text-xl font-bold mb-2 mt-3 lg:mx-32 mx-20 md:mx-32">Sensors</h2>
//       <p className="text-gray-700 lg:mx-2 mx-3 ">Our range of products include automatic door sensor and wifi based door sensor.</p>
//       <button className="lg:mt-[30%] mt-24 px-4 py-2 bg-yellow-500  text-white rounded lg:mx-24  mx-16 md:mx-28">Read More</button>
//     </div>
//   </div>
// </body>

// </div>






//   <section className="client_section layout_padding">
//     <div className="container ">
//       <div className="heading_container heading_center">
//         <h2 className='text-3xl'>
//           What is says our clients
//         </h2>
//       </div>
//       <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <div className="box">
            
//                <img src={client} alt='' className='h-28' />
//               <div className="detail-box">
//                 <h4>
//                   Minim Veniam
//                 </h4>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                   do eiusmod tempor incididunt ut labore et dolore magna
//                   aliqua. Ut enim ad minim veniam, quis nostrud exercitation
//                   ullamco laboris nisi ut aliquip
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="carousel-item ">
//             <div className="box">
           
//                <img src={client} alt='' className='h-28' />
//               <div className="detail-box">
//                 <h4>
//                   Minim Veniam
//                 </h4>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                   do eiusmod tempor incididunt ut labore et dolore magna
//                   aliqua. Ut enim ad minim veniam, quis nostrud exercitation
//                   ullamco laboris nisi ut aliquip
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="carousel-item ">
//             <div className="box">
              
              
//               <img src={client} alt='' className='h-28' />
//               <div className="detail-box">
//                 <h4>
//                   Minim Veniam
//                 </h4>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                   do eiusmod tempor incididunt ut labore et dolore magna
//                   aliqua. Ut enim ad minim veniam, quis nostrud exercitation
//                   ullamco laboris nisi ut aliquip
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="carousel_btn-box">
//           <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        
//             <IoIosArrowBack />
//             <span className="sr-only">Previous</span>
//           </a>
//           <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            
//             <IoIosArrowForward />
//             <span className="sr-only">Next</span>
//           </a>
//         </div>
//       </div>
//     </div>
//   </section>


//   <section className="contact_section layout_padding">
//     <div className="contact_bg_box">
    
//     </div>
//     <div className="container">
//       <div className="heading_container heading_center">
//         <h2>
//           Get In touch
//         </h2>
//       </div>
//       <div className="">
//         <div className="row">
//           <div className="col-md-7 mx-auto">
//             <form action="#">
//               <div className="contact_form-container">
//                 <div>
//                   <div>
//                     <input type="text" placeholder="Full Name" />
//                   </div>
//                   <div>
//                     <input type="email" placeholder="Email " />
//                   </div>
//                   <div>
//                     <input type="text" placeholder="Phone Number" />
//                   </div>
//                   <div className="">
//                     <input type="text" placeholder="Message" className="message_input" />
//                   </div>
//                   <div className="btn-box ">
//                     <button type="submit">
//                       Send
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>

  

  


  






  
//   {/* <footer className="container-fluid footer_section">
//     <p>
//       &copy; <span id="currentYear"></span> All Rights Reserved. Design by
//      Free Html Templates
//     </p>


//     <div className='text-white flex '>
//     <FaFacebookF />
//     <FaTwitter  />
//     <TfiYoutube />
//     <FaInstagram />
//     </div>
//   </footer> */}



// <div className=' bg-black  lg:p-14 md:p-10 sm:p-4 p-14 '>
// <div className=' text-white lg:flex md:flex  md:mx-10  sm:flex  sm:mx-10  justify-between items-center  lg:text-base
//  lg:mx-6 mx-2 ' >
// <p>
//       &copy; <span id="currentYear"></span> All Rights Reserved. Design by
//      Free Html Templates
//     </p>


//     <div className='text-white flex gap-4  text-xl mx-10 mt-3 lg:mt-0 md:mt-0  sm:mt-0 lg:mx-0 md:mx-0 '>
//     <FaFacebookF />
//     <FaTwitter  />
//     <TfiYoutube />
//     <FaInstagram />
//     </div>
// </div>
// </div>

//     </>
//   );
// }

// export default App





// import React from 'react'
// import Homepage from './Components/Homefolder/Homepage'

// const App = () => {
//   return (
//     <div>
//       <Homepage />
//     </div>
//   )
// }

// export default App















import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LayOut from '../src/Components/Homefolder/LayOut';
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<LayOut />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/about-us" element={<Aboutus />} />
            <Route path="/service" element={<Services />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/contact-us" element={<Contactus />} />
          </Route> */}
            {/* <Route path="/" element={<Layout}></Route> */}
            <Route path="/" element={<LayOut />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
