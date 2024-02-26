import React from "react";

const Navbar = () => {
    return (
        <>
            <div className="w-full h-28 fixed top-0">
                <div className="w-full h-full relative flex justify-center items-center">
                    <div className="w-[60rem] h-24 bg-[#F6F1ED] rounded-full flex items-center justify-between px-14">
                        <div className="flex items-center justify-center gap-14">
                            <a
                                href=""
                                className="font-roboto uppercase text-sm text-[#916D4F]"
                            >
                                Best Deals
                            </a>
                            <a
                                href=""
                                className="font-roboto uppercase text-sm text-[#916D4F]"
                            >
                                Best Deals
                            </a>
                            <a
                                href=""
                                className="font-roboto uppercase text-sm text-[#916D4F]"
                            >
                                Best Deals
                            </a>
                        </div>
                        <div className="flex items-center justify-center gap-14">
                            <a
                                href=""
                                className="font-roboto uppercase text-sm text-[#916D4F]"
                            >
                                Best Deals
                            </a>
                            <a
                                href=""
                                className="font-roboto uppercase text-sm text-[#916D4F]"
                            >
                                Best Deals
                            </a>
                            <a
                                href=""
                                className="font-roboto uppercase text-sm text-[#916D4F]"
                            >
                                Best Deals
                            </a>
                        </div>
                    </div>
                    <div
                        className="w-24 h-24 rounded-full absolute flex justify-center items-center"
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
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
