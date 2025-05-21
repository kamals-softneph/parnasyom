'use client';
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';


const mainnav = [
    {
        navtext: "How It Works",
        navlink: "#how-it-works",
    },
    {
        navtext: "About",
        navlink: "#about",
    },
    {
        navtext: "Why Choose Us",
        navlink: "#why-choose",
    },
    {
        navtext: "Testimonials",
        navlink: "#testimonials",
    },
    {
        navtext: "Contact",
        navlink: "#contact",
    }
]

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
            return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [navActive, setNavActive] = useState(false);

    const handleOpen = () => {
        setNavActive(true);
    };

    const handleClose = () => {
        setNavActive(false);
    };




    return (
        <header className={`site-header ${isSticky ? 'she-header' : ''}`}>
            <div className="top-header">
                <p>Tap into the power of automatic recurring Parnas Hayom dedications with a custom website and digital screen. <Link href="#contact">Get Started</Link> </p>
            </div>
            <div className={`bottom-header ${navActive ? 'nav-active' : ''}`}>
                <div className="cus-container">
                    <div className="cus-row">
                        <div className="col-30 header-logo-col">
                            <Link href="#" className="header-logo">
                                <Image src="/images/Parnas-Logo.png" width={220} height={37} alt="Logo"/>
                            </Link>
                        </div>
                        <div className="col-70 header-nav-col">
                            <button className="mobile-nav-open hide-on-lg" onClick={handleOpen}>
                                <img src="/images/menu-icon.svg" alt="Menu Icon" />
                            </button>
                            <div className="head-nav hide-on-sm">
                                <ul className="main-nav">
                                    {mainnav.map((mainnavitem, index) => (
                                        <li key={index} className="head-nav-item">
                                            <Link className="head-nav-link" href={mainnavitem.navlink}>{mainnavitem.navtext}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="right-btn">
                                <Link href="#samples" className="cus-btn btn-main"><span className="hide-on-sm">Live</span> Samples</Link>
                            </div>
                        </div>
                    </div>
                </div>
                 {/* Mobile toggle navbar */}
                <div className="sm-nav hide-on-lg">
                    <button className="sm-nav-close" onClick={handleClose}>
                        <img src="/images/close-icon.svg" alt="Close Icon" />
                    </button>
                    <ul className="sm-menu">
                        {mainnav.map((mainnavitem, index) => (
                            <li key={index} className="sm-nav-item">
                                <Link className="sm-nav-link" href={mainnavitem.navlink}>{mainnavitem.navtext}</Link>
                            </li>
                        ))}
                    </ul>

                    <div className="sm-nav-quote">
                        <p>Celebrate memories, inspire generosity. Our platform makes honoring loved ones seamless, meaningful, and a true source of community pride.</p>
                        <Image src="/images/quote-icon.svg" alt="quote icon" width={16} height={12} />
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;