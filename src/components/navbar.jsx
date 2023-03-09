import React, {useState} from "react";
import { Sling as Hamburger } from 'hamburger-react'
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    return(
        <div className="row text-white mt-4">
                <h5 className="col ms-4 ms-lg-5 logo position-fixed">Portfolio</h5>
                <div className='col d-flex justify-content-end me-4 position-fixed me-lg-5' style={{marginTop: '-1vh', animation: 'appear 2s'}}>
                <Hamburger rounded size={25} color="teal"  toggled={isOpen} toggle={setOpen} />
                </div>
                {isOpen ? (
          <div className="d-flex justify-content-end mt-4 position-absolute">
          <ul className="me-3 me-lg-4 list-unstyled text-end mt-5 position-fixed" style={{ letterSpacing: '4px', fontFamily: 'Poppins' }}>
            <Link to='/' className="text-decoration-none"><li className='active fade-in' style={{ animationDelay: '0.2s' }}>HOME</li></Link>
            <li className='mt-3 mt-lg-5 fade-in' style={{ animationDelay: '0.4s' }}>ABOUT</li>
            <li className="mt-3 mt-lg-5 fade-in" style={{ animationDelay: '0.6s' }}>PROJECTS</li>
            <li className="mt-3 mt-lg-5 fade-in" style={{ animationDelay: '0.8s' }}>CAREER</li>
            <li className="mt-3 mt-lg-5 fade-in" style={{ animationDelay: '1s' }}>CONTACT</li>
          </ul>
        </div>        
        ) : null}
        </div>
    )
}

export default Navbar;