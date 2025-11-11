import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import errorImg from "../assets/error-404.png";

const ErrorPage = () => {
    return (
        <div>
             <Navbar />
      <div className="flex justify-center items-center w-full min-h-screen">
        <img src={errorImg} alt="" />
      </div>
        
      <Footer />
        </div>
    );
};

export default ErrorPage;