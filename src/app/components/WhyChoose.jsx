'use client';
import Link from "next/link";
import Image from "next/image";

const WhyUs = [
    {
        img: "/images/target-icon.svg",
        title: "Targeted to your clientele",
        text: "Customized webpage and message reflecting your identity."
    },
    {
        img: "/images/happy-user-icon.svg",
        title: "User-friendly",
        text: "Easy calendar shows open dates and previews messages on screen."
    },
    {
        img: "/images/Compounded-icon.svg",
        title: "Compounded sponsors",
        text: "Encourage yearly reservations to increase sponsorships."
    },
    {
        img: "/images/turnkey-icon.svg",
        title: "Compounded sponsors",
        text: "Get started today with a digital screen and custom website."
    },
    {
        img: "/images/donor-icon.svg",
        title: "Donor recognition",
        text: "Donor messages automatically appear on the digital screen."
    },
    {
        img: "/images/legacy-icon.svg",
        title: "Legacy building",
        text: "It's not just a donation - its a lasting legacy for your community."
    }
]

const WhyChoose = () => {
    return (
        <section className="why-choose" id="why-choose">
            <div className="cus-container">
                <div className="cus-row">
                    <div className="col-40" id="fixed-target">
                        <div className="why-choose-img" data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
                            <img src="/images/features-image.jpg" alt="Why choose image" />
                        </div>
                    </div>
                    <div className="col-60 why-content">
                        <div className="why-choose-main">
                            <div className="why-choose-header">
                                <h2>Why Choose Our Platform?</h2>
                                <p>Discover features that make our platform ideal for digital dedications — from streamlined management to meaningful donor experiences.</p>
                            </div>
                            <div className="why-boxs-row">
                            {WhyUs.map((whyusitem, index) => (
                                <div key={index} className="why-box-col">
                                    <div className="why-box-img">
                                        <Image src={whyusitem.img} alt={whyusitem.title} width="31" height="31" />
                                    </div>
                                    <div className="why-box-content">
                                        <h4>{whyusitem.title}</h4>
                                        <p>{whyusitem.text}</p>
                                    </div>
                                </div>
                            ))}
                            </div>
                            <div className="btn-flex">
                                <Link href="/campaigns" className="cus-btn btn-main">Get Started </Link>
                                <Link href="#contact" className="cus-btn btn-dark">Contact Us </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )   
}

export default WhyChoose;