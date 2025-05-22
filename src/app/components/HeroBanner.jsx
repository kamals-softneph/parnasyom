import Link from "next/link";

const HeroBanner = () => {
    return (
        <section className="hero-banner">
            <div className="cus-container">
                <div className="cus-row">
                    <div className="col-50 hero-content">
                        <h1>Less Solicitations and <span>More Dedications</span></h1>
                        <p>It's the ultimate solution for any shul, mikvah, or non-profit organization. Members will take pride in owning their day or month and they will do it again and again! <strong>Because it's not just a Donation, it's a Legacy.</strong> </p>
                        <div className="hero-btns">
                            <Link href="/campaigns" className="cus-btn btn-main">Get Started Today</Link>
                            <Link href="#contact" className="cus-btn btn-white">Contact Us</Link>
                        </div>
                    </div>
                    <div className="col-50 hero-img-col">
                        <div className="hero-img-wrapper">
                            <img src="/images/computer-frame.png" className="computer-frame-image" alt="Computer Frame"/>
                            <img src="/images/hero-image.jpg" className="hero-banner-img" alt="Hero banner image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HeroBanner;