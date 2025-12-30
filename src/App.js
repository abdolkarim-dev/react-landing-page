import React from "react";
import Header  from "./Header/Header";
import HeroSection from './HeroSection/HeroSection';
import ContentFirst from './ContentFirst/ContentFirst'
import ClientSection from './ClientSection/ClientSection'
import FeaturesSection from './FeaturesSection/FeaturesSection'
import ServicesSection from './ServicesSection/ServicesSection'
import CallService from './CallService/CallService'
import CountsSection from './CountsSection/CountsSection'

function App() { 
  return (  
    <div>
      <Header /> 
      <HeroSection/>
      <ContentFirst/>
      <ClientSection/>
      <FeaturesSection/>
      <ServicesSection/>
      <CallService/>
      <CountsSection/>
    </div>
  );
}

export default App;
