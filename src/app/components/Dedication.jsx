'use client';
import Link from "next/link";
import Image from 'next/image';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Dedications = ({ items }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.5,    
    });
    return (
        <section className="dedication-wrapper" id="about">
            <div className="cus-container">
                <div className="cus-row">
                    <div className="col-50 dedication-col-img">
                        <div className="dedi-img-outer">
                            <img src="/images/inside-the-shul-image.jpg" className="dedication-img" alt="Inside shul Image" />
                        </div>
                        <div className="counter-box">
                            <Image src="/images/growth-icon.svg" alt="Growth Icon" width={70} height={70} />
                            <div className="couter-content">
                                <h4 ref={ref}>
                                    {inView ? <CountUp start={0} end={1500} duration={2.5} separator="," /> : "0"}+
                                </h4>
                                <p>Active Dedications and Growing</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-50 dedication-col-right">
                        <h2>Empowering Legacy Through Every Dedication</h2>
                        <p>At ParnasYom, we believe that honoring loved ones should be meaningful, lasting, and effortless. Our platform helps shuls, mikvahs, and non-profits turn dedications into a source of pride, deeper connection, and sustainable support — while reducing the need for constant fundraising.</p>
                        <ul className="check-list space-y-3">
                            {items.map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                <Image src="/images/check-icon.svg" alt="Check icon" width={25} height={25} />
                                <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="btn-flex">
                            <Link href="#" className="cus-btn btn-main">Get Started </Link>
                            <Link href="#contact" className="cus-btn btn-dark">Contact Us </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Dedications; 