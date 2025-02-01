import { useState, useEffect } from 'react';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';

const Navbar = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
        document.body.classList.toggle('dark-theme', !isDarkTheme);
    };
    let a = gsap.timeline()
    useEffect(() => {
        a.from(".navbar", {
            y: -90,
            duration: 2,
            delay: 0.5,
            opacity: -1,
        });
    }, []);
    useEffect(() => {
        a.from(".nav-link", {
            y: -100,
            stagger: 0.2
        })
        gsap.fromTo(".navbar-brand", {
            scale: 1,
            opacity: 1,
        }, {
            scale: 1,
            color: "orange",
            duration: 0.5,
            repeat: -1,
            yoyo: true,
        });

    })
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand fs-1" to="/" >
                        {/* <span><img src='logo.png' style={{ height: "80px", width: "140px", paddingLeft: "20px" }}></img></span> */}
                        <span style={{ fontFamily: "stylish", fontWeight: 400, fontStyle: "normal" }}>
                            (●'◡'●)
                            F
                            <span style={{ color: "black" }}>A</span>
                            S
                            <span style={{ color: "black" }}>H</span>
                            I
                            <span style={{ color: "black" }}>O</span>
                            N
                            <span style={{ color: "black" }}> </span>
                            W
                            <span style={{ color: "black" }}>O</span>
                            R
                            <span style={{ color: "black" }}>L</span>
                            D
                            (❁´◡`❁)
                        </span>
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse fs-4" style={{ fontFamily: "monospace" }} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/Products">
                                    Products
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Cart">
                                    Cart
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/About">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Blog">
                                    Blog
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Contact">
                                    Contact
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink
                                    className="nav-link dropdown-toggle"
                                    to="/"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="fa-solid fa-user" />

                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li>
                                        <NavLink className="dropdown-item" to="/SignUp">
                                            Sign Up
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to="/Login">
                                            Login
                                        </NavLink>
                                    </li>

                                </ul>
                            </li>
                            <li className="nav-item nav-link">
                                <button className="btn btn-outline-secondary" onClick={toggleTheme}>
                                    {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
                                </button>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav >
            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
                integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg=="
                crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        </>
    )
}

export default Navbar