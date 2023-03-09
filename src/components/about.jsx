import React, {useState} from "react";
import Navbar from "./navbar";

const About = () => {
    const [activeItem, setActiveItem] = useState('about');

    const handleSetActiveItem = (item) => {
        setActiveItem(item);
      };

    return(
            <div className="text-white">
                <Navbar className='position-fixed' activeItem={activeItem} setActiveItem={handleSetActiveItem}/>
                <div className="position-absolute mt-5 ms-4 ms-lg-5">
                <h2 className="mt-5">ABOUT ME</h2>
                <div className="o"></div>
                </div>
            </div>
    )
}

export default About;