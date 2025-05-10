'use client';

const ContactUs = () => {
    
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