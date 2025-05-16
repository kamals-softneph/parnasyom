'use client';
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
    {
      name: "Rachel Cohen",
      title: "Director, Beth El Synagogue",
      content:
        "ParnasYom transformed the way we approach fundraising. It’s more than just a tool—it’s a meaningful experience for our members. They feel a deep sense of pride in dedicating a day or week in memory of a loved one. The platform is clean, respectful, and very easy to use. It’s now a key part of our yearly giving strategy.",
      image: "/images/user-image-1.png",
    },
    {
        name: "David Steinberg",
        title: "President, Community Torah",
        content:
          "We were up and running faster than I expected. The custom screen and website are professional and beautifully designed. It gives our community members a sense of honor to dedicate in memory or celebration. It has not only increased donations but also strengthened our connection with supporters. ",
        image: "/images/user-image-2.png",
      },
      {
        name: "Miriam Klein",
        title: "Coordinator, Women's",
        content:
          "“From the very beginning, the ParnasYom team made everything simple. Setup was smooth, and the support has been outstanding. We now have a system that encourages recurring dedications, with a calendar that makes it easy for anyone to participate. The digital board looks amazing and brings.",
        image: "/images/user-image-3.png",
      },
      {
        name: "Rachel Cohen",
        title: "Director, Beth El Synagogue",
        content:
          "ParnasYom transformed the way we approach fundraising. It’s more than just a tool—it’s a meaningful experience for our members. They feel a deep sense of pride in dedicating a day or week in memory of a loved one. The platform is clean, respectful, and very easy to use. It’s now a key part of our yearly giving strategy.",
        image: "/images/user-image-1.png",
      },
      {
          name: "David Steinberg",
          title: "President, Community Torah",
          content:
            "We were up and running faster than I expected. The custom screen and website are professional and beautifully designed. It gives our community members a sense of honor to dedicate in memory or celebration. It has not only increased donations but also strengthened our connection with supporters. ",
          image: "/images/user-image-2.png",
        },
        {
          name: "Miriam Klein",
          title: "Coordinator, Women's",
          content:
            "“From the very beginning, the ParnasYom team made everything simple. Setup was smooth, and the support has been outstanding. We now have a system that encourages recurring dedications, with a calendar that makes it easy for anyone to participate. The digital board looks amazing and brings.",
          image: "/images/user-image-3.png",
        },
    {
    name: "Rachel Cohen",
    title: "Director, Beth El Synagogue",
    content:
        "ParnasYom transformed the way we approach fundraising. It’s more than just a tool—it’s a meaningful experience for our members. They feel a deep sense of pride in dedicating a day or week in memory of a loved one. The platform is clean, respectful, and very easy to use. It’s now a key part of our yearly giving strategy.",
    image: "/images/user-image-1.png",
    },
    {
        name: "David Steinberg",
        title: "President, Community Torah",
        content:
        "We were up and running faster than I expected. The custom screen and website are professional and beautifully designed. It gives our community members a sense of honor to dedicate in memory or celebration. It has not only increased donations but also strengthened our connection with supporters. ",
        image: "/images/user-image-2.png",
    },
    {
        name: "Miriam Klein",
        title: "Coordinator, Women's",
        content:
        "“From the very beginning, the ParnasYom team made everything simple. Setup was smooth, and the support has been outstanding. We now have a system that encourages recurring dedications, with a calendar that makes it easy for anyone to participate. The digital board looks amazing and brings.",
        image: "/images/user-image-3.png",
    },
  ];

const ClientTestimonials = () => {
    return (
        <section className="client-testimonials" id="testimonials">
            <div className="cus-container">
                <div className="title-header">
                    <h2>What Our Partners Say</h2>
                    <p>Helping Mosdos grow—one dedication at a time. Here’s how organizations have benefitted from ParnasYom’s effortless and impactful solution.</p>
                </div>
                <div className="client-testimonial-hoder">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    autoplay={{
                    delay: 1000000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    }}
                    loop={true}
                    spaceBetween={30}
                    breakpoints={{
                    540: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="testimonial-box">
                            <img src="/images/quote-icon.svg" className="quote-icon" alt="Quote Icon" />
                            <div className="testi-header">
                                <img src={testimonial.image} alt={testimonial.name} className="user-avtar"
                                />
                                <div className="testi-info">
                                    <h3 className="testi-name">{testimonial.name}</h3>
                                    <p className="testi-degi">{testimonial.title}</p>
                                </div>
                            </div>
                            <div className="testimonial-content-box">
                                <img src="/images/rating-star-image.png" alt="Rating start" />
                                <p className="testimonial-text">{testimonial.content}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
               
                </div>
                <div className="btn-flex btn-center">
                    <Link href="#" className="cus-btn btn-main">Get Started </Link>
                    <Link href="#contact" className="cus-btn btn-dark">Contact Us </Link>
                </div>
            </div>
        </section>
    );
}

export default ClientTestimonials;