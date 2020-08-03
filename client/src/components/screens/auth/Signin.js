import React, { useState } from 'react'
import { Link } from "react-router-dom"

export default function Signin() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const _submit = (e) =>{
        e.preventDefault()
        if(!email & !password){
            console.log("good");
        }
        setEmail("")
        setPassword("")
    }

    return (
        <div className="mycard">
            <div className="card auth-card input-field ">
                <h2 className="brand-logo">instagram</h2>
                <form action="#" onSubmit={_submit}>

                    <input type="text"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input type="password"
                        placeholder="password"
                        autoComplete="off"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className="btn waves-effect  red"
                     type="submit" name="action">
                        Login
                    </button>

                </form>
                <span >
                    <h5>
                        Don't have a account?
                    </h5>
                    <Link to="/signin" className=" indigo-text text-darken-3"><h5>Sign up</h5></Link>
                </span>
            </div>
        </div>
    )
}
