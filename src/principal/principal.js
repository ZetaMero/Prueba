import React from 'react';
import "./principal.css";
import {
  
  Link, 
 
} from "react-router-dom";

export default function principal() {
    return (
        <>
			<h1>TE AMO DE CLICK EN EL CORAZON</h1>
			<h1 className="nombre">YELITZA Y EDER</h1>
			 <Link to="/teamo" >
			<div className="heart-shape">
			
		       
			  
				
			</div>
             </Link> 
            </>
    )
}
