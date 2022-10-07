

import './LandingPage.css';

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
       
        <button class="button-81" role="button" style={{ marginLeft:"100px"}}>Create challenge</button>
      </div>
    );
  }
     
  export default Landing