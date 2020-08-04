import React, { useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { checkAuth } from "../../../redux/actions/index"
import M from "materialize-css"

export default function Signin() {

    const response = useSelector(state => state.signinReducer)
    const announcement = response.response

    const dispatch = useDispatch()
    let history = useHistory();
    let location = useLocation();

    console.log("call");
    const [email, setEmail] = useState("admin@gmail.com")
    const [password, setPassword] = useState("Long@2010")

    const _submit = (e) => {
        e.preventDefault()
        if (email && password) {
            let user = {
                email,
                password
            }
            dispatch(checkAuth(user))
        } else {
            M.toast({
                html: "Please fill all the fields",
                classes: "red",
            })
        }
        setEmail("")
        setPassword("")
    }

    useEffect(() => {
        let auth = localStorage.getItem('auth')
        if (auth) {
            if (announcement) {
                //     M.toast({
                //         html: announcement,
                //         classes:"light-green darken-3",
                //         completeCallback:MoveHome,
                //         inDuration:100,
                //         outDuration:10
                //     })
                MoveHome()
                M.toast({
                    html: announcement,
                    classes: "light-green darken-3",
                    completeCallback: MoveHome,
                    inDuration: 100,
                    outDuration: 10
                })
            }
            function MoveHome() {
                let { from } = location.state || { from: { pathname: "/" } };
                history.replace(from)

            }


        } else if (!response.loading) {
            console.log(response);
            if (response.error) {
                M.toast({ html: announcement, classes: "red" })
            }
        }
    }, [response]);

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
