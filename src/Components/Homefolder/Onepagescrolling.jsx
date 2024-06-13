import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import {
  Link as ScrollLink,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

import img1 from "../../../public/images/img1.jpg";
import img01 from '../../../public/images/img01.jpg';
import img02 from '../../../public/images/img02.jpg';
import img03 from '../../../public/images/img03.jpg';
import img2 from "../../../public/images/img2.jpg";

import img3 from "../../../public/images/img3.jpg";
import img4 from "../../../public/images/img4.jpg";
import img5 from "../../../public/images/img5.jpg";
import img6 from "../../../public/images/img6.jpg";
import img7 from "../../../public/images/img7.jpg";
import img8 from "../../../public/images/img8.jpeg";
// import client from "../../../public/images/client.png";
import pdf from "../../../public/images/pdf.pdf";
import img9 from "../../../public/images/img9.jpg";
import img10 from "../../../public/images/img10.jpg";
import logo from '../../../public/images/logo.gif'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  const setMenu = (status) => {
    setSideMenuOpen(status);
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {
      setActiveSection(to);
    });

    return () => {
      Events.scrollEvent.remove("begin");
    };
  }, []);

  useEffect(() => {
    scrollSpy.update();
  });

  const menuItems = [
    {
      id: 1,
      title: "HOME",
    },
    {
      id: 2,
      title: "ABOUT US",
    },
    {
      id: 3,
      title: "PRODUCTS",
    },
    {
      id: 4,
      title: "CONTACT US",
    },
  ];

  const isActive = (sectionId) => {
    return activeSection === sectionId;
  };

  return (
    <div className="flex flex-col font-Poppins ">
      <main className="flex-grow">
        <div id="HOME">
          <div className="hero_area">

            
            <div className="hero_bg_box">


              
              {/* <div className="img-box">
                <img src={img1} alt="" />
                

                
              </div> */}


              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      
      <img src={img01} alt="" className="mt-10" />
    </div>
    <div className="carousel-item">
 
      <img src={img02} alt=""className="mt-10" />
    </div>
    <div className="carousel-item">
    
      <img src={img03} alt="" className="mt-10"/>
    </div>
  </div>
  {/* <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a> */}
</div>
          
              
              {/* <img src={img9} alt="" />
                <img src={img10} alt="" /> */}
            </div>



 

            <header className="header_section">
              <div className="header_top">
                <div className="container-fluid">
                  <div className="contact_link-container ">
                    <a href="" className="contact_link1">
                      <FaLocationDot className="text-yellow-400 text-2xl" />
                      {/* <span className="ml-1">Lorem ipsum dolor sit amet,</span> */}
                    </a>
                    <a href="" className="contact_link2">
                      <IoMdCall className="text-yellow-400 text-2xl" />
                      <span className="ml-1">Call :  +91 96351 65686</span>
                    </a>
                    <a href="" className="contact_link3">
                      <FaEnvelope className="text-yellow-400 text-2xl" />

                      <span className="ml-1"> ziontech1986@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="header_bottom ">
                <div className="container-fluid   lg:block md:block hidden">
                  
                  <nav
                    className="navbar navbar-expand-lg custom_nav-container flex justify-between
                  "
                  >
                    <div className="mt-2">
                      
                      <img src={logo}
                        // src="https://5.imimg.com/data5/SELLER/Logo/2024/5/417367714/AR/DE/MX/194305307/logo-90x90.jpg"
                        alt=""
                      />
                    </div>

                    <ul className="flex gap-12 font-semibold cursor-pointer  text-white ">
                      {menuItems.map((item) => (
                        <li
                          className="hover:bg-black duration-200 ease-in-out "
                          key={item.id}
                        >
                          <ScrollLink
                            to={item.title}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className={`cursor-pointer ${
                              isActive(item.title) ? "text-orange-500" : ""
                            }`}
                          >
                            {item.title}
                          </ScrollLink>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                {/* mobile navbar */}

                <div className="header_bottom lg:hidden md:hidden block">
                  <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container">
                 
                      <Link className="navbar-brand" to="/">
                        <span>
                          
                        <img src={logo}
                            // src="https://5.imimg.com/data5/SELLER/Logo/2024/5/417367714/AR/DE/MX/194305307/logo-90x90.jpg"
                            alt="Logo"
                          />
                        </span>
                      </Link>

                      <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-expanded={isMenuOpen ? "true" : "false"}
                        aria-label="Toggle navigation"
                      >
                        {isMenuOpen ? (
                          <IoCloseOutline className=" text-white text-6xl font-bold -mt-3 " />
                        ) : (
                          <FiMenu className=" text-white text-5xl -mt-3 font-bold  " />
                        )}
                      </button>

                      <div
                        className={`navbar-collapse ml-auto ${
                          isMenuOpen ? "block" : "hidden"
                        }`}
                        id="navbarSupportedContent"
                      >
                        <ul className="navbar-nav flex flex-col items-center justify-center space-y-4 mt-4 text-white ">
                          {menuItems.map((item) => (
                            <li
                              className="hover:bg-black duration-200 ease-in-out "
                              key={item.id}
                            >
                              <ScrollLink
                                to={item.title}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                className={`cursor-pointer ${
                                  isActive(item.title) ? "text-orange-500" : ""
                                }`}
                              >
                                {item.title}
                              </ScrollLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </header>

            <section id="about-us" className=" slider_section ">
              <div
              
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                
                <div className="carousel-inner">
                  
                  <div className="carousel-item active">
               
                    <div className="container">
                      
                      <div className="row">
                        <div className="col-md-7">
                          <div className="detail-box">
                            <h1>
                              Your Saftey
                              <span>Our Responsibility</span>
                            </h1>

                            
                            <div className="btn-box">
                              <a href="#about-us" className="btn-1 ">
                                Read more 
                              </a>
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
                              <span>Our Responsibility</span>
                            </h1>

                           
                            <div className="btn-box">
                              <a href="#about-us" className="btn-1 ">
                                Read more 
                              </a>
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
                              <span>Our Responsibility</span>
                            </h1>

                            <div className="btn-box">
                              <a href="#about-us" className="btn-1 ">
                                Read more 
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container idicator_container">
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="1"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="2"
                    ></li>
                  </ol>
                </div>
              </div>
            </section>



          </div>
        </div>









        
        <div id="ABOUT US" className="  ">
          {/* <h1 className="text-white text-4xl capitalize"> ABOUT US</h1> */}

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
                      <h2>Who Are We?</h2>
                    </div>
                    <p>
                      Ziontech - Wholesaler of security alarm system & cctv
                      surveillance system in Bardhaman, West Bengal.
                    </p>
                    <div className="btn-box mt-1">
                      <Link to>Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div id="PRODUCTS" className="">
          {/* <h1 className="text-white text-4xl capitalize"> PRODUCTS</h1> */}

          <div className="bg-black  ">
            <div className="heading_container heading_center text-white text-3xl">
              <h2 className="mt-20">PRODUCTS</h2>
            </div>
            <body
              className=" bg-black lg:flex-row  md:flex-row flex-col 
flex justify-center items-center  p-4 lg:mx-20 lg:text-base md:text-base text-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {/* part 1*/}
                <div className="bg-white p-4 h-60   shadow-md mt-2">
                  <img
                    src={img2}
                    alt=""
                    className="h-20 lg:mx-24 mx-16 md:mx-32"
                  />
                  {/* <GiRingingAlarm className="text-7xl lg:mx-32 mx-24 md:mx-32" /> */}
                  <h2 className=" font-bold mb-2 mt-3 lg:mx-14 md:mx-14 mx-16">
                    Touch Guard (Non GSM)
                  </h2>
                  <h6 className=" lg:mx-12 md:mx-14 mx-10">
                    (Wireless panel Non GSM)
                  </h6>
                </div>

                <div className="bg-white p-4 h-60   shadow-md mt-2">
                  <img
                    src={img3}
                    alt=""
                    className="h-20 lg:mx-32 mx-24 md:mx-32"
                  />

                  <h2 className="font-bold mb-2 mt-3 lg:mx-16 mx-16 md:mx-14">
                    Touch Protect (GSM)
                  </h2>
                  <h6 className=" lg:mx-16 md:mx-14 mx-14">
                    (Wireless Panel GSM)
                  </h6>
                </div>

                {/* part3 */}
                <div className="bg-white p-4 h-60   shadow-md mt-2">
                  <img
                    src={img4}
                    alt=""
                    className="h-20 lg:mx-28 mx-20 md:mx-32"
                  />
                  {/* <GiRingingAlarm className="text-7xl lg:mx-32 mx-24 md:mx-32" /> */}
                  <h2 className="font-bold mb-2   mt-3 lg:mx-6  mx-[70px] md:mx-14">
                    Door Magnetic Sensor controller based
                  </h2>
                  <h6 className=" lg:mx-6 md:mx-14 mx-10">
                    (Indian) 7 Years battery backup
                  </h6>
                </div>

                {/* part4 */}
                <div className="bg-white p-4 h-60   shadow-md mt-2 ">
                  <img
                    src={img7}
                    alt=""
                    className="h-20 lg:mx-24 mx-16 md:mx-32"
                  />
                  {/* <GiRingingAlarm className="text-7xl lg:mx-32 mx-24 md:mx-32" /> */}
                  <h2 className="font-bold mb-2 mt-3 lg:mx-14 md:mx-14 mx-14">
                    Dual Element Digital PIR Sensor (Israel) (3-4
                  </h2>
                  <h6 className=" lg:mx-2 md:mx-14 mx-14">
                    Years Battery Backup in 5 min mode) (Rodents and Reptile
                    Immune)
                  </h6>
                </div>

                {/* part5 */}
                <div className="bg-white p-4 h-60   shadow-md mt-2">
                  <img
                    src={img5}
                    alt=""
                    className="h-20 lg:mx-24 mx-20 md:mx-32"
                  />
                  {/* <GiRingingAlarm className="text-7xl lg:mx-32 mx-24 md:mx-32" /> */}
                  <h2 className="font-bold mb-2 mt-3 lg:mx-14 md:mx-14 mx-[76px]">
                    Shutter Sensor microcontroller based (Indian)
                  </h2>
                  <h6 className=" lg:mx-12 md:mx-14 mx-10">
                    5 Years battery backup
                  </h6>
                </div>

                {/* part6 */}
                <div className="bg-white p-4 h-60   shadow-md mt-2">
                  <img
                    src={img6}
                    alt=""
                    className="h-20 lg:mx-24 mx-16 md:mx-32"
                  />
                  {/* <GiRingingAlarm className="text-7xl lg:mx-32 mx-24 md:mx-32" /> */}
                  <h2 className="font-bold mb-2 mt-3 lg:mx-14 md:mx-14 mx-16">
                    Wireless Vibration / Glass Break CPU based
                  </h2>
                  <h6 className=" lg:mx-12 md:mx-14 mx-10">
                    with adjustivity (Indian) 10 years battery backup
                  </h6>
                  {/* <p className="text-gray-700 lg:mx-2 mx-3 ">
                Our range of products include automatic door sensor and wifi
                based door sensor.
              </p>
              <button className="lg:mt-[30%] mt-24 px-4 py-2 bg-yellow-500  text-white rounded lg:mx-24  mx-16 md:mx-28">
                Read More
              </button> */}
                </div>

                {/* <button className="mt-4 px-4 py-2 bg-yellow-500  text-white rounded  mx-16 md:mx-28 ">
                Read More
              </button>  */}
              </div>
            </body>

            <a
              href={pdf}
              download="Ziontechpdf"
              className="w-full md:w-auto flex justify-center items-center px-9 py-3 mt-4 md:mt-0 mx-auto md:mx-0 
                font-semibold bg-yellow-500 rounded-sm text-white"
            >
              Download All Products
            </a>

            {/* <button className='text-yellow-500 lg:flex md:flex sm:flex  items-center  justify-center text-center border-2 
border-gray-100 shadow-2xl bg-white 
font-semibold py-3 px-9 mt-4 rounded-lg mx-auto '>
  
    View All Products
</button> */}
          </div>

          <section className="client_section layout_padding bg-white  ">
            <div className="container ">
              <div className="heading_container heading_center">
                <h2 className="text-3xl">What is says our clients</h2>
              </div>
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="box">
                      <img src={img8} alt="" className="h-28" />
                      <div className="detail-box">
                        <h4>Shayam Banerjee</h4>
                        <p>
                          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip */}
                          Top Security Camera Overall
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div className="box">
                      <img src={img8} alt="" className="h-28" />
                      <div className="detail-box">
                        <h4>Vivek Singh</h4>
                        <p>
                          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip */}
                          Most Complete Security System with Cameras
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div className="box">
                      <img src={img8} alt="" className="h-28" />
                      <div className="detail-box">
                        <h4>Rakesh yadav</h4>
                        <p>
                          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip */}
                          Most Affordable Security Cameras
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel_btn-box">
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    <IoIosArrowBack />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    <IoIosArrowForward />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div id="CONTACT US">
          {/* <h1 className="bg-red-700 text-4xl text-white capitalize">    CONTACT US</h1> */}

          <section className="contact_section layout_padding">
            <div className="contact_bg_box"></div>
          
            <div className="container">
              <div className="heading_container heading_center text-3xl">
                <h2>Get In touch</h2>
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
                            <input
                              type="text"
                              placeholder="Message"
                              className="message_input"
                            />
                          </div>
                          <div className="btn-box ">
                            <button type="submit">Send</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>



{/* <section className="contact_section layout_padding">
    <img src={img1} alt="Background" className="contact_bg_box" />
    <div className="container">
        <div className="heading_container heading_center text-3xl">
            <h2>Get In touch</h2>
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
                                    <input
                                        type="text"
                                        placeholder="Message"
                                        className="message_input"
                                    />
                                </div>
                                <div className="btn-box ">
                                    <button type="submit">Send</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section> */}

        </div>
      </main>
    </div>
  );
}

export default App;




















