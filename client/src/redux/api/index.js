import apiURL from "./api"

const Signin = async (resquest) => {
    const { user } = resquest
    const requestOption = {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    }

    const response = await fetch(apiURL.signin, requestOption)
    const data = await response.json()

    if (response.status >= 400) {
        alert(data.error)
    } else {
console.log(data);
        localStorage.setItem('auth', true)
        localStorage.setItem('acessToken', data.token)
        return true
    }

}

const Signup = async (resquest) => {
    const { user } = resquest
    const requestOption = {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    }

    const response = await fetch(apiURL.signup, requestOption)
    const data = await response.json()
    if (response.status >= 400) {
        alert(data.message)
    }else{
    return true
    }
}

export {
    Signin,
    Signup
}