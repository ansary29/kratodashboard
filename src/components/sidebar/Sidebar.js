import React from 'react';
import './Sidebar.css';
import {FaList,FaTrophy,FaUserFriends,FaRegSun,FaPoll,FaHome,FaBitcoin} from "react-icons/fa";



function Sidebar() {
  return ( 
    <>
      <div className='scontainer'>
          <div className='sitem'>
               <div className='sicon'> <FaList/>  </div>
               <div className='ssiconname'>
               </div>
          </div>
          <div className='sitem'>
               <div className='sicon'><FaHome/></div>
               <div className='siconname'>Home
               </div>
          </div>
           <div className='sitem'>
               <div className='sicon'><FaTrophy/></div>
               <div className='siconname'>Projects
               </div>
          </div>
          <div className='sitem'>
               <div className='sicon'><FaBitcoin/></div>
               <div className='siconname'>BIllings
               </div>
          </div>
          <div className='sitem'>
               <div className='sicon'><FaUserFriends/></div>
               <div className='siconname'>Teaam Members
               </div>
          </div>
          <div className='sitem'>
               <div className='sicon'><FaPoll /></div>
               <div className='siconname'>Stats
               </div>
          </div>
          <div className='sitem'>
               <div className='sicon'><FaRegSun /></div>
               <div className='siconname'>Settings
               </div>
          </div>
        
         
          

      </div>
    </>
  )
}

export default Sidebar