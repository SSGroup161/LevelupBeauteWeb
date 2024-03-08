import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navbarRef = useRef();

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 0);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleSetActiveLink = (link) => {
        setActiveLink(link);
    };
    return (
        <>
            <div className="w-full h-28 fixed top-0 z-50" ref={navbarRef}>
                <div className="w-full h-full relative flex justify-center items-center md:mt-4 md:px-6">
                    <div
                        className={`navbar-container md:w-[60rem] w-64 bg-[#F6F1ED] shadow-md ${
                            dropdownOpen ? "rounded-t-full" : "rounded-full"
                        } flex items-center justify-between px-14 ${
                            isScrolled ? "md:h-14 h-16" : "lg:h-24 md:h-20 h-16"
                        }`}
                    >
                        <div className="md:flex items-center justify-center lg:gap-14 md:gap-7 hidden">
                            <a
                                href="#"
                                className={`link-underline font-roboto uppercase md:text-[11px] text-xs font-medium text-[#916D4F] pb-1 ${
                                    activeLink === "bestDeals" ? "active" : ""
                                }`}
                                onClick={() => handleSetActiveLink("bestDeals")}
                            >
                                Best Deals
                            </a>
                            <a
                                href="#"
                                className={`link-underline font-roboto uppercase md:text-[11px] text-xs font-medium text-[#916D4F] pb-1 ${
                                    activeLink === "getPromo" ? "active" : ""
                                }`}
                                onClick={() => handleSetActiveLink("getPromo")}
                            >
                                Get Promo
                            </a>
                            <a
                                href="#"
                                className={`link-underline font-roboto uppercase md:text-[11px] text-xs font-medium text-[#916D4F] pb-1 ${
                                    activeLink === "ourProduct" ? "active" : ""
                                }`}
                                onClick={() =>
                                    handleSetActiveLink("ourProduct")
                                }
                            >
                                Our Product
                            </a>
                        </div>
                        <div className="md:flex items-center justify-center lg:gap-14 md:gap-7 hidden">
                            <a
                                href="#"
                                className={`link-underline font-roboto uppercase md:text-[11px] text-xs font-medium text-[#916D4F] pb-1 ${
                                    activeLink === "aboutUs" ? "active" : ""
                                }`}
                                onClick={() => handleSetActiveLink("aboutUs")}
                            >
                                About US
                            </a>
                            <a
                                href="#"
                                className={`link-underline font-roboto uppercase md:text-[11px] text-xs font-medium text-[#916D4F] pb-1 ${
                                    activeLink === "newsEvent" ? "active" : ""
                                }`}
                                onClick={() => handleSetActiveLink("newsEvent")}
                            >
                                News & Event
                            </a>
                            <a
                                href="#"
                                className={`link-underline font-roboto uppercase md:text-[11px] text-xs font-medium text-[#916D4F] pb-1 ${
                                    activeLink === "login" ? "active" : ""
                                }`}
                                onClick={() => handleSetActiveLink("login")}
                            >
                                Login here
                            </a>
                        </div>
                    </div>
                    <div
                        className="absolute flex flex-col items-center md:hidden"
                        style={{ top: `60px` }}
                    >
                        <div
                            className={`dropdown-container w-64 rounded-t-3xl bg-[#F6F1ED] pt-6 ${
                                dropdownOpen ? "open opacity-100" : "opacity-65"
                            }`}
                        >
                            <div className="flex flex-row justify-between items-center px-4">
                                <div className="flex flex-col">
                                    <a
                                        href="#"
                                        className={`link-underline font-roboto uppercase my-2 w-28 md:text-[11px] text-xs text-[#916D4F] pb-1 ${
                                            activeLink === "bestDeals"
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handleSetActiveLink("bestDeals")
                                        }
                                    >
                                        Best Deals
                                    </a>
                                    <a
                                        href="#"
                                        className={`link-underline font-roboto uppercase my-2 w-28 md:text-[11px] text-xs text-[#916D4F] pb-1 ${
                                            activeLink === "getPromo"
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handleSetActiveLink("getPromo")
                                        }
                                    >
                                        Get Promo
                                    </a>
                                    <a
                                        href="#"
                                        className={`link-underline font-roboto uppercase my-2 w-28 md:text-[11px] text-xs text-[#916D4F] pb-1 ${
                                            activeLink === "ourProduct"
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handleSetActiveLink("ourProduct")
                                        }
                                    >
                                        Our Product
                                    </a>
                                </div>
                                <div className="flex flex-col">
                                    <a
                                        href="#"
                                        className={`link-underline font-roboto uppercase text-end my-2 w-28 md:text-[11px] text-xs text-[#916D4F] pb-1 ${
                                            activeLink === "aboutUs"
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handleSetActiveLink("aboutUs")
                                        }
                                    >
                                        About US
                                    </a>
                                    <a
                                        href="#"
                                        className={`link-underline font-roboto uppercase text-end my-2 w-28 md:text-[11px] text-xs text-[#916D4F] pb-1 ${
                                            activeLink === "newsEvent"
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handleSetActiveLink("newsEvent")
                                        }
                                    >
                                        News & Event
                                    </a>
                                    <a
                                        href="#"
                                        className={`link-underline font-roboto uppercase text-end my-2 w-28 md:text-[11px] text-xs text-[#916D4F] pb-1 ${
                                            activeLink === "login"
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handleSetActiveLink("login")
                                        }
                                    >
                                        Login here
                                    </a>
                                </div>
                            </div>
                        </div>
                        <button
                            className={`flex flex-row justify-center z-50 items-center py-1 rounded-b-md bg-[#F6F1ED] w-12 transition-transform duration-300 ease-in-out transform-gpu md:hidden ${
                                dropdownOpen ? "mt-0" : "mt-0"
                            }`}
                            onClick={() => toggleDropdown()}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 18 10"
                                fill="none"
                                className={`${
                                    dropdownOpen ? "rotate-180" : "rotate-0"
                                } transform transition-transform duration-500 ease-in-out`}
                            >
                                <path
                                    d="M16 1.07107L9.58769 7.43757C9.19577 7.82669 8.56034 7.82669 8.16841 7.43757L1.75609 1.07107"
                                    stroke="#916D4F"
                                    strokeWidth="3"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`navbar-logo lg:w-24 lg:h-24 md:w-20 md:h-20 h-16 w-16 rounded-full absolute flex justify-center items-center bg-[#F6F1ED] ${
                            isScrolled ? "md:shadow-lg" : ""
                        }`}
                        style={{
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        <img
                            src="/LULogo.svg"
                            alt="LevelUpBeaute"
                            width={80}
                            height={80}
                            className="lg:w-20 md:w-16 lg:h-20 md:h-16 h-14 w-14"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
