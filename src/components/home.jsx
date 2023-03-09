import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ThreeScene from "./three";
import Navbar from "./navbar";

const Home = () => {
  const [activeItem, setActiveItem] = useState("home");
  const navigate = useNavigate();

  const handleSetActiveItem = (item) => {
    setActiveItem(item);
  };

  useEffect(() => {
    const handleScroll = () => {
      navigate("/about");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigate]);

  return (
    <div>
      <Navbar
        className="position-fixed"
        activeItem={activeItem}
        setActiveItem={handleSetActiveItem}
      />
      <div className="home-content">
        <p className='text-white text-center position-absolute name'>
          Soumita Basu
        </p>
        <div className='p-3 borderBottom position-absolute'></div>
        <ThreeScene />
        <div className='position-absolute ms-4 ms-lg-5'
          style={{marginTop: "-25vh", color: "rgb(0, 172, 172, 0.5)", fontSize: "0.8rem"}}>
          <p className="d-flex justify-content-center m-0">
            H <br />O <br />M
          </p>
          <p className="d-flex justify-content-center mb-2">E</p>
          <p className="pt-5 ms-1" style={{ borderLeft: "2px solid rgb(0, 172, 172, 0.5)" }}></p>
        </div>
        <p className='text-white position-absolute overview text-center'>
          COMPUTER SCIENCE AND ENGINEERING
          <br />
          UNDERGRADUATE STUDENT
        </p>
      </div>
      <div className='indicator mx-auto'>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Home;