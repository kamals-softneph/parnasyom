'use client';
import Link from "next/link";

const works = [
    {
      number: "1",
      title: "Send Your Branding",
      text: "Send us your logo, pictures and branding for your organization to get started.",
    },
    {
      number: "2",
      title: "Get Your Custom Website",
      text: "Receive a beautiful customized website where people can select dates for Parnas Hayom, Shavua, Chodesh.",
    },
    {
      number: "3",
      title: "Easy Installation",
      text: "Install the new screen that we will send you in your location . Very easy instructions included!",
    },
    {
        number: "4",
        title: "Watch It Grow",
        text: "Blast out your new link and watch the Parnas Hayom dedications roll in!",
    }
  ];

const HowItWorks = () => {
    return (
        <section className="how-it-works" id="how-it-works">
            <div className="cus-container">
                <div className="title-header">
                    <h2>How it Works</h2>
                    <p>Learn how easy it is to dedicate a day of Torah learning in memory or honor of a loved one — with just a few simple steps.</p>
                </div>
                <div className="cus-row">
                    {works.map((worksitem, index) => (
                        <div key={index} className="col-4th">
                            <div className="words-card-box">
                                <h4 className="words-number">{worksitem.number}</h4>
                                <h3>{worksitem.title}</h3>
                                <p>{worksitem.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="btn-flex btn-center">
                    <Link href="#" className="cus-btn btn-main">Get Started </Link>
                    <Link href="#" className="cus-btn btn-dark">Contact Us </Link>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks;