import React, { useState } from 'react'
import { Link } from "react-router-dom"

export default function Signup() {

    const [name, setName] = useState({ text: "", invalid: false })
    const [email, setEmail] = useState({ text: "", invalid: false })
    const [password, setPassword] = useState({ text: "", invalid: false })
    const [repassword, setReassword] = useState({ text: "", invalid: false })
    const [warning, setWarning] = useState({ invalid: false, content: "" })

    const refreshForm = () => {
        setName({ text: "", invalid: false })
        setEmail({ text: "", invalid: false })
        setPassword({ text: "", invalid: false })
        setReassword({ text: "", invalid: false })
        setWarning({ content: "", invalid: false })
    }

    const validateEmail = (email) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return (true)
        }
        return (false)
    }

    const validatePass = (pass) => {
        if (pass.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)) {
            return (true)
        }
        return (false)
    }

    const _post = (e) => {
        e.preventDefault()
        if (!name.text & !email.text & !password.text & !repassword.text) {
            alert('Please fill all the fields')
            refreshForm()
        }
        else {
            let emailValid = validateEmail(email.text)
            let passwordValid = validatePass(password.text)
            let repasswordValid = validatePass(repassword.text)
            //pass has at least 6 to 20 charactes and special symbol
            console.log(passwordValid);
            if (!emailValid) {
                setEmail({ text: "", invalid: true })
            }
            else if (!passwordValid) {
                setPassword({ text: "", invalid: true })
            }
            else if (password.text != repassword.text) {
                setWarning({ invalid: true, content: "your two password weren't match" })
            } else {
                refreshForm()
            }
        }

    }

    return (
        <div className="mycard">
            <div className="card auth-card input-field ">
                <h2 className="brand-logo" >instagram</h2>
                <form action="#" onSubmit={_post}>

                    <input type="text"
                        placeholder="your account"
                        value={name.text}
                        onChange={(e) => setName({ invalid: false, text: e.target.value })}
                    />

                    <input type="text"
                        placeholder="email"
                        value={email.text}
                        onChange={(e) => setEmail({ invalid: false, text: e.target.value })}
                    />
                    {email.invalid ? <span className="red-text text-accent-4"><h6>your email wasn't right</h6></span> : ""}
                    <input type="password"
                        placeholder="password"
                        value={password.text}
                        autoComplete="off"
                        onChange={(e) => setPassword({ invalid: false, text: e.target.value })}
                    />
                    {password.invalid ? <span className="red-text text-accent-4"><h6>Input Password and Submit 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter</h6></span> : ""}
                    <input type="password"
                        placeholder="re-password"
                        value={repassword.text}
                        autoComplete="off"
                        onChange={(e) => setReassword({ invalid: false, text: e.target.value })}
                    />
                    {repassword.invalid ? <span className="red-text text-accent-4"><h6>Input Password and Submit 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter</h6></span> : ""}
                    <button
                        className="btn waves-effect  red" type="submit">
                        Login
                    </button>
                    {warning.invalid ? <span className="red-text text-accent-4"><h6>your passwords weren't match</h6></span> : ""}
                </form>
                <span >
                    <h5>
                        Already have a account?
                    </h5>
                    <Link to="/signin" className=" indigo-text text-darken-3"><h5>Sign in</h5></Link>
                </span>
            </div>
        </div>
    )
}
