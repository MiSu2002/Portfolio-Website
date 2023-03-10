import React, {useState} from "react";
import Navbar from "./navbar";

const About = () => {
    const [activeItem, setActiveItem] = useState('about');

    const handleSetActiveItem = (item) => {
        setActiveItem(item);
      };

    return(
            <div className="text-white mb-5">
                <Navbar className='position-fixed' activeItem={activeItem} setActiveItem={handleSetActiveItem}/>
                <div className="position-absolute mt-5 ms-4 ms-lg-5">
                <style>
                    {`
                    .about-content{
                        font-family: Poppins;
                        width: 50%;
                    }

                    .about-content .para{
                        font-size: 1.5rem;
                        line-height: 1.7;
                        text-align: justify;
                    }

                    @media screen and (max-width: 1199px){
                        .about-content{
                            width: 75%;
                        }
                        .about-content .para{
                            font-size: 1.2rem;
                        }
                    }
                    @media screen and (min-width: 1200px) and (max-width: 1599px){
                        .about-content{
                            width: 65%;
                        }
                    }
                    .hello{
                        animation: appear 1.7s;
                        margin-left: -5%;
                        color: rgb(0, 172, 172,0.4);
                    }
                    .line{
                        border: 1px solid rgb(0, 172, 172,0.1);
                        background-color: rgb(0, 172, 172,0.1);
                    }
                    `}
                </style>
                    <div className="mt-4 mb-5 p-3 mx-auto about-content">
                    <p className="mb-5 hello"> - Hello, World!</p>
                    <div className="line" style={{animation: 'appear 2.7s'}}></div>
                    <p className="mt-4 p-3 p-xl-4 para" style={{animation: 'appear 3.7s'}}>I am Soumita Basu from Kolkata, India.</p>
                    <div className="line" style={{animation: 'appear 4.7s'}}></div>
                    <p className="mt-4 p-3 p-xl-4 para" style={{animation: 'appear 5.7s'}}>I am a junior undergraduate, currently pursuing B.Tech in Computer Science and Engineering from Maulana Abdul Kalam Azad University of Technology, Kolkata.</p>
                    <div className="line" style={{animation: 'appear 6.7s'}}></div>
                    <p className="mt-4 p-3 p-xl-4 para" style={{animation: 'appear 7.7s'}}>I have gained both professional and student experiences in some of the most renowned product-based companies like Google, Amazon, Microsoft-EY and Goldman Sachs, and have worked with the latest technologies.</p>
                    <div className="line" style={{animation: 'appear 8.7s'}}></div>
                    <p className="mt-4 p-3 p-xl-4 para" style={{animation: 'appear 9.7s'}}>I am currently working as an Azure Developer Intern in Microsoft-Future Ready Talent. I am also a student in AWS Machine Learning, sponsored by Amazon Web Services.</p>
                    <div className="line" style={{animation: 'appear 10.7s'}}></div>
                    <p className="mt-4 p-3 p-xl-4 para" style={{animation: 'appear 11.7s'}}>Previously, I have worked in Front-end Development for Graphe, Kolkata and Android App Development for AICTE-SmartInternz-Google.</p>
                    <div className="line" style={{animation: 'appear 12.7s'}}></div>
                    <p className="mt-4 p-3 p-xl-4 para" style={{animation: 'appear 13.7s'}}> I have attended a Forage Engineering Programme hosted by Goldman Sachs and I have also worked as the Core Team Program Lead for the Google Developer Student Clubs on our campus.</p>
                    <div className="line" style={{animation: 'appear 14.7s'}}></div>
                    </div>
                    <div className='position-absolute ms-lg-2'
          style={{marginTop: "-80vh", color: "rgb(0, 172, 172, 0.5)", fontSize: "0.8rem"}}>
          <p className="d-flex justify-content-center mb-2">
            A <br />B <br />O <br/>U <br/>T
          </p>
          <p className="pt-5 ms-1" style={{ borderLeft: "2px solid rgb(0, 172, 172, 0.5)" }}></p>
        </div>
                </div>
            </div>
    )
}

export default About;