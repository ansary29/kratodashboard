import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {FaEye,FaRecordVinyl,FaBriefcase} from "react-icons/fa";
import "./Middle.css";

function Middle() {
  return (
    <>
      <div className="container">
        <div className="subcontainer">
          <div className="inputsearch">
            <form>
              <label>
               
                <input type="text"  placeholder="Search Here"/>
              </label>
            </form>
          </div>
          <div className="nameclass">
            <div className="left">
              <h1>Hello David</h1>
              <p>Welcome Back!</p>
            </div>
            <div className="right">
              <p>Fliters</p>
            </div>
          </div>
          <div className="time">
            <div className="timeblock">
              <div className="icon"><FaEye/></div>
              <div className="icontext">
                <span>Views</span>
              </div>
              <div className="Count">
                <span>500</span>
              </div>
              <div className="counttext">
                <span>Per Day</span>
              </div>
            </div>
            <div className="timeblock">
              <div className="icon"><FaRecordVinyl/></div>
              <div className="icontext">
                <span>Visits</span>
              </div>
              <div className="Count">
                <span>2000</span>
              </div>
              <div className="counttext">
                Per Minutes
              </div>
            </div>
            <div className="timeblock">
              <div className="icon"><FaBriefcase/></div>
              <div className="icontext">
                <span>Orders</span>
              </div>
              <div className="Count">
                <span>5100</span>
              </div>
              <div className="counttext">
                <span>Per Day</span>
              </div>
            </div>
          </div>
          <div className="details">
            <div className="topdetails">
              <div className="item">
                <div className="left">
                  <div className="name">
                    <span>Sales</span>
                  </div>
                  <div className="desc">
                    <span>Total Sales Today</span>
                  </div>
                  <div className="amount">
                    <span>$500</span>
                  </div>
                </div>
                <div className="right">
                  <div style={{ width: 50, height: 50 }}>
                    <CircularProgressbar value={55} text={`${55}%`}/>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="left">
                  <div className="name">
                    <span>Profit</span>
                  </div>
                  <div className="desc">
                    <span>Per day   ratio</span>
                  </div>
                  <div className="amount">
                    <span>$150</span>
                  </div>
                </div>
                <div className="right">
                <div style={{ width: 50, height: 50 }}>
                    <CircularProgressbar value={30} text={`${30}%`}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="topdetails">
              <div className="item">
                <div className="left">
                  <div className="name">
                    <span>Orders</span>
                  </div>
                  <div className="desc">
                    <span>Total Order Today</span>
                  </div>
                  <div className="amount">
                    <span>1000</span>
                  </div>
                </div>
                <div className="right">
                <div style={{ width: 50, height: 50 }}>
                    <CircularProgressbar value={80} text={`${80}%`} />
                  </div>            
                   </div>
              </div>
              <div className="item">
                <div className="left">
                  <div className="name">
                    <span>Visits</span>
                  </div>
                  <div className="desc">
                    <span>Total Visit to</span>
                  </div>
                  <div className="amount">
                    <span>4000</span>
                  </div>
                </div>
                <div className="right">
                <div style={{ width: 50, height: 50 }}>
                    <CircularProgressbar value={70} text={`${70}%`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Middle;
