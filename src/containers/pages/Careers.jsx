import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layouts/Layout";
import Footer from "../../components/navigation/Footer";
import { useEffect } from "react";
import Header from "components/Careers/Header";
import Testimonial from "components/Careers/testimonial";
import LogoCloud from "components/Home/LogoCloud";
import SingleTitle from "components/Careers/SingleTitle";
import Features from "components/Home/Features";
import PositionsList from "components/Careers/PositionsList";
import { Helmet } from "react-helmet-async";

function Careers () {
  useEffect(() => {
    window.scrollTo(0, 0)
  } , [])
  return (
    <Layout>
         <Helmet>
          <title>Our Careers</title>
          <meta name="description" content="Boomslag is a creative agency that specializes in branding, web design, and marketing." />
          <meta name="keywords" content="marketing, branding, web design, creative agency" />
          <meta name="author" content="Boomslag" />
          <meta name="publisher" content="Boomslag" /> 
          <meta name="robots" content="all" />
          <link rel="canonical" href="https://boomslag.com" />

          {/* Social Media Tags */}
          <meta property="og:title" content="Boomslag | Marketing Agency" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://boomslag.com" />
          <meta property="og:image" content="https://boomslag.com/images/boomslag-logo.png" />
          <meta property="og:description" content="Boomslag is a creative agency that specializes in branding, web design, and marketing." />
          <meta property="og:site_name" content="Boomslag" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@boomslag" />
          <meta name="twitter:title" content="Boomslag | Marketing Agency" />
          <meta name="twitter:description" content="Boomslag is a creative agency that specializes in branding, web design, and marketing." />
          <meta name="twitter:image" content="https://boomslag.com/images/boomslag-logo.png" />
       </Helmet>
      <Navbar />
      <div className="pt-24">
        <Header />
        <Testimonial />
        <SingleTitle />
        <LogoCloud />
        <Features />
        <PositionsList />
      </div>
      <Footer />
    </Layout>
  );
}

export default Careers;