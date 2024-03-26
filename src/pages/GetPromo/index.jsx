import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ParallaxText from "../../components/ParallaxText";

const GetPromo = () => {
    return (
        <>
            <Navbar />
            <div className="w-full h-screen"></div>
            <ParallaxText />
            <Footer />
        </>
    );
};

export default GetPromo;
