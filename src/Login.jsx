import React, { useState } from "react"

export const Login=(props)=>{
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
}

    return(
        <>
        <form onSubmit={handleSubmit}>
            
            <label for="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Youremail@gmail.com" id="email" name="email" />
            <br />
            <label for="password">password</label>
            <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="password" id="password" name="password" />
            <br />
            <button type="submit">Log in</button>
        </form>
        <button onClick={() => props.onFormSwitch('register')} >Don't have an account? Register here.</button>
        </>
       
        
    )
}