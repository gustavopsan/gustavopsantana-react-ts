import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Portifolio from "./pages/Portifolio";
import Contact from "./pages/Contact";

const MyRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/portifolio" element={<Portifolio />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    )
}

export default MyRoutes;