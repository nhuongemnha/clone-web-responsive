import React from "react";
import CardService from "../../components/CardService/CardService";
import Contact from "../../components/Contact/Contact";
import Design from "../../components/Design/Design";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import OurTeam from "../../components/OurTeam/OurTeam";
import Work from "../../components/Work/Work";

const Home = () => {
  return (
    <div className="bg-black text-white relative h-full">
      <Header />
      <Work />
      <Design />
      <CardService />
      <OurTeam />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
