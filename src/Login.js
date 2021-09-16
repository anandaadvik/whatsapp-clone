import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import './Login.css';
function Login() {
    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then((result)=>console.log(result))
        .catch((error)=>alert(error.message));
    };
    return (
        <div className="login">
            <div className="login_container">
                <img className="login_logo" src="https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-1024.png" alt="Whatsapp Rooms" />
                <div className="login_text">Sign In to WhatsApp Rooms</div>
                <Button onClick={signIn}>Sign In using Google</Button>
            </div>
        </div>
    )
}

export default Login
