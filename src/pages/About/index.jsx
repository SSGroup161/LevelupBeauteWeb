import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ParallaxText from "../../components/ParallaxText";
import "./about.css";

const About = () => {
    const [isFilledName, setIsFilledName] = useState(false);
    const [isFilledEmail, setIsFilledEmail] = useState(false);
    const [isFilledMessage, setIsFilledMessage] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleInputChangeName = (event) => {
        setIsFilledName(event.target.value !== "");
    };

    const handleInputChangeEmail = (event) => {
        setIsFilledEmail(event.target.value !== "");
    };

    const handleInputChangeMessage = (event) => {
        setIsFilledMessage(event.target.value !== "");
    };

    return (
        <div className="bg-[#C8BA9F] max-w-screen-3xl m-auto">
            <Navbar />
            <section className="w-full flex flex-col-reverse md:flex-row gap-0 items-center justify-between bg-[#C8BA9F]">
                <div className="flex-1  flex flex-col items-start md:items-end justify-start md:justify-center px-12 md:mt-32 lg:mt-56">
                    <div className="flex flex-col items-start justify-center">
                        <h1 className="font-fredoka font-medium text-[#F6F1ED] text-xl">
                            It's Time To
                        </h1>
                        <h1 className="font-fredoka font-medium text-[#F6F1ED] text-5xl mb-1">
                            Level Up Your Skin!
                        </h1>
                        <h1 className="font-fredoka mb-5 text-sm text-[#F6F1ED]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Labore, perferendis.
                        </h1>
                        <button className="button font-fredoka">
                            Let's Get Product
                        </button>
                    </div>
                </div>
                <div className="flex-1 flex items-end mt-20 md:mt-32 lg:mt-40">
                    <img
                        src="/AssetAbout.png"
                        alt="AssetAbout"
                        width={50}
                        height={50}
                        className="w-80 h-80 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem]"
                    />
                </div>
            </section>
            <section className="w-full flex flex-col items-center justify-center bg-[#C8BA9F] mt-32 md:mt-1 lg:mt-48">
                <div className="relative">
                    <img
                        src="/AssetAbout2.png"
                        alt="AssetAbout"
                        width={50}
                        height={50}
                        className="ms-4 w-32 -z-10"
                    />
                    <h1
                        className="absolute text-[#F6F1ED] text-4xl font-fredoka font-medium z-10 bg-gradient-to-t from-[#c8ba9f] via-[#c8ba9f] via-70%"
                        style={{
                            top: "89%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        About
                    </h1>
                </div>
                <div className="text-center text-sm px-10 lg:px-40 font-roboto mt-6 text-[#F6F1ED]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Placeat hic, et, facere quae aliquid eligendi reprehenderit
                    explicabo alias ad laudantium molestias aspernatur repellat
                    aliquam quisquam incidunt, quos tenetur possimus molestiae!
                    Fugit molestias velit libero nobis, obcaecati esse excepturi
                    quis fugiat natus repellat recusandae quo repudiandae iste
                    dignissimos praesentium provident! Ut dignissimos cumque
                    doloremque porro illum facere tenetur debitis saepe aliquam.
                </div>
            </section>
            <section className="flex flex-col md:flex-row items-center justify-center gap-40 md:gap-20 lg:gap-40 mt-48">
                <div>
                    <div className="w-64 h-96 border-2 relative border-[#916d4f] border-opacity-50 flex flex-col justify-center items-center rounded-3xl px-6">
                        <img
                            src="/AssetAbout3.png"
                            alt="AssetAbout"
                            width={50}
                            height={50}
                            className="w-52 absolute -top-32"
                        />
                        <h1 className="text-[#F6F1ED] text-4xl font-fredoka font-medium z-10 bg-gradient-to-t from-[#c8ba9f] via-[#c8ba9f] via-70% mb-4">
                            Vision
                        </h1>
                        <p className="font-roboto text-sm text-[#F6F1ED] text-center">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Earum voluptate illum saepe numquam
                            reprehenderit reiciendis blanditiis quod, ullam
                            harum velit facere eius dolores error maiores sed
                            doloremque veniam at eaque mollitia, vel
                            perspiciatis dolore omnis pariatur debitis. Et
                            asperiores deserunt velit numquam impedit assumenda
                            repellat dolores, sed aperiam quis laborum!
                        </p>
                    </div>
                </div>
                <div>
                    <div className="w-64 h-96 border-2 relative border-[#916d4f] border-opacity-50 flex flex-col justify-center items-center rounded-3xl px-6">
                        <img
                            src="/AssetAbout4.png"
                            alt="AssetAbout"
                            width={50}
                            height={50}
                            className="w-48 absolute -top-32"
                        />
                        <h1 className="text-[#F6F1ED] text-4xl font-fredoka font-medium z-10 bg-gradient-to-t from-[#c8ba9f] via-[#c8ba9f] via-70% mb-4">
                            Mission
                        </h1>
                        <p className="font-roboto text-sm text-[#F6F1ED] text-center">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Earum voluptate illum saepe numquam
                            reprehenderit reiciendis blanditiis quod, ullam
                            harum velit facere eius dolores error maiores sed
                            doloremque veniam at eaque mollitia, vel
                            perspiciatis dolore omnis pariatur debitis. Et
                            asperiores deserunt velit numquam impedit assumenda
                            repellat dolores, sed aperiam quis laborum!
                        </p>
                    </div>
                </div>
            </section>
            <section className="w-full flex flex-col items-center justify-center bg-[#C8BA9F] mt-32 lg:mt-48">
                <div className="relative">
                    <img
                        src="/AssetAbout5.png"
                        alt="AssetAbout"
                        width={50}
                        height={50}
                        className="w-32 -z-10"
                    />
                    <h1
                        className="absolute text-[#F6F1ED] text-4xl font-fredoka font-medium z-10 bg-gradient-to-t from-[#c8ba9f] via-[#c8ba9f] via-70%"
                        style={{
                            top: "90%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        Numbers
                    </h1>
                </div>
                <div className="text-center text-sm px-10 lg:px-40 font-roboto mt-6 text-[#F6F1ED]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur iste velit eaque dignissimos perspiciatis quas
                    beatae quibusdam possimus tempora. Adipisci, laborum. Libero
                    nisi incidunt odio possimus unde molestias mollitia.
                    Necessitatibus! Ad tempora nesciunt perferendis natus enim
                    impedit! Tempore animi incidunt explicabo sequi architecto,
                    perferendis similique odio corporis recusandae doloremque
                    nemo eos consequatur atque nam voluptates voluptatibus.
                    Harum excepturi laudantium veritatis. Consectetur beatae,
                    eum obcaecati nam repellendus recusandae neque id eos
                    architecto? Consequuntur odio ut delectus, exercitationem
                    similique fugiat magnam quibusdam, repellat laudantium
                    dignissimos facilis aperiam sit ipsum corrupti deleniti
                    dicta.
                </div>
                <div className="flex w-64 md:w-auto gap-10 md:px-10 lg:px-40 mt-12 text-white">
                    <div className="md:flex md:gap-10">
                        <div>
                            <h1 className="font-roboto text-sm">
                                Lorem ipsum, dolor sit amet consectetur.
                            </h1>
                            <h1 className="font-roboto text-5xl mt-2">400+</h1>
                        </div>
                        <div className="mt-10 md:mt-0">
                            <h1 className="font-roboto text-sm">
                                Lorem ipsum, dolor sit amet consectetur.
                            </h1>
                            <h1 className="font-roboto text-5xl mt-2">400+</h1>
                        </div>
                    </div>
                    <div className="md:flex md:gap-10">
                        <div>
                            <h1 className="font-roboto text-sm">
                                Lorem ipsum, dolor sit amet consectetur.
                            </h1>
                            <h1 className="font-roboto text-5xl mt-2">400+</h1>
                        </div>
                        <div className="mt-10 md:mt-0">
                            <h1 className="font-roboto text-sm">
                                Lorem ipsum, dolor sit amet consectetur.
                            </h1>
                            <h1 className="font-roboto text-5xl mt-2">400+</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full mb-32 mt-32 lg:mt-48 px-10 lg:px-40">
                <h1 className="font-fredoka text-4xl font-medium text-[#F6F1ED]">
                    Contact <span className="text-[#916d4f]">Us</span>
                </h1>
                <form action="">
                    <div className="flex items-center justify-center mt-20">
                        <div className="relative w-full font-roboto">
                            <input
                                id="username"
                                name="username"
                                className={`w-full border-b border-gray-300 py-1  ${
                                    isFilledName
                                        ? "border-b-2 border-[#916d4f]"
                                        : "focus:border-b-2 focus:border-[#916d4f]"
                                } transition-colors focus:outline-none peer bg-inherit text-xl`}
                                onChange={handleInputChangeName}
                            />
                            <label
                                htmlFor="username"
                                className={`absolute left-0 top-0 cursor-text ${
                                    isFilledName
                                        ? "peer-focus:text-base text-base -top-5 text-[#916d4f] ms-0 font-medium"
                                        : "peer-focus:text-base text-xl peer-focus:-top-5 peer-focus:text-[#916d4f]"
                                } transition-all  font-roboto text-[#F6F1ED] ms-2 peer-focus:ms-0 peer-focus:font-medium font-light`}
                            >
                                Name
                            </label>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-20">
                        <div className="relative w-full font-roboto">
                            <input
                                id="email"
                                name="email"
                                className={`w-full border-b border-gray-300 py-1  ${
                                    isFilledEmail
                                        ? "border-b-2 border-[#916d4f]"
                                        : "focus:border-b-2 focus:border-[#916d4f]"
                                } transition-colors focus:outline-none peer bg-inherit text-xl`}
                                onChange={handleInputChangeEmail}
                            />
                            <label
                                htmlFor="email"
                                className={`absolute left-0 top-0 cursor-text ${
                                    isFilledEmail
                                        ? "peer-focus:text-base text-base -top-5 text-[#916d4f] ms-0 font-medium"
                                        : "peer-focus:text-base text-xl peer-focus:-top-5 peer-focus:text-[#916d4f]"
                                } transition-all font-roboto text-[#F6F1ED] ms-2 peer-focus:ms-0 peer-focus:font-medium font-light`}
                            >
                                Email
                            </label>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-20">
                        <div className="relative w-full font-roboto">
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                className={`w-full py-1 border-b border-t-0 border-l-0 border-r-0 border-b-gray-300 ${
                                    isFilledMessage
                                        ? "border-b-2 border-b-[#916d4f]"
                                        : "focus:border-b-2 focus:border-b-[#916d4f]"
                                } transition-colors focus:outline-none peer bg-inherit text-xl`}
                                onChange={handleInputChangeMessage}
                            />
                            <label
                                htmlFor="message"
                                className={`absolute left-0 top-0 cursor-text ${
                                    isFilledMessage
                                        ? "peer-focus:text-base -top-5 text-[#916d4f] ms-0 font-medium"
                                        : "peer-focus:text-base text-xl peer-focus:-top-5 peer-focus:text-[#916d4f]"
                                } transition-all font-roboto text-[#F6F1ED] ms-2 peer-focus:ms-0 peer-focus:font-medium font-light`}
                            >
                                Message
                            </label>
                        </div>
                    </div>
                    <button className="c-button c-button--gooey mt-10 ">
                        Send Message
                        <div className="c-button__blobs">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        style={{ display: "block", height: "0", width: "0" }}
                    >
                        <defs>
                            <filter id="goo">
                                <feGaussianBlur
                                    in="SourceGraphic"
                                    stdDeviation="10"
                                    result="blur"
                                ></feGaussianBlur>
                                <feColorMatrix
                                    in="blur"
                                    mode="matrix"
                                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                                    result="goo"
                                ></feColorMatrix>
                                <feBlend in="SourceGraphic" in2="goo"></feBlend>
                            </filter>
                        </defs>
                    </svg>
                </form>
            </section>
            <ParallaxText bgColor="C8BA9F" />
            <Footer />
        </div>
    );
};

export default About;
