import React from "react";

import "./style.scss";

import HeroBanner from "./heroBanner/heroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import Serials from "./topRated/TopRated.jsx";
import Cartoon from "./topMultfilms/TopCartoon.jsx";

const Home = () => {
    return (
        <div className="homePage">
            <HeroBanner />
            <Trending />
            <Popular />
            <Serials />
            <Cartoon />
        </div>
    );
};

export default Home;