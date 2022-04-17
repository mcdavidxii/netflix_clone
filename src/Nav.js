import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {

  //------------------------- Scrolling Functions---------------------------------
  const[show,setShow] = useState(false);

  const transitionNavBar= () => {
    if (window.scrollY > 100){
      setShow(true);
    }else{
      setShow(false);
    }
  };

  useEffect(
    () => {
      window.addEventListener("scroll",transitionNavBar);
      return () => window.removeEventListener("scroll",transitionNavBar);
    },[]
  );
  
  // ---------------------------------------------------------------------------------

  


  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className='nav_contents'>
      <img className='nav_logo' src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt='' />
     
      <img  className='nav_avatar' src='https://i.pinimg.com/originals/1b/71/b8/1b71b85dd741ad27bffa5c834a7ed797.png' alt=''/>
      </div>
    </div>
  )
}

export default Nav;