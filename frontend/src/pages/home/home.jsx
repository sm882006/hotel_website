import React from "react";
import { Link } from "react-router-dom";

import "./home.css";
import homePageHotelImg from "../../assets/home_page_hotel_img.png";
import logoWhiteSvg from "../../assets/logo-white-svg.svg";

const Home = () => {
    return (
        <div className="home_page">
            <nav className="navbar">
                <div className="svg">
                    <Link
                        to="/"
                        className="svglink"
                        aria-label="Open navigation menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </Link>
                </div>

                <div className="logo">
                    <Link to="/" aria-label="Go to home page">
                        <img src={logoWhiteSvg} alt="Hotel logo" />
                    </Link>
                </div>

                <div className="booking">
                    <Link to="/login" className="login_button">
                        LOGIN
                    </Link>
                </div>
            </nav>

            <section className="hero_section">
                <div className="home_page_hotel_img">
                    <img src={homePageHotelImg} alt="Luxury hotel" />
                </div>
            </section>
        </div>
    );
};

export default Home;