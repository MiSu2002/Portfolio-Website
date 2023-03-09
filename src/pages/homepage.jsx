import React, {useState} from "react";
import { Sling as Hamburger } from 'hamburger-react'
import ThreeScene from "./three";

const Home = () => {
    const [isOpen, setOpen] = useState(false);

    return(
        <div className="home">
            <div className="row text-white mt-4">
                <h5 className="col ms-4 ms-lg-5 logo position-fixed">Portfolio</h5>
                <div className='col d-flex justify-content-end me-4 position-fixed me-lg-5' style={{marginTop: '-1vh', animation: 'appear 2s'}}>
                <Hamburger rounded size={25} color="teal"  toggled={isOpen} toggle={setOpen} />
                </div>
                {isOpen ? (
          <div className="d-flex justify-content-end mt-4 position-absolute">
            <ul className="me-3 me-lg-4 list-unstyled text-end mt-5 position-fixed" style={{letterSpacing: '4px', fontFamily: 'Poppins'}}>
              <li>HOME</li>
              <li className="mt-3 mt-lg-5">ABOUT</li>
              <li className="mt-3 mt-lg-5">PROJECTS</li>
              <li className="mt-3 mt-lg-5">CAREER</li>
              <li className="mt-3 mt-lg-5">CONTACT</li>
            </ul>
          </div>
        ) : null}
            </div>
            <div className="home-content">
                <p className="text-white text-center position-absolute name">Soumita Basu</p>
                <div className="p-3 borderBottom position-absolute"></div>
                <ThreeScene/>
                <p className="text-white position-absolute overview text-center">UNDERGRADUATE COMPUTER SCIENCE AND ENGINEERING STUDENT</p>
            </div>
            <div className="indicator mx-auto">
  <span></span>
  <span></span>
  {/* <span></span> */}
</div>
        </div>
    )
}

export default Home;