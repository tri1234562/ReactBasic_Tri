import React from 'react';
import './BackDrop.css'

const backdrop = (props) => 
   {
      //  let styleclass = ["BackDrop"]
      //  if(props.mobiDB)
      //  {
      //      styleclass.push("onlyMobi");
      //  }
       return(
            props.show? <div className={props.mobiBD? "BackDrop mobiOnly": "BackDrop"} onClick={props.clickedBD} ></div>:null
       )
   }
        
   

    
export default backdrop;