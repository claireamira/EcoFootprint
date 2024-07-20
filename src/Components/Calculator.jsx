import React, { useState } from "react";
import './CalcStyling.css'
import Navbar from "./Navbar";

const CarbonFootprintCalculator = () => {
  const [transportType, setTransportType] = useState('');
  const [transportDistance, setTransportDistance] = useState('');
  const [foodType, setFoodType] = useState('');
  const [foodQuantity, setFoodQuantity] = useState('');
  const [wasteType, setWasteType] = useState('');
  const [wasteAmount, setWasteAmount] = useState('');
  const [fashionType, setFashionType] = useState('');
  const [fashionQuantity, setFashionQuantity] = useState('');
  const [transportCarbonFootprint, setTransportCarbonFootprint] = useState(null);
  const [foodCarbonFootprint, setFoodCarbonFootprint] = useState(null);
  const [wasteCarbonFootprint, setWasteCarbonFootprint] = useState(null);
  const [fashionCarbonFootprint, setFashionCarbonFootprint] = useState(null);
  const [totalCarbonFootprint, setTotalCarbonFootprint] = useState(null);

  const foodEmissionFactors = {
    beef: 60,
    lamb: 24,
    cheese: 21,
    pork: 7,
    chicken: 6,
    rice: 4,
    vegetables: 2,
    fruits: 1,
    peas: 1
  };

  const wasteEmissionFactors = {
    plastic: 2.7,
    paper: 1.3,
    food: 0.6
  };

  const fashionEmissionFactors = {
    polyester: 5.5,
    cotton: 3.2,
    wool: 17.5,
    nylon: 5.43,
    viscose: 3.3
  };

  const calculateTransportFootprint = async () => {
    const response = await fetch('https://www.carboninterface.com/api/v1/estimates', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer OqqBjuL2V6uCMW0MsQx5g`, 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        type: 'vehicle',
        distance_unit: 'km',
        distance_value: transportDistance,
        vehicle_model_id: "7268a9b7-17e8-4c8d-acca-57059252afe9" 
      })
    });

    const data = await response.json();
    if (data && data.data && data.data.attributes && data.data.attributes.carbon_mt !== undefined) {
      setTransportCarbonFootprint(data.data.attributes.carbon_mt);
      return data.data.attributes.carbon_mt;
    }
    return 0;
  };

  const calculateFoodFootprint = () => {
    const carbonFactor = foodEmissionFactors[foodType] || 0;
    const foodCarbon = foodQuantity * carbonFactor;
    setFoodCarbonFootprint(foodCarbon);
    return foodCarbon;
  };

  const calculateWasteFootprint = () => {
    const carbonFactor = wasteEmissionFactors[wasteType] || 0;
    const wasteCarbon = wasteAmount * carbonFactor;
    setWasteCarbonFootprint(wasteCarbon);
    return wasteCarbon;
  };

  const calculateFashionFootprint = () => {
    const carbonFactor = fashionEmissionFactors[fashionType] || 0;
    const fashionCarbon = fashionQuantity * carbonFactor;
    setFashionCarbonFootprint(fashionCarbon);
    return fashionCarbon;
  };

  const calculateTotalFootprint = async () => {
    const transportCarbon = await calculateTransportFootprint();
    const foodCarbon = calculateFoodFootprint();
    const wasteCarbon = calculateWasteFootprint();
    const fashionCarbon = calculateFashionFootprint();

    const totalCarbon = transportCarbon + foodCarbon + wasteCarbon + fashionCarbon;
    setTotalCarbonFootprint(totalCarbon);
  };

  return (
    <>
    <Navbar/>
    <div className="container">
        
    <h1>Carbon Footprint Calculator</h1>

    <div className="form-group">
      <h2>Transport</h2>
      <select value={transportType} onChange={(e) => setTransportType(e.target.value)}>
        <option value="">Select Transport Type</option>
        <option value="car">Car</option>
        <option value="bus">Bus</option>
        <option value="bike">Bike</option>
      </select>
      <input
        type="text"
        placeholder="Distance in km"
        value={transportDistance}
        onChange={(e) => setTransportDistance(e.target.value)}
      />
      <button onClick={calculateTransportFootprint}>Calculate Transport Footprint</button>
      {transportCarbonFootprint !== null && <p>Transport Carbon Footprint: {transportCarbonFootprint} metric tons</p>}
    </div>

    <div className="form-group">
      <h2>Food & Beverage</h2>
      <select value={foodType} onChange={(e) => setFoodType(e.target.value)}>
        <option value="">Select Food Type</option>
        <option value="beef">Beef</option>
        <option value="lamb">Lamb</option>
        <option value="cheese">Cheese</option>
        <option value="pork">Pork</option>
        <option value="chicken">Chicken</option>
        <option value="rice">Rice</option>
        <option value="vegetables">Vegetables</option>
        <option value="fruits">Fruits</option>
        <option value="peas">Peas</option>
      </select>
      <input
        type="number"
        placeholder="Quantity in kg"
        value={foodQuantity}
        onChange={(e) => setFoodQuantity(e.target.value)}
      />
      <button onClick={calculateFoodFootprint}>Calculate Food Footprint</button>
      {foodCarbonFootprint !== null && <p>Food & Beverage Carbon Footprint: {foodCarbonFootprint} kg CO2</p>}
    </div>

    <div className="form-group">
      <h2>Waste</h2>
      <select value={wasteType} onChange={(e) => setWasteType(e.target.value)}>
        <option value="">Select Waste Type</option>
        <option value="plastic">Plastic</option>
        <option value="paper">Paper</option>
        <option value="food">Food</option>
      </select>
      <input
        type="number"
        placeholder="Amount in kg"
        value={wasteAmount}
        onChange={(e) => setWasteAmount(e.target.value)}
      />
      <button onClick={calculateWasteFootprint}>Calculate Waste Footprint</button>
      {wasteCarbonFootprint !== null && <p>Waste Carbon Footprint: {wasteCarbonFootprint} kg CO2</p>}
    </div>

    <div className="form-group">
      <h2>Fashion</h2>
      <select value={fashionType} onChange={(e) => setFashionType(e.target.value)}>
        <option value="polyester">Polyester</option>
        <option value="cotton">Cotton</option>
        <option value="wool">Wool</option>
        <option value="nylon">Nylon</option>
        <option value="viscose">Viscose</option>
      </select>
      <input
        type="text"
        placeholder="Quantity in kg"
        value={fashionQuantity}
        onChange={(e) => setFashionQuantity(e.target.value)}
      />
      <button onClick={calculateFashionFootprint}>Calculate Fashion Footprint</button>
      {fashionCarbonFootprint !== null && <p>Fashion Carbon Footprint: {fashionCarbonFootprint} kg CO2</p>}
    </div>

    <button onClick={calculateTotalFootprint}>Calculate Total Footprint</button>
    {totalCarbonFootprint !== null && <p>Total Carbon Footprint: {totalCarbonFootprint} kg CO2</p>}
  </div>
  </>
  );
};

export default CarbonFootprintCalculator;
