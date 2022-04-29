import react, {useRef } from "react";
import { auth } from "../firebase";

import "./SignUp.css";


function SignUp () {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then( (authUser) => {
            console.log(authUser);
        }).catch( error => {
            alert(error.message);
        }

        );
    };
    const signIn = (e) => {
        e.preventDefault();
        
     
       

    }

    return <div className="sign_up">
    <form>
        <h1>Sign In</h1>
        <input placeholder="Email" type='email' />
        <input placeholder="Password" type='password' />
        <button type="button" onClick={signIn} >Sign In</button>

        <h4> 
            <span className="gray">New to Netflix?</span>
           <span className="sign_link" onClick={register}> Sign Up now.</span> 
        </h4>
    </form>

    </div>
};

export default SignUp;