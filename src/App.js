import React from 'react';
import './App.css';
import Nav from './Nav.js'
import Card from './Card.js'
import HackathonCard from './HackathonCard.js'
import Landing from './LandingPage.js'
import Explore from './Explore.js'
function App() {
	return (
		<div>
			<Nav/>
      <Landing/>
      <br/><br/><br/>
<h1 style={{textAlign:"center"}}>Why participate in <span style={{color:"green"}}>AI challenges</span></h1>
<br/><br/><br/>
      <div style={{  width:"100%",justifyContent:"center", display:"flex",flexWrap: "wrap",marginTop:"10px"}}>
      <Card /> 
      </div>
     
<br/><br/><br/><br/>
<div style={{ backgroundColor:"#183238" }}>
<h1 style={{textAlign:"center",color:"white", height:"200px", paddingTop:"35px"}}>Explore Challenges</h1>
</div>

<div style={{width:"100%",justifyContent:"center", display:"flex",flexWrap: "wrap" , backgroundColor:"#093140" ,alignItems:"center", paddingTop:"50px", paddingBottom:"50px"}}>
<HackathonCard/>
      
      
      
      
</div>

     

			
		</div>
	)
}



export default App
