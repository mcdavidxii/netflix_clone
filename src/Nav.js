import React, { useEffect, useState } from 'react';
import './Nav.css';


function Nav() {

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


    const netflixLogo ='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png';
    const netflixAvatar = 'https://i.pinimg.com/originals/1b/71/b8/1b71b85dd741ad27bffa5c834a7ed797.png';
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className='nav_0logo'
                src={netflixLogo}
                alt='Netflix Logo'
            />

            <img  
                className='nav_avatar'
                src={netflixAvatar}
                alt='Netflix Avatar' />
            
        </div>
    )
}

export default Nav
