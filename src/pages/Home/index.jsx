import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ParallaxText from "../../components/ParallaxText";
import { Carousel } from "flowbite-react";
import "./Home.css";

const Home = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 0);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1100);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scrollToDown = () => {
        window.scrollTo({
            top: 900,
            behavior: "smooth",
        });
    };

    return (
        <div className="max-w-screen-3xl m-auto overflow-visible bg-[#c8ba9f]">
            <Navbar />
            <section className="home-container h-96 md:h-[40rem] lg:h-screen flex flex-col relative">
                <img
                    src="/MainContent.png"
                    alt="MainContent"
                    className="absolute m-auto w-full"
                    width={"full"}
                />
                <div
                    className="h-full w-full z-20 flex justify-between items-center flex-col pt-20 md:px-14 lg:px-36 lg:py-4 md:pt-32 lg:pt-32 relative"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-anchor-placement="top-bottom"
                >
                    <div className="w-full flex justify-between items-center">
                        <div className="flex floating-img flex-col items-center justify-center ms-8 mt-8 md:ms-12">
                            <img
                                src="/Asset2.png"
                                alt="Asset2"
                                width={50}
                                className="md:w-20 lg:w-24 hover:scale-125 transition-transform duration-300 ease-in-out"
                            />
                            <h1 className="text-description mt-2 font-roboto text-[0.5rem] md:text-xs font-medium text-[#916D4F]">
                                HYDROLYZED COLLAGEN
                            </h1>
                        </div>
                        <div className="flex floating-img-satu flex-col items-center justify-center me-8 md:me-20 mt-14">
                            <img
                                src="/Asset3.png"
                                alt="Asset3"
                                width={50}
                                className="md:w-28 lg:w-32 hover:scale-125 transition-transform duration-300 ease-in-out"
                            />
                            <h1 className="text-description mt-2 font-roboto text-[0.5rem] md:text-xs uppercase font-medium text-[#916D4F]">
                                Hyaluronic acid
                            </h1>
                        </div>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <div className="flex floating-img-dua flex-col items-center justify-center ms-12 md:pb-16 lg:pb-8 md:ms-28 lg:ms-32">
                            <img
                                src="/Asset4.png"
                                alt="Asset4"
                                width={50}
                                className="md:w-24 lg:w-28 hover:scale-125 transition-transform duration-300 ease-in-out"
                            />
                            <h1 className="text-description mt-2 font-roboto text-[0.5rem] uppercase md:text-xs font-medium text-[#916D4F]">
                                Centella Asiatica
                            </h1>
                        </div>
                        <div className="flex floating-img-tiga flex-col items-center justify-center me-12 mb-4">
                            <img
                                src="/Asset1.png"
                                alt="Asset1"
                                width={50}
                                className="md:w-20 lg:w-24 hover:scale-125 transition-transform duration-300 ease-in-out"
                            />
                            <h1 className="text-description mt-2 font-roboto uppercase text-[0.5rem] md:text-xs font-medium text-[#916D4F]">
                                AMARANT EXTRACT
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-center md:justify-between absolute bottom-0 items-end lg:px-20 md:px-12 z-30">
                    <div className="lg:mb-16 md:mb-10 mb-4 md:w-60">
                        <h1 className="font-roboto text-[#916D4F] text-xs md:text-sm tracking-wider text-center md:text-start">
                            Level Up Hydro B5
                        </h1>
                        <h1 className="font-roboto text-[#916D4F] text-sm md:text-lg tracking-wider text-center md:text-start">
                            Moisturizing Cream
                        </h1>
                    </div>
                    <div
                        className={`parentSVG ${
                            isScrolled ? "opacity-0" : "opacity-100"
                        }`}
                    >
                        <svg
                            id="Layer_1"
                            enableBackground="new 0 0 4000 4000"
                            height="60"
                            viewBox="0 0 4000 4000"
                            width="512"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={() => scrollToDown()}
                            className={`scrollDownBounce hidden md:block z-40 cursor-pointer w-16 h-16`}
                        >
                            <g>
                                <g>
                                    <path
                                        d="m2000.007 2839.76c-29.431 0-58.862-11.228-81.317-33.683l-1150.007-1149.997c-44.91-44.91-44.911-117.724-.001-162.634 44.91-44.912 117.725-44.911 162.635 0l1068.69 1068.681 1068.676-1068.669c44.911-44.91 117.724-44.91 162.635.001 44.91 44.91 44.91 117.724 0 162.634l-1149.994 1149.984c-22.455 22.455-51.887 33.683-81.317 33.683z"
                                        fill="#ffffff"
                                    />
                                </g>
                                <g>
                                    <path
                                        d="m2000 2149.761c-30.5 0-59.75-12.116-81.317-33.683l-460-460c-44.91-44.91-44.91-117.724 0-162.634 44.91-44.911 117.725-44.911 162.635 0l378.682 378.682 378.682-378.683c44.912-44.912 117.727-44.909 162.635 0 44.91 44.91 44.91 117.725 0 162.634l-459.999 460c-21.567 21.568-50.818 33.684-81.318 33.684z"
                                        fill="#ffffff"
                                    />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className="opacity-0 w-60 hidden md:block">
                        <h1>Level Up Hydro B5</h1>
                        <h1>Moisturizing Cream</h1>
                    </div>
                </div>
            </section>
            <section className="home-two-container bg-[#F5EDEA] flex flex-col items-center ">
                <h1 className="font-playfair italic mt-12 text-4xl md:text-4xl text-[#916D4F]">
                    #levelupyourskin
                </h1>
                <div className="w-full h-full flex flex-col justify-end items-center">
                    <img
                        src="/assetModel.svg"
                        alt="Asset Model"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        width={600}
                    />
                    <div className="w-full h-full flex mt-8 justify-between items-center md:px-8 flex-col md:flex-row lg:px-32 gap-8 md:gap-0">
                        <div className="flex flex-col justify-center items-center w-36">
                            <svg
                                width="50"
                                height="50"
                                viewBox="0 0 60 61"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mb-4"
                            >
                                <path
                                    d="M49.476 16.244C49.284 15.038 48.228 14.138 47.01 14.138C47.004 14.138 46.992 14.138 46.986 14.138C39.414 14.216 32.112 16.916 26.31 21.752C26.13 19.628 25.524 17.558 24.522 15.662C23.154 13.076 21.096 10.916 18.582 9.41603C17.568 8.81003 16.302 8.97803 15.51 9.82403C11.742 13.838 9.71402 19.082 9.80402 24.59C9.88802 29.894 11.928 34.886 15.564 38.72C15.222 40.028 14.964 41.36 14.79 42.716C14.718 43.274 15.108 43.784 15.672 43.862C15.714 43.868 15.762 43.868 15.804 43.868C16.308 43.868 16.746 43.496 16.812 42.98C16.998 41.57 17.274 40.19 17.646 38.852C17.688 38.762 17.712 38.672 17.724 38.576C21.402 25.682 33.294 16.322 47.022 16.178C47.022 16.178 47.022 16.178 47.028 16.178C47.244 16.178 47.448 16.352 47.484 16.562C48.24 21.332 48.264 26.168 47.556 30.944C47.544 30.98 47.532 31.016 47.526 31.052C46.116 37.106 42.18 42.278 36.714 45.236C31.896 47.852 26.286 48.536 21.024 47.21C22.8 46.04 24.504 44.756 26.13 43.358C30.42 39.668 34.026 35.306 36.846 30.404C37.128 29.918 36.96 29.294 36.468 29.012C35.982 28.73 35.358 28.898 35.076 29.39C30.96 36.5 25.074 42.44 18.078 46.628C18.048 46.64 18.024 46.658 17.994 46.676C15.75 48.014 13.398 49.166 10.95 50.126C10.428 50.33 10.164 50.924 10.374 51.446C10.53 51.848 10.914 52.094 11.322 52.094C11.448 52.094 11.574 52.07 11.694 52.022C14.118 51.074 16.446 49.946 18.678 48.644C21.162 49.484 23.742 49.904 26.316 49.904C30.24 49.904 34.146 48.938 37.662 47.024C43.578 43.82 47.862 38.24 49.44 31.706C49.476 31.622 49.506 31.532 49.518 31.436C50.292 26.396 50.274 21.284 49.476 16.244ZM20.046 28.7C20.034 27.608 19.986 26.594 19.902 25.622C19.716 23.546 19.362 21.362 18.822 18.932C18.702 18.38 18.156 18.038 17.604 18.158C17.052 18.278 16.71 18.824 16.83 19.376C17.352 21.716 17.694 23.816 17.868 25.802C18.036 27.704 18.054 29.798 17.916 32.372C17.268 33.68 16.704 35.03 16.236 36.422C10.092 29.09 10.302 18.332 16.986 11.216C17.118 11.072 17.346 11.054 17.532 11.162C21.906 13.766 24.48 18.482 24.318 23.546C22.71 25.124 21.282 26.852 20.046 28.7Z"
                                    fill="#916D4F"
                                />
                            </svg>
                            <div>
                                <h1 className=" text-center font-roboto text-[#916D4F] text-sm font-base">
                                    Natural Ingredients
                                </h1>
                                <p className="text-center font-roboto text-[#916D4F] font-light text-sm">
                                    Made with various natural ingredients.
                                </p>
                            </div>
                        </div>

                        <div className="h-36 hidden md:block w-[1px] bg-[#916D4F]"></div>

                        <div className="flex flex-col justify-center items-center w-36">
                            <svg
                                width="65"
                                height="40"
                                viewBox="0 0 81 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mb-4"
                            >
                                <path
                                    d="M52.4713 27.8144C52.1888 27.1452 52.3283 26.3717 52.8266 25.8433L58.3225 20.0174C59.3525 18.9254 59.7143 17.4139 59.2902 15.9741C58.8663 14.5342 57.7432 13.46 56.286 13.1004L48.3652 11.146C47.8164 11.0105 47.3678 10.6376 47.1346 10.123L44.0608 3.34013C43.3756 1.8281 41.9186 0.888916 40.2588 0.888916C38.5988 0.888916 37.1418 1.82826 36.4568 3.34013L33.3829 10.1228C33.1496 10.6376 32.7011 11.0105 32.1525 11.146L24.2316 13.1004C22.7743 13.46 21.6511 14.5343 21.2272 15.9741C20.8033 17.4139 21.1651 18.9254 22.1951 20.0174L27.6908 25.8433C28.1892 26.3717 28.3286 27.1452 28.0461 27.8142L25.7275 33.3043C25.0667 34.8694 25.3884 36.6017 26.5673 37.825C27.378 38.6663 28.4441 39.1113 29.5473 39.1111C30.0484 39.1111 30.5574 39.0194 31.0534 38.8311L31.8824 38.5168C32.487 38.2875 32.7912 37.6116 32.562 37.0071C32.3329 36.4025 31.6569 36.0982 31.0524 36.3275L30.2232 36.642C29.5149 36.9103 28.7788 36.7453 28.2532 36.2001C27.7277 35.6549 27.5898 34.9128 27.8844 34.2151L30.2029 28.7248C30.8463 27.2014 30.5287 25.4396 29.3939 24.2365L23.8982 18.4107C23.446 17.9312 23.2869 17.2675 23.4732 16.6351C23.6594 16.0028 24.1526 15.5311 24.7924 15.3732L32.7135 13.4188C33.9628 13.1102 34.9841 12.2612 35.5152 11.0892L38.5891 4.30632C38.8946 3.63249 39.5188 3.22993 40.2586 3.22993C40.9985 3.22993 41.6227 3.63233 41.9281 4.30632L45.002 11.0893C45.5332 12.2612 46.5545 13.1104 47.804 13.4188L55.7248 15.3732C56.3648 15.5311 56.858 16.0028 57.0441 16.6351C57.2302 17.2675 57.0714 17.9312 56.6189 18.4107L51.123 24.2367C49.9883 25.4396 49.6708 27.2013 50.314 28.725L52.6326 34.2151C52.9273 34.9128 52.7894 35.6549 52.2639 36.2001C51.7385 36.7456 51.0017 36.9108 50.2939 36.6418L41.739 33.3963C40.7842 33.0341 39.7326 33.0341 38.7777 33.3963L35.728 34.5532C35.1235 34.7826 34.8194 35.4585 35.0487 36.063C35.278 36.6674 35.9539 36.9718 36.5584 36.7425L39.6079 35.5856C40.0271 35.4264 40.4892 35.4264 40.9086 35.5856L49.4632 38.831C51.0515 39.4339 52.7705 39.0482 53.9498 37.825C55.1287 36.6015 55.4503 34.8693 54.7894 33.3043L52.4713 27.8144Z"
                                    fill="#916D4F"
                                />
                                <path
                                    d="M20.683 22.0627L16.252 20.9693C16.0993 20.9317 15.9748 20.828 15.9098 20.6849L14.1902 16.8904C13.7222 15.8577 12.7272 15.2162 11.5935 15.2162C10.4598 15.2162 9.46477 15.8576 8.99682 16.8904L7.27719 20.6849C7.21226 20.828 7.0877 20.9317 6.93504 20.9693L2.50384 22.0627C1.50862 22.3082 0.741443 23.0419 0.451899 24.0254C0.162354 25.0089 0.409599 26.0413 1.11293 26.7869L4.18726 30.046C4.32586 30.1929 4.36473 30.408 4.28606 30.594L2.98912 33.6654C2.53771 34.7345 2.75748 35.9175 3.56259 36.7528C4.11624 37.3274 4.84439 37.6313 5.59799 37.6313C5.94029 37.6313 6.2879 37.5687 6.62661 37.4401L11.4123 35.6245L11.4124 35.6243C11.5289 35.5801 11.6572 35.58 11.7739 35.6245L16.5596 37.4401C17.6443 37.8512 18.8185 37.5882 19.6238 36.7528C20.4289 35.9173 20.6487 34.7341 20.1973 33.6654L18.9002 30.5942C18.8217 30.4081 18.8605 30.1929 18.999 30.046L22.0736 26.7869C22.777 26.0411 23.0242 25.0086 22.7345 24.0254C22.4454 23.0419 21.6782 22.3082 20.683 22.0627ZM20.3708 25.1803L17.2962 28.4396C16.5214 29.2612 16.3044 30.4645 16.7438 31.505L18.0409 34.5763C18.1547 34.8459 18.0255 35.0377 17.9384 35.1281C17.8511 35.2185 17.6643 35.3549 17.3905 35.251L12.6048 33.4355C12.2787 33.3117 11.9361 33.2499 11.5935 33.2499C11.2509 33.2499 10.9081 33.3117 10.5822 33.4355L10.5824 33.4353L5.79653 35.251C5.52338 35.3551 5.33607 35.2186 5.24882 35.1281C5.16172 35.0377 5.03248 34.8457 5.14627 34.5763L6.44321 31.505C6.8826 30.4645 6.66579 29.2612 5.89065 28.4394L2.81617 25.1803C2.64135 24.995 2.66711 24.7914 2.69802 24.6866C2.72892 24.5817 2.81758 24.3969 3.06482 24.3357L7.49603 23.2423C8.34936 23.0317 9.04692 22.4518 9.40967 21.6513L11.1293 17.8567C11.2473 17.5964 11.4708 17.5575 11.5935 17.5575C11.7162 17.5575 11.9397 17.5964 12.0577 17.8567L13.7773 21.6513C14.1401 22.4518 14.8377 23.0319 15.691 23.2423L20.1222 24.3357C20.3693 24.3969 20.4581 24.5817 20.489 24.6866C20.5199 24.7914 20.5455 24.9951 20.3708 25.1803Z"
                                    fill="#916D4F"
                                />
                                <path
                                    d="M79.56 26.787C80.5862 25.6993 80.5916 23.987 79.5724 22.8883C79.1324 22.4144 78.3919 22.3867 77.9178 22.8265C77.4439 23.2662 77.4162 24.0069 77.856 24.481C78.0149 24.6522 78.0692 24.9553 77.857 25.1803L74.7828 28.4394C74.0075 29.2611 73.7907 30.4643 74.2301 31.505L75.5272 34.5763C75.641 34.8459 75.5117 35.0377 75.4248 35.1281C75.3378 35.2185 75.151 35.3552 74.8769 35.251L70.0911 33.4352C69.4391 33.1881 68.7211 33.1878 68.0688 33.4352L63.2831 35.251C63.0096 35.3548 62.8225 35.2185 62.7352 35.1281C62.648 35.0377 62.5189 34.8457 62.6327 34.5763L63.9298 31.505C64.3692 30.4645 64.1524 29.2612 63.3774 28.4396L60.3026 25.1803C60.1278 24.995 60.1535 24.7916 60.1843 24.6867C60.2152 24.5818 60.304 24.397 60.5512 24.3358L64.9818 23.2424C65.8355 23.032 66.533 22.4521 66.8961 21.6513L68.6157 17.8567C68.7337 17.5964 68.9572 17.5575 69.0801 17.5575C69.2029 17.5575 69.4263 17.5964 69.5443 17.8567L71.2641 21.6513C71.627 22.4523 72.3247 23.0322 73.1774 23.2423L73.5339 23.3303C74.1611 23.4858 74.7961 23.1023 74.9512 22.4746C75.1062 21.847 74.7232 21.2125 74.0955 21.0573L73.7384 20.9691C73.5861 20.9317 73.4617 20.828 73.3967 20.6849L71.6769 16.8904C71.2091 15.8579 70.2141 15.2162 69.0804 15.2162H69.0802C67.9464 15.2162 66.9514 15.8576 66.4834 16.8904L64.7638 20.6849C64.6988 20.828 64.5743 20.9317 64.4216 20.9693L59.9906 22.0629C58.9952 22.3084 58.2282 23.042 57.9386 24.0255C57.6492 25.0089 57.8963 26.0413 58.5997 26.7869L61.6743 30.0462C61.8128 30.1929 61.8515 30.408 61.773 30.594L60.4759 33.6656C60.0244 34.7345 60.2444 35.9175 61.0495 36.7528C61.8547 37.5884 63.0288 37.8514 64.1137 37.4401L68.8992 35.6243C69.0159 35.5801 69.1444 35.5801 69.2608 35.6243L74.0465 37.4401C74.3854 37.5686 74.7328 37.6313 75.0751 37.6313C75.8287 37.6313 76.5569 37.3274 77.1107 36.7528C77.9158 35.9173 78.1354 34.7343 77.6842 33.6654L76.3871 30.594C76.3086 30.4081 76.3473 30.1932 76.486 30.0462L79.56 26.787Z"
                                    fill="#916D4F"
                                />
                            </svg>

                            <h1 className="font-roboto text-[#916D4F] text-sm font-base">
                                Happy Customer
                            </h1>
                            <p className="text-center font-roboto text-[#916D4F] font-light text-sm">
                                Lots of positive responses.
                            </p>
                        </div>

                        <div className="h-36 hidden md:block w-[1px] bg-[#916D4F]"></div>

                        <div className="flex flex-col justify-center items-center w-36">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 61 61"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mb-4"
                            >
                                <g clipPath="url(#clip0_98_169)">
                                    <path
                                        d="M33.1928 5.62742C33.8399 5.62742 34.3647 5.10277 34.3647 4.45555V1.67188C34.3647 1.02465 33.8399 0.5 33.1928 0.5C32.5457 0.5 32.0209 1.02465 32.0209 1.67188V4.45555C32.0209 5.10277 32.5457 5.62742 33.1928 5.62742Z"
                                        fill="#916D4F"
                                    />
                                    <path
                                        d="M55.9331 41.2543C55.9331 39.8129 55.2927 38.5183 54.2814 37.6402C55.2927 36.762 55.9331 35.4676 55.9331 34.0262C55.9331 31.3871 53.7861 29.2402 51.1471 29.2402H36.9147L38.5575 23.039C39.9141 17.9219 37.5216 13.1407 34.527 11.6452C32.7702 10.7675 31.3595 10.6277 30.2142 11.2176C28.6502 12.0232 28.1568 13.8992 27.8564 15.8055C26.7154 23.011 25.0083 27.8787 19.7153 31.8868C19.345 30.4985 18.0772 29.4726 16.5738 29.4726H8.6515C6.85876 29.4726 5.40013 30.9311 5.40013 32.724V56.302C5.40013 58.0947 6.85865 59.5534 8.6515 59.5534H16.574C18.0853 59.5534 19.3589 58.5167 19.7216 57.1173C23.2323 59.1173 28.6276 60.5 32.0501 60.5H48.3966C51.0356 60.5 53.1826 58.353 53.1826 55.7141C53.1826 54.7518 52.897 53.8548 52.4064 53.1036C54.4364 52.5491 55.9331 50.6873 55.9331 48.4825C55.9331 47.0411 55.2927 45.7466 54.2814 44.8685C55.2927 43.9903 55.9331 42.6957 55.9331 41.2543ZM17.4816 56.302C17.4816 56.7939 17.066 57.2096 16.5741 57.2096H8.6515C8.15955 57.2096 7.74388 56.7941 7.74388 56.302V32.724C7.74388 32.232 8.15943 31.8164 8.6515 31.8164H16.574C17.0659 31.8164 17.4815 32.2319 17.4815 32.724V56.302H17.4816ZM46.2209 38.8121H51.1471C52.4937 38.8121 53.5894 39.9077 53.5894 41.2543C53.5894 42.6009 52.4937 43.6965 51.1471 43.6965H46.2209C45.5738 43.6965 45.049 44.2211 45.049 44.8684C45.049 45.5156 45.5738 46.0402 46.2209 46.0402H51.1471C52.4937 46.0402 53.5894 47.1358 53.5894 48.4824C53.5894 49.8309 52.4937 50.928 51.1471 50.928H48.3966H46.2209C45.5738 50.928 45.049 51.4527 45.049 52.0999C45.049 52.7471 45.5738 53.2718 46.2209 53.2718H48.3966C49.7432 53.2718 50.8389 54.3673 50.8389 55.7139C50.8389 57.0605 49.7433 58.1562 48.3967 58.1562H32.0502C28.68 58.1562 22.6981 56.5098 19.8253 54.4053V34.6823C23.0686 32.5167 25.3468 30.0835 26.9623 27.0643C28.4401 24.3021 29.4 21.0445 30.1717 16.1712C30.2793 15.488 30.5651 13.6735 31.2876 13.3013C31.7033 13.087 32.4819 13.2435 33.4798 13.7422C35.3746 14.6884 37.406 18.2368 36.2919 22.4387L34.259 30.112C34.0654 30.8429 34.6358 31.584 35.3918 31.584H51.147C52.4936 31.584 53.5893 32.6796 53.5893 34.0262C53.5893 35.3728 52.4936 36.4684 51.147 36.4684H46.2208C45.5736 36.4684 45.0489 36.993 45.0489 37.6402C45.0489 38.2875 45.5738 38.8121 46.2209 38.8121Z"
                                        fill="#916D4F"
                                    />
                                    <path
                                        d="M12.8868 35.9734C12.2395 35.9734 11.7149 36.5013 11.7149 37.1485C11.7149 37.7958 12.2395 38.3204 12.8868 38.3204C13.534 38.3204 14.0586 37.7958 14.0586 37.1485V37.1419C14.0586 36.4948 13.534 35.9734 12.8868 35.9734Z"
                                        fill="#916D4F"
                                    />
                                    <path
                                        d="M19.7161 6.27895L21.7989 8.12583C22.022 8.32364 22.2995 8.4209 22.5759 8.4209C22.8995 8.4209 23.2217 8.28766 23.4532 8.02657C23.8827 7.54235 23.8382 6.80161 23.354 6.37223L21.2712 4.52536C20.787 4.09586 20.0463 4.1404 19.6168 4.62461C19.1875 5.10895 19.2319 5.84958 19.7161 6.27895Z"
                                        fill="#916D4F"
                                    />
                                    <path
                                        d="M43.8097 8.42103C44.0861 8.42103 44.3637 8.32376 44.5868 8.12595L46.6696 6.27907C47.1538 5.8497 47.1983 5.10907 46.769 4.62474C46.3396 4.14052 45.5992 4.09599 45.1146 4.52548L43.0319 6.37235C42.5476 6.80173 42.5031 7.54235 42.9325 8.02669C43.164 8.28778 43.4861 8.42103 43.8097 8.42103Z"
                                        fill="#916D4F"
                                    />
                                    <path
                                        d="M15.947 16.7112L18.7307 16.8274C18.7473 16.8281 18.764 16.8285 18.7805 16.8285C19.4052 16.8285 19.9241 16.3355 19.9505 15.7055C19.9774 15.0588 19.4752 14.5127 18.8285 14.4857L16.0449 14.3694C15.3983 14.3428 14.852 14.8446 14.8251 15.4914C14.7981 16.1381 15.3004 16.6842 15.947 16.7112Z"
                                        fill="#916D4F"
                                    />
                                    <path
                                        d="M46.4352 15.7055C46.4616 16.3355 46.9805 16.8286 47.6052 16.8286C47.6217 16.8286 47.6383 16.8282 47.6549 16.8275L50.4386 16.7112C51.0853 16.6843 51.5876 16.1381 51.5605 15.4914C51.5335 14.8448 50.9862 14.3436 50.3408 14.3695L47.5572 14.4857C46.9105 14.5128 46.4083 15.0589 46.4352 15.7055Z"
                                        fill="#916D4F"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_98_169">
                                        <rect
                                            width="60"
                                            height="60"
                                            fill="white"
                                            transform="translate(0.666687 0.5)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>

                            <h1 className="font-roboto text-[#916D4F] text-sm font-base">
                                Everyday Use
                            </h1>
                            <p className="text-center font-roboto text-[#916D4F] font-light text-sm">
                                Suitable to be used on a daily base.
                            </p>
                        </div>

                        <div className="h-36 hidden md:block w-[1px] bg-[#916D4F]"></div>

                        <div className="flex flex-col justify-center items-center w-36">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 60 61"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mb-4"
                            >
                                <path
                                    d="M30 59.3937C29.8856 59.3937 29.7712 59.3797 29.6587 59.3515C4.84781 53.149 3.30281 24.8046 3.42 16.2659C3.44718 14.3525 4.90312 12.725 6.80625 12.4775C17.6353 11.0778 25.1653 4.9859 27.9 2.43121C29.0775 1.33152 30.9216 1.33152 32.1 2.43121C34.8337 4.9859 42.3637 11.0778 53.1928 12.4775C55.0959 12.724 56.5519 14.3525 56.5791 16.265C56.6972 24.8037 55.155 53.1472 30.3403 59.3506C30.2287 59.3797 30.1144 59.3937 30 59.3937ZM30 4.4159C29.9353 4.4159 29.8706 4.43934 29.82 4.48715C26.8866 7.22746 18.8062 13.7637 7.16718 15.2675C6.64125 15.335 6.24 15.7812 6.2325 16.3043C6.12281 24.2815 7.52062 50.6553 30 56.5362C52.4822 50.6553 53.8781 24.2806 53.7675 16.3043C53.76 15.7812 53.3578 15.335 52.8328 15.2675C41.1928 13.7628 33.1134 7.22746 30.18 4.48715C30.1294 4.43934 30.0647 4.4159 30 4.4159Z"
                                    fill="#916D4F"
                                />
                                <path
                                    d="M41.4881 21.8674C40.8394 21.2402 39.8025 21.2468 39.1809 21.8796L25.3781 35.6824L20.8434 31.1656C20.7337 31.0493 20.4065 30.7774 19.679 30.7634C19.214 30.7634 18.7622 30.9124 18.4847 31.1665C18.2025 31.4712 18.0478 31.8612 18.0478 32.2634C18.0478 32.7237 18.209 33.1034 18.5381 33.4231L24.2259 39.1296C24.524 39.4381 24.9 39.5946 25.3415 39.5946C25.7794 39.5946 26.2078 39.4231 26.519 39.1221L41.4928 24.1774C42.1059 23.5531 42.1069 22.5199 41.4881 21.8674Z"
                                    fill="#916D4F"
                                />
                            </svg>
                            <h1 className="font-roboto text-[#916D4F] text-sm font-base">
                                Trusted and Certified
                            </h1>
                            <p className="text-center font-roboto text-[#916D4F] font-light text-sm">
                                All products are BPOM certified and Halal
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" bg-[#F5EDEA] flex flex-col justify-between items-center py-40">
                <h1 className="font-playfair font-medium italic text-3xl md:text-4xl text-[#916D4F]">
                    Glow Code Set Box
                </h1>
                <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`image-container ${
                        isHovered
                            ? "lg:w-[60rem] md:w-[35rem] w-[30rem] "
                            : "lg:w-[40rem] md:w-[30rem] w-72"
                    }  lg:mt-20 relative lg:mb-12 h-[30rem] lg:h-[30rem] md:h-[55rem]`}
                >
                    <img
                        src={
                            isHovered
                                ? isMobile
                                    ? "/GlowCodeSetResponsive.svg"
                                    : "/GlowCodeSet.svg"
                                : "/LevelupBox_.png"
                        }
                        alt={isHovered ? "GlowCodeSet" : "LevelupBox"}
                        className="transition-image"
                    />
                </div>
                <h1 className="font-roboto tracking-wider font-light text-[#916D4F]">
                    Hover to details
                </h1>
            </section>
            <section className="bg-[#F5EDEA] flex flex-col justify-between gap-20 relative items-center py-20">
                <h1 className="font-playfair font-medium italic text-3xl md:text-4xl text-[#916D4F]">
                    Hand & Body Lotion
                </h1>
                <div className="h-full w-full z-30 flex justify-between items-center flex-col px-4 md:px-14 lg:px-64 py-36  absolute">
                    <div className="w-full flex justify-between items-center ">
                        <div
                            className="floating-img flex flex-col items-center justify-center"
                            data-aos="fade-up"
                        >
                            <img
                                src="/Asset5.png"
                                alt="Asset2"
                                width={50}
                                className=" md:w-24 lg:w-28 hover:scale-125 transition-transform duration-300 ease-in-out"
                            />
                            <h1 className="text-description mt-2 font-roboto text-[0.5rem] md:text-xs font-medium text-[#916D4F]">
                                NIACINAMIDE
                            </h1>
                            <p className="text-description w-32 text-center text-[0.7rem] font-light font-roboto text-[#916D4F]">
                                Whitening, Brightening, Smoothing/softening.
                            </p>
                        </div>
                        <div
                            className="floating-img-satu flex flex-col items-center justify-center"
                            data-aos="fade-up"
                        >
                            <img
                                src="/Asset6.png"
                                alt="Asset3"
                                width={50}
                                className=" md:w-24 lg:w-28 hover:scale-125 transition-transform duration-300 ease-in-out"
                            />
                            <h1 className="text-description mt-2 font-roboto text-[0.5rem] md:text-xs font-medium text-[#916D4F]">
                                LACTIC ACID
                            </h1>
                            <p className="text-description w-32 text-center text-[0.7rem] font-light font-roboto text-[#916D4F]">
                                Can help soothe irritated skin.
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <div
                            className="floating-img-dua flex flex-col items-center justify-center"
                            data-aos="fade-up"
                        >
                            <img
                                src="/Asset7.png"
                                alt="Asset4"
                                width={50}
                                className=" md:w-24 lg:w-28 hover:scale-125 transition-transform duration-300 ease-in-out"
                            />
                            <h1 className="text-description mt-2 font-roboto text-[0.5rem] md:text-xs font-medium text-[#916D4F]">
                                RETINOL
                            </h1>
                            <p className="text-description w-32 text-center text-[0.7rem] font-light font-roboto text-[#916D4F]">
                                Encourages replacement of dead and damaged skin
                                cells with new skin cells more quickly.
                            </p>
                        </div>
                        <div
                            className="floating-img-tiga flex flex-col items-center justify-center"
                            data-aos="fade-up"
                        >
                            <img
                                src="/Asset8.png"
                                alt="Asset1"
                                width={50}
                                className=" md:w-24 lg:w-28 hover:scale-125 transition-transform duration-300 ease-in-out"
                            />
                            <h1 className="text-description mt-2 font-roboto text-[0.5rem] md:text-xs font-medium text-[#916D4F]">
                                DNA SALMON
                            </h1>
                            <p className="text-description w-32 text-center text-[0.7rem] font-light font-roboto text-[#916D4F]">
                                Disguise pockmarks or acne scars, smooth the
                                skin, and tighten facial skin.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="relative w-full flex justify-center items-center"
                    style={{ minHeight: "50vh" }}
                >
                    <img
                        src="/HblAsset.png"
                        alt="AssetHBL"
                        className="w-48 md:w-96"
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    />
                    <svg
                        className="w-64 md:w-[33rem]"
                        viewBox="0 0 600 600"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="300"
                            cy="300"
                            r="194.5"
                            stroke="#D9D9D9"
                            strokeWidth="5"
                        />
                        <g clipPath="url(#clip0_584_69)">
                            <path
                                d="M300.001 23.9995C287.56 125.543 283.447 190.023 259.139 231.646C219.404 283.382 150.529 288.309 24.0005 300C148.478 315.061 215.782 318.325 255.633 365.719C285.407 407.675 290.445 472.575 300.001 576C316.231 441.863 318.773 374.125 377.588 335.58C419.406 315.381 481.807 310.972 576.001 300C459.204 285.691 391.438 282.398 351.094 246.719C316.98 206.05 313.341 138.52 300.001 23.9995Z"
                                fill="#C8BA9F"
                                fillOpacity="0.7"
                            />
                            <path
                                d="M457 392C455.918 400.609 455.561 406.076 453.447 409.605C449.992 413.991 444.003 414.409 433 415.4C443.824 416.677 449.677 416.954 453.142 420.972C455.731 424.529 456.169 430.031 457 438.8C458.411 427.428 458.632 421.685 463.747 418.417C467.383 416.704 472.809 416.33 481 415.4C470.844 414.187 464.951 413.908 461.443 410.883C458.476 407.435 458.16 401.709 457 392Z"
                                fill="#916D4F"
                            />
                        </g>
                        <g clipPath="url(#clip1_584_69)">
                            <path
                                d="M135 173C134.099 180.174 133.8 184.73 132.039 187.671C129.16 191.326 124.169 191.674 115 192.5C124.02 193.564 128.897 193.795 131.785 197.143C133.943 200.107 134.308 204.693 135 212C136.176 202.523 136.36 197.737 140.622 195.014C143.653 193.587 148.174 193.275 155 192.5C146.536 191.489 141.626 191.256 138.702 188.736C136.23 185.862 135.967 181.091 135 173Z"
                                fill="#916D4F"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_584_69">
                                <rect
                                    width="552"
                                    height="552"
                                    fill="white"
                                    transform="translate(24 24)"
                                />
                            </clipPath>
                            <clipPath id="clip1_584_69">
                                <rect
                                    width="40"
                                    height="39"
                                    fill="white"
                                    transform="translate(115 173)"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                {/* <div className="w-full h-full flex bg-slate-200 absolute"></div> */}
            </section>
            <section className="w-full bg-[#F5EDEA] flex flex-col items-center py-20 md:px-16">
                <h1 className="font-playfair font-medium italic text-3xl md:text-4xl text-[#916D4F]">
                    What they say?
                </h1>
                <div className="w-full h-[45rem] md:h-[30rem] max-h-[50rem]">
                    <Carousel pauseOnHover>
                        <div className="flex h-full gap-6 flex-col items-center justify-center">
                            <div className="flex flex-col items-center justify-center">
                                <img
                                    src="/AssetReview1.png"
                                    alt="AssetReview1"
                                    width={100}
                                    className="mb-4"
                                />
                                <h1 className="font-roboto font-medium text-[#916D4F] text-lg tracking-wide">
                                    Shella Saukia
                                </h1>
                                <h2 className="font-roboto font-light text-[#C8BA9F] text-sm tracking-wide">
                                    Brand Ambassador Level Up Beaute
                                </h2>
                                <a
                                    href="https://www.instagram.com/shellasaukiaofficial/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="font-roboto font-light text-[#C8BA9F] text-sm tracking-wide"
                                >
                                    @shellasaukiaofficial
                                </a>
                            </div>
                            <div className="w-48 md:w-96 lg:w-[40rem] text-center">
                                <p className="font-roboto font-light text-[#916D4F] italic">
                                    “ Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Laborum, necessitatibus
                                    nemo. Expedita alias natus impedit tempora
                                    quaerat, exercitationem pariatur ipsam qui
                                    quidem ad odio est. Sit accusantium nostrum
                                    ab rem. Expedita alias natus impedit tempora
                                    quaerat, exercitationem pariatur ipsam qui
                                    quidem ad odio est. Sit accusantium nostrum
                                    ab rem. “
                                </p>
                            </div>
                        </div>
                        <div className="flex h-full gap-6 flex-col items-center justify-center">
                            <div className="flex flex-col items-center justify-center">
                                <img
                                    src="/AssetReview2.png"
                                    alt="AssetReview1"
                                    width={100}
                                    className="mb-4 rounded-full"
                                />
                                <h1 className="font-roboto font-medium text-[#916D4F] text-lg tracking-wide">
                                    Lucinta Luna
                                </h1>
                                <h2 className="font-roboto font-light text-[#C8BA9F] text-sm tracking-wide">
                                    Public Figure
                                </h2>
                                <a
                                    href="https://www.instagram.com/lucintaluna_manjalita/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="font-roboto font-light text-[#C8BA9F] text-sm tracking-wide"
                                >
                                    @lucintaluna_manjalita
                                </a>
                            </div>
                            <div className="w-48 md:w-96 lg:w-[40rem] text-center">
                                <p className="font-roboto font-light text-[#916D4F] italic">
                                    “ 🎵Level Up, Level Up katanya pakenya.
                                    Level Up, si moist habis pake jelly skin.🎵{" "}
                                    <br />
                                    Aku sekarang udah fokus pake Level Up juga
                                    ni guys. Sumpah moist banget glowing
                                    parah😍“
                                </p>
                            </div>
                        </div>
                        <div className="flex h-full gap-6 flex-col items-center justify-center">
                            <div className="flex flex-col items-center justify-center">
                                <img
                                    src="/AssetReview5.png"
                                    alt="AssetReview1"
                                    width={100}
                                    className="mb-4 rounded-full"
                                />
                                <h1 className="font-roboto font-medium text-[#916D4F] text-lg tracking-wide">
                                    Elvira Miniti
                                </h1>
                                <h2 className="font-roboto font-light text-[#C8BA9F] text-sm tracking-wide">
                                    Brand Ambassador Level Up Beaute
                                </h2>
                                <a
                                    href="https://www.instagram.com/elviraaminitiii/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="font-roboto font-light text-[#C8BA9F] text-sm tracking-wide"
                                >
                                    @elviraaminitiii
                                </a>
                            </div>
                            <div className="w-48 md:w-96 lg:w-[40rem] text-center">
                                <p className="font-roboto font-light text-[#916D4F] italic">
                                    “ Untuk produk skincare yang satu ini, Level
                                    Up, aku suka banget karena lembut banget di
                                    kulit. Dan guys, aku tuh selalu iritasi
                                    kalau pakai make-up. Jadi moisturizer dari
                                    Level Up ini ngebantu aku banget untuk
                                    mempertahankan skin barier aku. “
                                </p>
                            </div>
                        </div>
                        <div className="flex h-full gap-6 flex-col items-center justify-center">
                            <div className="flex flex-col items-center justify-center">
                                <img
                                    src="/AssetReview4.png"
                                    alt="AssetReview1"
                                    width={100}
                                    className="mb-4 rounded-full"
                                />
                                <h1 className="font-roboto font-medium text-[#916D4F] text-lg tracking-wide">
                                    Gaby Rosse
                                </h1>
                                <h2 className="font-roboto font-light text-[#C8BA9F] text-sm tracking-wide">
                                    Content Creator
                                </h2>
                                <a
                                    href="https://www.instagram.com/gaby.rosse/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="font-roboto font-light text-[#C8BA9F] text-sm tracking-wide"
                                >
                                    @gaby.rosse
                                </a>
                            </div>
                            <div className="w-48 md:w-96 lg:w-[40rem] text-center">
                                <p className="font-roboto font-light text-[#916D4F] italic">
                                    “ Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Laborum, necessitatibus
                                    nemo. Expedita alias natus impedit tempora
                                    quaerat, exercitationem pariatur ipsam qui
                                    quidem ad odio est. Sit accusantium nostrum
                                    ab rem. Expedita alias natus impedit tempora
                                    quaerat, exercitationem pariatur ipsam qui
                                    quidem ad odio est. Sit accusantium nostrum
                                    ab rem. “
                                </p>
                            </div>
                        </div>
                        <div className="flex h-full gap-6 flex-col items-center justify-center">
                            <div className="flex flex-col items-center justify-center">
                                <img
                                    src="/AssetReview6.png"
                                    alt="AssetReview1"
                                    width={100}
                                    className="mb-4 rounded-full"
                                />
                                <h1 className="font-roboto font-medium text-[#916D4F] text-lg tracking-wide">
                                    Fachrul Hadid
                                </h1>
                                <h2 className="font-roboto font-light text-[#C8BA9F] text-sm tracking-wide">
                                    Content Creator
                                </h2>
                                <a
                                    href="https://www.instagram.com/fachrulhadid/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="font-roboto font-light text-[#C8BA9F] text-sm tracking-wide"
                                >
                                    @fachrulhadid
                                </a>
                            </div>
                            <div className="w-48 md:w-96 lg:w-[40rem] text-center">
                                <p className="font-roboto font-light text-[#916D4F] italic">
                                    “ Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Laborum, necessitatibus
                                    nemo. Expedita alias natus impedit tempora
                                    quaerat, exercitationem pariatur ipsam qui
                                    quidem ad odio est. Sit accusantium nostrum
                                    ab rem. Expedita alias natus impedit tempora
                                    quaerat, exercitationem pariatur ipsam qui
                                    quidem ad odio est. Sit accusantium nostrum
                                    ab rem. “
                                </p>
                            </div>
                        </div>
                        <div className="flex h-full gap-6 flex-col items-center justify-center">
                            <div className="flex flex-col items-center justify-center">
                                <img
                                    src="/AssetReview7.png"
                                    alt="AssetReview1"
                                    width={100}
                                    className="mb-4 rounded-full"
                                />
                                <h1 className="font-roboto font-medium text-[#916D4F] text-lg tracking-wide">
                                    Clarissa Putri H
                                </h1>
                                <h2 className="font-roboto font-light text-[#C8BA9F] text-sm tracking-wide">
                                    Content Creator
                                </h2>
                                <a
                                    href="https://www.instagram.com/clarissaputri_/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="font-roboto font-light text-[#C8BA9F] text-sm tracking-wide"
                                >
                                    @clarissaputri_
                                </a>
                            </div>
                            <div className="w-48 md:w-96 lg:w-[40rem] text-center">
                                <p className="font-roboto font-light text-[#916D4F] italic">
                                    “ Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Laborum, necessitatibus
                                    nemo. Expedita alias natus impedit tempora
                                    quaerat, exercitationem pariatur ipsam qui
                                    quidem ad odio est. Sit accusantium nostrum
                                    ab rem. Expedita alias natus impedit tempora
                                    quaerat, exercitationem pariatur ipsam qui
                                    quidem ad odio est. Sit accusantium nostrum
                                    ab rem. “
                                </p>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </section>
            <ParallaxText bgColor="F5EDEA" />
            <Footer />
        </div>
    );
};

export default Home;
