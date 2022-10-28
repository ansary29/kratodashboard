import React from "react";
import Example from'./Example.js';
import './Rigth.css'

import {FaStore,FaUserCircle,FaProductHunt,FaRev} from "react-icons/fa";

function Right() {
  return (
    <>
      <div className="rcontainer">
   
        <div className="abovecontainer">
          <h2>Sales Revenue</h2>
          <div className="ritem">
            <div className="ritemicon"><span className="icon"><FaStore/></span></div>
            <div className="ritemtext">
              <div className="number">230k</div>
              <div className="ritemname">Sales</div>
            </div>
          </div>
          <div className="ritem">
            <div className="ritemicon"><FaUserCircle/></div>
            <div className="ritemtext">
              <div className="number">8.549k</div>
              <div className="ritemname">Customers</div>
            </div>
          </div>
          <div className="ritem">
            <div className="ritemicon"><FaProductHunt/></div>
            <div className="ritemtext">
              <div className="number">1.423k</div>
              <div className="ritemname">Products</div>
            </div>
          </div><div className="ritem">
            <div className="ritemicon"><FaRev/></div>
            <div className="ritemtext">
              <div className="number">$9745</div>
              <div className="ritemname">Revenue</div>
            </div>
          </div>
        </div>
        <div className="belowcontainer"></div>
        <div className="belowritem">
    
          <h1>statistics</h1>
          <Example/>
        </div>
        
       
           
          
           
      </div>
    
          
    </>
  );
}

export default Right;
