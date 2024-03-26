import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ParallaxText from "../../components/ParallaxText";
import { Carousel, Dropdown } from "flowbite-react";
import "./bestDeals.css";

const BestDeals = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <section className=" bg-[#F5EDEA] md:pt-36 2xl:pt-44">
                <div className="h-28 md:h-48 xl:h-64 2xl:h-80 xl:px-40 md:px-10 2xl:px-96">
                    <Carousel pauseOnHover>
                        <img
                            src="/BannerWebBeaute.png"
                            alt="BannerBeaute"
                            className="md:rounded-xl 2xl:rounded-2xl"
                        />
                        <img
                            src="/BannerWebBeaute1.png"
                            alt="BannerBeaute"
                            className="md:rounded-xl 2xl:rounded-2xl"
                        />
                        <img
                            src="/BannerWebBeaute2.png"
                            alt="BannerBeaute"
                            className="md:rounded-xl 2xl:rounded-2xl"
                        />
                        <img
                            src="/BannerWebBeaute3.png"
                            alt="BannerBeaute"
                            className="md:rounded-xl 2xl:rounded-2xl"
                        />
                        <img
                            src="/BannerWebBeaute4.png"
                            alt="BannerBeaute"
                            className="md:rounded-xl 2xl:rounded-2xl"
                        />
                    </Carousel>
                </div>
                <div className=" flex font-roboto text-[#916d4f] items-center justify-between xl:px-40 px-10 2xl:px-96 mt-4 md:mt-12">
                    <h1 className="text-lg md:text-xl">
                        All discounted products
                    </h1>
                    <Dropdown label="Sort By" inline>
                        <Dropdown.Item>A-Z</Dropdown.Item>
                        <Dropdown.Item>Z-A</Dropdown.Item>
                    </Dropdown>
                </div>
                <div className=" xl:px-40 px-10 2xl:px-96 flex pb-20 flex-wrap justify-between items-center">
                    <div className="">
                        <div className="card w-36 md:w-56 mt-6 md:mt-12 md:h-96 rounded-lg md:rounded-2xl bg-[#F5EDE9] relative p-4 border-2 border-gray-200 transition-all duration-500 overflow-visible">
                            <img
                                src="/AssetBestDeals.png"
                                alt="AssetBestDeals"
                                width={50}
                                height={50}
                                className="w-full"
                            />
                            <div className="flex flex-col justify-between h-40 md:h-24">
                                <div className="mt-3 flex flex-col">
                                    <h1 className="font-roboto text-xs md:text-sm text-[#916d4f] font-light">
                                        Glow Code Lucent
                                    </h1>
                                    <h1 className="font-roboto text-base text-[#916d4f]">
                                        Revitalizing Toner
                                    </h1>
                                </div>
                                <div className="flex flex-col-reverse md:flex-row items-end md:gap-1">
                                    <h1 className="font-roboto text-[#916d4f] font-medium text-lg">
                                        IDR 299.000
                                    </h1>
                                    <h1 className="font-roboto text-[#C8BA9F] line-through">
                                        400.000
                                    </h1>
                                </div>
                            </div>
                            <button className="card-button transform translate-x-[-50%] translate-y-[125%] w-3/5 rounded-full bg-[#916d4f] text-white text-sm md:text-lg py-2 px-2 md:px-4 absolute left-1/2 bottom-0 opacity-0 transition-all duration-300 cursor-pointer">
                                More info
                            </button>
                        </div>
                    </div>

                    <div className="">
                        <div className="card w-36 md:w-56 mt-6 md:mt-12 md:h-96 rounded-lg md:rounded-2xl bg-[#F5EDE9] relative p-4 border-2 border-gray-200 transition-all duration-500 overflow-visible">
                            <img
                                src="/AssetBestDeals.png"
                                alt="AssetBestDeals"
                                width={50}
                                height={50}
                                className="w-full"
                            />
                            <div className="flex flex-col justify-between h-40 md:h-24">
                                <div className="mt-3 flex flex-col">
                                    <h1 className="font-roboto text-xs md:text-sm text-[#916d4f] font-light">
                                        Glow Code Lucent
                                    </h1>
                                    <h1 className="font-roboto text-base text-[#916d4f]">
                                        Revitalizing Toner
                                    </h1>
                                </div>
                                <div className="flex flex-col-reverse md:flex-row items-end md:gap-1">
                                    <h1 className="font-roboto text-[#916d4f] font-medium text-lg">
                                        IDR 299.000
                                    </h1>
                                    <h1 className="font-roboto text-[#C8BA9F] line-through">
                                        400.000
                                    </h1>
                                </div>
                            </div>
                            <button className="card-button transform translate-x-[-50%] translate-y-[125%] w-3/5 rounded-full bg-[#916d4f] text-white text-sm md:text-lg py-2 px-2 md:px-4 absolute left-1/2 bottom-0 opacity-0 transition-all duration-300 cursor-pointer">
                                More info
                            </button>
                        </div>
                    </div>

                    <div className="">
                        <div className="card w-36 md:w-56 mt-6 md:mt-12 md:h-96 rounded-lg md:rounded-2xl bg-[#F5EDE9] relative p-4 border-2 border-gray-200 transition-all duration-500 overflow-visible">
                            <img
                                src="/AssetBestDeals.png"
                                alt="AssetBestDeals"
                                width={50}
                                height={50}
                                className="w-full"
                            />
                            <div className="flex flex-col justify-between h-40 md:h-24">
                                <div className="mt-3 flex flex-col">
                                    <h1 className="font-roboto text-xs md:text-sm text-[#916d4f] font-light">
                                        Glow Code Lucent
                                    </h1>
                                    <h1 className="font-roboto text-base text-[#916d4f]">
                                        Revitalizing Toner
                                    </h1>
                                </div>
                                <div className="flex flex-col-reverse md:flex-row items-end md:gap-1">
                                    <h1 className="font-roboto text-[#916d4f] font-medium text-lg">
                                        IDR 299.000
                                    </h1>
                                    <h1 className="font-roboto text-[#C8BA9F] line-through">
                                        400.000
                                    </h1>
                                </div>
                            </div>
                            <button className="card-button transform translate-x-[-50%] translate-y-[125%] w-3/5 rounded-full bg-[#916d4f] text-white text-sm md:text-lg py-2 px-2 md:px-4 absolute left-1/2 bottom-0 opacity-0 transition-all duration-300 cursor-pointer">
                                More info
                            </button>
                        </div>
                    </div>

                    <div className="">
                        <div className="card w-36 md:w-56 mt-6 md:mt-12 md:h-96 rounded-lg md:rounded-2xl bg-[#F5EDE9] relative p-4 border-2 border-gray-200 transition-all duration-500 overflow-visible">
                            <img
                                src="/AssetBestDeals.png"
                                alt="AssetBestDeals"
                                width={50}
                                height={50}
                                className="w-full"
                            />
                            <div className="flex flex-col justify-between h-40 md:h-24">
                                <div className="mt-3 flex flex-col">
                                    <h1 className="font-roboto text-xs md:text-sm text-[#916d4f] font-light">
                                        Glow Code Lucent
                                    </h1>
                                    <h1 className="font-roboto text-base text-[#916d4f]">
                                        Revitalizing Toner
                                    </h1>
                                </div>
                                <div className="flex flex-col-reverse md:flex-row items-end md:gap-1">
                                    <h1 className="font-roboto text-[#916d4f] font-medium text-lg">
                                        IDR 299.000
                                    </h1>
                                    <h1 className="font-roboto text-[#C8BA9F] line-through">
                                        400.000
                                    </h1>
                                </div>
                            </div>
                            <button className="card-button transform translate-x-[-50%] translate-y-[125%] w-3/5 rounded-full bg-[#916d4f] text-white text-sm md:text-lg py-2 px-2 md:px-4 absolute left-1/2 bottom-0 opacity-0 transition-all duration-300 cursor-pointer">
                                More info
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <ParallaxText bgColor="F5EDEA" />
            <Footer />
        </>
    );
};

export default BestDeals;
