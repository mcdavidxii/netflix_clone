import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login">
        <div className='login_background'>
            <img className='login_logo' src='http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c529.png' alt='' />
            <button className='login_button'>Sign In</button>
            <div className='login_gradient'></div>
            <div className='login_body'>
                <>
                    <h1>Unlimited films, Tv prgrammes and more.</h1>
                    <h2>Watch anywhere. Cancel at any time.</h2>
                    <h3>Ready to watch? Enter your email to create ot restart your membership.</h3>

                    <div className='login_input'>
                        <form>
                            <input type="email"  placeholder='Email Address'/>
                            <button className='login_button_getStarted'>Get Started</button>
                        </form>
                    </div>

                </>
            </div>
        </div>
    </div>
  );
}

export default Login;