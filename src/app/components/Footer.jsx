'use client';
import Link from "next/link";
import { useState, useEffect } from 'react';


const foonav = [
    {
        foolinktext: "Our Customers",
        foolink: "#",
    },
    {
        foolinktext: "How it Works",
        foolink: "#how-it-works",
    },
    {
        foolinktext: "Why Choose Us",
        foolink: "#why-choose",
    },
    {
        foolinktext: "Contact Us",
        foolink: "#contact",
    },
    {
        foolinktext: "Testimonials",
        foolink: "#testimonials",
    }
]

const Footer = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 1000) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up event listener
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth', // smooth scrolling
        });
    };

    return (
        <footer className="site-footer">
            <div className="cus-container">
                <div className="foo-top">
                    <div className="cus-row">
                        <div className="col-third-30 foo-col-1">
                            <h3>Useful Links</h3>
                            <ul className="foo-links">
                                {foonav.map((foonavitem, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <Link href={foonavitem.foolink}>{foonavitem.foolinktext}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-third-40 foo-col-2">
                            <Link href="/"><img src="/images/Parnas-Logo.png" alt="Site Logo" className="foo-logo" /></Link>
                            <p className="foo-text">ParnasYom offers a meaningful way to honor loved ones through dedications. Our platform helps organizations inspire giving with ease, creating lasting legacies and deeper community connections every day.</p>
                        </div>
                        <div className="col-third-30 foo-col-3">
                            <h3>Contact Details</h3>
                            <ul className="foo-links">
                                <li>
                                    <Link href="mailto:info@parnasyom.com">Info@parnasyom.com</Link>
                                </li>
                                {/* <li>
                                    <Link href="tel:7738979316">(773) 897-9316</Link>
                                </li> */}
                            </ul>
                            {/* <ul className="foo-social-links">
                                <li><Link href="#" target="_blank"><img src="/images/Facebook-icon.svg" alt="Facebook Icon" /></Link></li>
                                <li><Link href="#" target="_blank"><img src="/images/Linkedin-icon.svg" alt="Linkedin Icon" /></Link></li>
                            </ul> */}
                        </div>
                    </div>
                </div>
                <div className="foo-bottom">
                    <p>© 2025 ParnasYom. All rights reserved. </p>
                </div>
            </div>
            {showButton && (
                <button
                onClick={scrollToTop}
                className="back-to-top"
                aria-label="Back to top"
                >
                ↑
                </button>
            )}
        </footer>
    )
}

export default Footer;