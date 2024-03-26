import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import BestDeals from "../pages/BestDeals";
import GetPromo from "../pages/GetPromo";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/best-deals" element={<BestDeals />} />
                <Route path="/get-promo" element={<GetPromo />} />
            </Routes>
        </Router>
    );
};

export default App;
