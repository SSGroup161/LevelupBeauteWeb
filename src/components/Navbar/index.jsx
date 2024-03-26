import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const navbarRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [activeHome, setActiveHome] = useState(true);
    const [activeAbout, setActiveAbout] = useState(false);
    const [activeProduct, setActiveProduct] = useState(false);
    const [activeNews, setActiveNews] = useState(false);
    const [activeBestDeals, setActiveBestDeals] = useState(false);
    const [activePromo, setActivePromo] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 0);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    useEffect(() => {
        if (location.pathname === "/") {
            setActiveHome(true);
            setActiveAbout(false);
            setActiveProduct(false);
            setActiveNews(false);
            setActiveBestDeals(false);
            setActivePromo(false);
        } else if (location.pathname === "/about") {
            setActiveHome(false);
            setActiveAbout(true);
            setActiveProduct(false);
            setActiveNews(false);
            setActiveBestDeals(false);
            setActivePromo(false);
        } else if (location.pathname === "/product") {
            setActiveHome(false);
            setActiveAbout(false);
            setActiveProduct(true);
            setActiveNews(false);
            setActiveBestDeals(false);
            setActivePromo(false);
        } else if (
            location.pathname === "/news" ||
            location.pathname.startsWith("/news/detail/")
        ) {
            setActiveHome(false);
            setActiveAbout(false);
            setActiveProduct(false);
            setActiveNews(true);
            setActiveBestDeals(false);
            setActivePromo(false);
        } else if (location.pathname === "/best-deals") {
            setActiveHome(false);
            setActiveAbout(false);
            setActiveProduct(false);
            setActiveNews(false);
            setActiveBestDeals(true);
            setActivePromo(false);
        } else if (location.pathname === "/get-promo") {
            setActiveHome(false);
            setActiveAbout(false);
            setActiveProduct(false);
            setActiveNews(false);
            setActiveBestDeals(false);
            setActivePromo(true);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className="w-full h-28 fixed top-0 z-50" ref={navbarRef}>
                {/* <div className="md:hidden w-full h-16 bg-slate-200"></div> */}

                <div className="w-full h-full relative hidden md:flex justify-center items-center md:mt-4 md:px-6">
                    <div
                        className={`navbar-container md:w-[60rem] w-64 bg-[#F6F1ED] shadow-md ${
                            dropdownOpen ? "rounded-t-full" : "rounded-full"
                        } flex items-center justify-between px-14 ${
                            isScrolled ? "md:h-14 h-16" : "lg:h-24 md:h-20 h-16"
                        }`}
                    >
                        <div className="md:flex items-center justify-center lg:gap-14 md:gap-7 hidden">
                            <p
                                className={`link-underline cursor-pointer font-roboto uppercase md:text-[11px] text-xs font-medium text-[#916D4F] pb-1 ${
                                    activeBestDeals ? "active" : ""
                                }`}
                                onClick={() => navigate("/best-deals")}
                            >
                                Best Deals
                            </p>
                            <p
                                className={`link-underline cursor-pointer font-roboto uppercase md:text-[11px] text-xs font-medium text-[#916D4F] pb-1 ${
                                    activePromo ? "active" : ""
                                }`}
                                onClick={() => navigate("/get-promo")}
                            >
                                Get Promo
                            </p>
                            <p
                                className={`link-underline cursor-pointer font-roboto uppercase md:text-[11px] text-xs font-medium text-[#916D4F] pb-1 ${
                                    activeProduct ? "active" : ""
                                }`}
                                onClick={() => navigate("/product")}
                            >
                                Our Product
                            </p>
                        </div>
                        <div className="md:flex items-center justify-center lg:gap-14 md:gap-7 hidden">
                            <p
                                className={`link-underline cursor-pointer font-roboto uppercase md:text-[11px] text-xs font-medium text-[#916D4F] pb-1 ${
                                    activeAbout ? "active" : ""
                                }`}
                                onClick={() => navigate("/about")}
                            >
                                About US
                            </p>
                            <p
                                className={`link-underline cursor-pointer font-roboto uppercase md:text-[11px] text-xs font-medium text-[#916D4F] pb-1 ${
                                    activeNews ? "active" : ""
                                }`}
                                onClick={() => navigate("/news")}
                            >
                                News & Event
                            </p>
                            <p
                                href="#"
                                className={`link-underline cursor-pointer font-roboto uppercase md:text-[11px] text-xs font-medium text-[#916D4F] pb-1`}
                                onClick={() => navigate("/login")}
                            >
                                Login here
                            </p>
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
                                    <p
                                        className={`link-underline cursor-pointer font-roboto uppercase my-2 w-28 md:text-[11px] text-xs text-[#916D4F] pb-1 ${
                                            activeBestDeals ? "active" : ""
                                        }`}
                                        onClick={() => navigate("/best-deals")}
                                    >
                                        Best Deals
                                    </p>
                                    <p
                                        className={`link-underline cursor-pointer font-roboto uppercase my-2 w-28 md:text-[11px] text-xs text-[#916D4F] pb-1 ${
                                            activePromo ? "active" : ""
                                        }`}
                                        onClick={() => navigate("/get-promo")}
                                    >
                                        Get Promo
                                    </p>
                                    <p
                                        className={`link-underline cursor-pointer font-roboto uppercase my-2 w-28 md:text-[11px] text-xs text-[#916D4F] pb-1 ${
                                            activeProduct ? "active" : ""
                                        }`}
                                        onClick={() => navigate("/product")}
                                    >
                                        Our Product
                                    </p>
                                </div>
                                <div className="flex flex-col">
                                    <p
                                        className={`link-underline cursor-pointer font-roboto uppercase text-end my-2 w-28 md:text-[11px] text-xs text-[#916D4F] pb-1 ${
                                            activeAbout ? "active" : ""
                                        }`}
                                        onClick={() => navigate("/about")}
                                    >
                                        About US
                                    </p>
                                    <p
                                        className={`link-underline cursor-pointer font-roboto uppercase text-end my-2 w-28 md:text-[11px] text-xs text-[#916D4F] pb-1 ${
                                            activeNews ? "active" : ""
                                        }`}
                                        onClick={() => navigate("/news")}
                                    >
                                        News & Event
                                    </p>
                                    <p
                                        className={`link-underline cursor-pointer font-roboto uppercase text-end my-2 w-28 md:text-[11px] text-xs text-[#916D4F] pb-1`}
                                        onClick={() => navigate("/login")}
                                    >
                                        Login here
                                    </p>
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
                            className="lg:w-20 md:w-16 lg:h-20 md:h-16 h-14 w-14 cursor-pointer"
                            onClick={() => navigate("/")}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
