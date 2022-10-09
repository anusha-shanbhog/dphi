import './LandingPage.css';

import CreateForm from './Create.js';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
function Landing() {
    return (
     
      <div style={{backgroundColor:"#093140" , height:"700px"}}>
       <img align="right" src="PicsArt_04-14-04.42 1.svg" style={{marginTop:"10%",marginRight:"10%"}}/>
        <h1 style={{color:"white",fontSize:"55px",paddingTop:"120px", paddingLeft:"100px", width:"60%"}} >
          Accelerate Innovation with Global AI Challenges
        </h1>
        
        <br/>          
        <p style={{color:"white",fontSize:"25px",paddingTop:"30px", paddingLeft:"100px", width:"50%",lineHeight:"35px"}}>
        AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science
        skills to test on diverse datasets allowing you to foster learning through competitions.
        </p>
        <br/><br/>
       
        <button class="button-81" role="button" style={{ marginLeft:"100px"}} onClick={<CreateForm/>}><Link to="/Create">Create Challenge</Link></button>
        
       <div style={{backgroundColor:"#111924",height:"128px"}}>
  <div style={{ marginLeft:"120px",marginTop:"90px",display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 ,color:"white"}}>
    <div style={{marginTop:"35px"}}><img src="Group 1000002515.svg" style={{marginRight:"20px"}} align="left"/><h3 style={{marginTop:"5px"}}>100K+</h3><h4>AI model submissions</h4></div>
    <div style={{marginTop:"35px"}}><img src="Group 1000002516.svg" style={{marginRight:"20px"}} align="left"/><h3 style={{marginTop:"5px"}}>50K+</h3><h4>Data Scientists</h4></div>
    <div style={{marginTop:"35px"}}><img src="Group 1000002518.svg" style={{marginRight:"20px"}} align="left"/><h3 style={{marginTop:"5px"}}>100+</h3><h4>AI challenges hosted</h4></div>
  </div>
  </div>
  <br/><br/>
      </div>
      

    );
  }
     
  export default Landing