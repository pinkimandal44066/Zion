import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Footer from "../Homefolder/Footer";
import Homepage from "./Homepage";
const LayOut = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading === true ? (
        <div className=" w-full h-full absolute  flex justify-center items-center">
          <div className="loader  "></div>
        </div>
      ) : (
        <>
          <Homepage />
          <ScrollToTop />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
};

export default LayOut;
