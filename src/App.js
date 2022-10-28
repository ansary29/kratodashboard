
import "./App.css";
import Right from "./components/right/Right.js";
import Sidebar from "./components/sidebar/Sidebar.js";
import Middle from "./components/middle/Middle";


function App() {
  return (
    <>
    <div className="main">
      <div className="side">
      <Sidebar/>
    
      </div>
    <div className="cen">
    <Middle/>
    </div>
    <div className="rig">
      <Right/>

    </div>
    
   
   
    </div>
    

    </>
  );
}

export default App;
