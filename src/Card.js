
import data from './data.json'


function Card() {
  const Card = data.Card
    return (
      Card.map((record,i)=> 
      
      <div style={{backgroundColor:"#e3f0f5" ,padding:"20px", height:"200px" , width:"600px" ,marginTop:"15px", borderRadius:"20px", marginLeft:"50px"}} key={i}>
        <img src={record.icon} alt={record.title}/>
        <br/> 
        <h2 style={{marginTop:"10px"}}>
          {record.title}
        </h2>
        <br/>          
        <p>
        {record.content}
        </p>
                 
      </div>
    )
    )
  }
     
  export default Card