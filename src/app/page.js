'use client';
import '@/app/styles/home.css'; 
import HeroBanner from './components/HeroBanner';
import Dedications from './components/Dedication';
import HowItWorks from './components/HowItWorks';
import WhyChoose from './components/WhyChoose';
import OurCustomers from './components/OurCustomers';
import ClientTestimonials from './components/ClientTestimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Header from './components/Header';


const dedicationItems = [
  "Personalized systems for each organization",
  "Increase annual giving through recurring dedications",
  "Easy setup, digital screen, and branded website included",
];

const Home = () => {
  return (
    <main className="main-index main-homepage">
        <Header />

        <HeroBanner />
        <Dedications items={dedicationItems} />
        <HowItWorks />
        <WhyChoose />
        <OurCustomers />
        <ClientTestimonials />
        <ContactUs />

        <Footer />
    </main>
  )
}

export default Home;