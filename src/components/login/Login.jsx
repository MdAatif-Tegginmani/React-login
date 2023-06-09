import React from "react";
import './Login.css'
import axios from "axios"
import { useHistory } from "react-router-dom"

export default function Login({ setLoginUser}) {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
        })
    }
    return (
        <div className="main-page">
            <div className="login">
                <h1>Login</h1>
                <input type="text" name="email" value={user.email} onChange={handleChange}  placeholder="Enter your Email" />
                <input type="password" value={user.password} onChange={handleChange}  placeholder="Enter Password" />
                <div className="button" onClick={login} >
                    Login
                </div>
                <div>or</div>
                <div className="button" onClick={() => history.push("/register")}>
                   Regiter
                </div>
            </div>
        </div>
    );
}
