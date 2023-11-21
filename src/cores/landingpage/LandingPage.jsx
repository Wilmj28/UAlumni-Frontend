import React from "react";
import NavBar from "../../components/Navbar";
import EgresadosFoto from '../../images/egresados.jpg';

function LandingPage() {
  return (
    <div>
      <NavBar/>  
      <img src={EgresadosFoto} alt="Egresados" width="100%" height="auto"/>
      <h1>Landing Page</h1>
    </div>
  );
}
export default LandingPage;