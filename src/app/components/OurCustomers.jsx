'use client';
import Link from "next/link";

const linksData = [
    {
      href: '#',
      imgSrc: '/images/Chicago-Mikwah.png',
      label: 'cma',
    },
    {
      href: '#',
      imgSrc: '/images/Cleveland-Community-Mikwah.png',
      label: 'ccmikvah',
    },
    {
        href: '#',
        imgSrc: '/images/Chicago-Mikwah.png',
        label: 'skokiekeilimmikvah',
    },
    {
        href: '#',
        imgSrc: '/images/Chicago-Mikwah.png',
        label: 'bmtt',
    },
];

const OurCustomers = () => {
    return (
        <section className="our-customers">
            <div className="cus-container">
                <div className="cus-row">
                    <div className="col-50 customers-left-col">
                        <h2>A quick look at some live samples of ParnaYom in action </h2>
                        <p>Select the organization where you'd like to make a dedication </p>
                        <div className="btn-flex">
                            <Link href="#" className="cus-btn btn-main">Get Started </Link>
                            <Link href="#contact" className="cus-btn btn-white">Contact Us </Link>
                        </div>
                    </div>
                    <div className="col-50 customers-right-col">
                        <div className="customers-flex-row">

                        {linksData.map((linksitem, index) => (
                            <Link href={linksitem.href} key={index}>
                                <img src={linksitem.imgSrc} alt={linksitem.label} />
                                <span>{linksitem.label}</span>
                            </Link>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default OurCustomers;