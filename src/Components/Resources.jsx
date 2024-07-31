import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import floods from '../assets/wide_flood.jpg'
import ghg from '../assets/ghg_piechart.jpg'
import './ResourceStyling.css'



const ResourcesPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <section>
          <h2>INFORMATION</h2>
          <h3 style={{color: "#2c6941"}}>Climate Change</h3>
          <p >What is Climate Change?</p>
          <p>
            Climate Change (also known as Global Warming) is the name given to long term changes to temperature on and around the Earth’s surface, which causes long term shifts to weather patterns. Climate Change isn't limited to one region, it impacts the whole of the Earth. It is causing polar ice sheets and glaciers to melt; and sea levels to rise. Extreme weather events such as typhoons and hurricanes are becoming more common in some regions of the world, while others regions experience more punishing droughts and heat waves.
          </p>
          <p>
            The warmer ocean surface temperatures impact corals and alter coral reef communities by prompting coral bleaching events and altering ocean chemistry. These impacts affect corals and the many organisms that use coral reefs as habitat.
          </p>
          <img src={floods} alt="Wide Flood" className="img-fluid my-3" style={{width:"900px", height: "450px"}}/>

        
          <h4 style={{color: "#2c6941"}}>How do Greenhouse gases (GHG)s change the temperature?</h4>
          <p>
            GHGs are able to absorb long wave radiation (heat) that is reflected off the Earth’s surface. They are then able to reemit this radiation back down to Earth. If there were no GHGs in our atmosphere the Earth would be too cold for life as we know it to exist. However, as more fossil fuels are burnt and other GHGs are released, the atmosphere is able to absorb more radiation and so is warming up. This is known as the greenhouse effect.
          </p>

          <h4 style={{color: "#2c6941"}}>What are the largest sources of GHGs?</h4>
          <p>
            GHG emissions come from a range of human activities including electricity generation, industrial process, and transportation. Currently, electricity and transport represent the largest sources of emissions and greatest opportunity for saving.
          </p>
          <img src={ghg} alt="GHG Pie Chart" className="img-fluid my-3" />
          <p className="text-muted">Source: Davis et al. (2018)</p>

        
          <h4 style={{color: "#2c6941"}}>What effects of climate change are being seen?</h4>
          <p>
            The effects of climate change are already being seen across the Earth. The IPPC reported in the 5th Assessment Report that since 1880 there has been an increase in average surface temperature of 0.85⁰C. This may seem like a small number compared to changes in daily temperature however to put it into comparison how small global temperature changes can have a large effect, if the Earth’s surface temperature was lowered by 5⁰C it would be in a full ice age.
          </p>

          <h4 style={{color: "#2c6941"}}>Other changes currently being seen:</h4>
          <ul>
            <li>Increase in sea level (global sea level has increased by 0.19m between 1910 and 2010)</li>
            <li>Increase in sea surface temperature (global average increase of 0.11⁰C between 1971 and 2010)</li>
            <li>Reduction in sea ice (2016 saw the lowest winter sea ice ever recorded, beating the 2015 record)</li>
            <li>Change in precipitation (Some areas of the Earth are becoming seeing more intense flooding while others are seeing severe droughts)</li>
            <li>Change in El Nino intensity (As El Nino intensity is in part based on sea surface temperatures, rising temperatures will cause more intense El Ninos causing flooding, droughts, wildfires, and famines)</li>
            <li>Ocean Acidification (The acidity of the oceans has decreased by 0.1 on the pH scale since the beginning of the industrial era)</li>
          </ul>

          <h4 style={{color: "#2c6941"}}>Actions for You</h4>
          <p>
            In December 2015, the COP21 Climate Change conference produced the so-called Paris Agreement, a Global agreement between nations that aims to keep the rise in temperature to 1.5⁰C and to ensure that the temperature rise stays well below 2⁰C above preindustrial times. In order for this to be achieved, the global GHG emissions must be stabilized and then reduced.
          </p>
          <p>
            We all need to play a part in reducing GHGs and there are many ways of doing this- and here’s how:
          </p>
          <ul>
            <li>Assess your household’s Carbon Footprint using our Carbon Calculator to find out the quantity of carbon emissions produced by your lifestyle and choices</li>
            <li>Make a plan to reduce emissions & do it! See our carbon reduction recommendation for individuals, energy saving for households, and holiday carbon footprint information pages to find ways that you can reduce your emissions.</li>
            <li>Reduce at your Workplace - if you want to get your organization involved in reducing their emissions then Carbon Footprint Ltd offers business services to enable you to do this.</li>
            <li>Support Carbon Offsetting Projects across the World – In modern life, you are unlikely to be able to get your carbon emissions down to zero (unless you have full access to renewable energies and clean energy-powered cars etc). The average family of 4 causes 10 tonnes CO2 each year. Remember a tonne of CO2 saved in Mumbai is the same as one saved in Manchester or Miami. Carbon Offsetting programme.</li>
          </ul>

          <h4 style={{color: "#2c6941"}}>More information on Climate Change</h4>
          <ul>
            <li><a href="http://www.ipcc.ch/report/ar5/">Read about the science of climate change, the impacts it will have and the mitigation strategies needed to reduce its effects. If you do not want to read the full report, the summary for policy makers is a shorter document which summarises all the main points.</a></li>
            <li><a href="http://newsroom.unfccc.int/">Read about the Paris Agreement, see how many countries have ratified it and keep up to date on all news concerning climate change.</a></li>
            <li><a href="https://www.theccc.org.uk/">Information on how the UK is adapting to climate change and how it is reducing its emissions.</a></li>
            <li><a href="http://climate.nasa.gov/">Contains insightful infographics, recent news stories on climate change and explains how NASA is collecting data relating to Climate Change.</a></li>
            <li><a href="https://www.theguardian.com/environment/climate-change">News stories updated daily about climate change and its effects around the world.</a></li>
          </ul>
          
          <h4 style={{color: "#2c6941"}}>References</h4>
          <ul>
            <li><a href="https://www.ncdc.noaa.gov/cag/">NOAA National Centers for Environmental information (NCEI), (2020), Climate at a Glance: Global Time Series. Published: May 2020, retrieved on: 22 May 2020.</a></li>
            <li><a href="https://www.ncdc.noaa.gov/billions/">NOAA National Centers for Environmental Information (NCEI) (2022) U.S. Billion-Dollar Weather and Climate Disasters. Published: January 2022, retrieved on: 14 January 2022, from https://www.ncdc.noaa.gov/billions/, DOI: 10.25921/stkw-7w73</a></li>
            <li><a href="https://science.sciencemag.org/content/sci/360/6396/eaas9793.full.pdf#page=9&zoom=100,0,0">Davis, S. J. et al., (2018), Net-Zero emissions energy systems. Figure 2. Corrected 29 June 2018, retrieved on: 22 May 2020, from https://science.sciencemag.org/content/sci/360/6396/eaas9793.full.pdf#page=9&zoom=100,0,0</a></li>
          </ul>

        </section>
      </div>
    </>
  );
};

export default ResourcesPage;
