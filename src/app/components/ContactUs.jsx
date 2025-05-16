'use client';
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";


const ContactUs = () => {
    const [captchaToken, setCaptchaToken] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    // For now, just show the token (this is where you'd send it to backend)
    console.log("Captcha Token:", captchaToken);
    alert("Form submitted with CAPTCHA!");
  };
    return (
        <section className="contact-section" id="contact">
            <div className="cus-container">
                <div className="title-header">
                    <h2>Have Any Question?</h2>
                    <p>If you have any questions, feel free to contact us. We are happy to assist you. Get in touch with us, and we’ll respond as soon as possible.</p>
                </div>
                <form method="POST" action="/api/contact">
                    <div className="form-row-wrapper">
                        <div className="col-third-half">
                            <input type="text" name="name" placeholder="Your Name" required />
                        </div>
                        <div className="col-third-half">
                            <input type="email" name="email" placeholder="Email Address" required />
                        </div>
                        <div className="col-third-half">
                        <input type="tel" name="phone" placeholder="Phone No." required />
                        </div>
                    </div>
                    <div className="form-row-wrapper">
                        <div className="col-full">
                            <textarea name="message"placeholder="Message"requiredrows={5}></textarea>
                        </div>
                    </div>
                    <div className="form-row-wrapper g-recaptcha-main">
                        <div className="col-full">
                              <ReCAPTCHA
                                    sitekey="6LfewzwrAAAAABb2-n0Z6ZEHkDgmhETUaB61aBq3"  // Replace this!
                                    onChange={(token) => setCaptchaToken(token)}
                                />
                        </div>
                    </div>
                    <div className="form-row-wrapper">
                        <div className="col-full dubmit-btn">                        
                            <button type="submit" className="cus-btn btn-main"> Submit Now </button>
                        </div>
                    </div>      
                </form>
            </div>
        </section>
    )
}

export default ContactUs;