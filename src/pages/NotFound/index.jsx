import React from "react";
import "./notfound.css";

const NotFound = () => {
    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center flex-col">
                <img
                    src="/LULogo.svg"
                    alt="LevelUpBeaute"
                    width={80}
                    height={80}
                    className="lg:w-20 md:w-16 lg:h-20 md:h-16 h-14 w-14"
                />
            </div>
        </>
    );
};

export default NotFound;
