import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import InputField from '../../components/InputField/InputField';
import "./LoginPage.scss";

const LoginPage = () => {
    const [err, setErr] = useState("");
    const navigate = useNavigate();
    const api_url = "http://localhost:8080";

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${api_url}/users/login`, {
            email: e.target.email.value,
            password: e.target.password.value
        })
        .then ((response) => {
            sessionStorage.setItem("token", response.data.token);
            console.log(response.data.token);
            navigate("/assets");
        })
        .catch ((error) => {
            setErr(error.response.data);
            
        })
    }

    console.log(err);

    return (
        <div className="login">
            <form className="login__form" onSubmit={handleSubmit}>
                <h2 className="login__title">Log In</h2>

                <InputField type="text" name="email" label="Email" placeholder="Email " />
                <InputField type="password" name="password" label="Password" placeholder="Password"/>

                <button className="login__button">
                    Log In
                </button>

                {err && <div className="login__alert">{`Invalid Email or Password! Please try again!`}</div>}
            </form>
            <p className="login__text">
                Don't have an account? <Link to="/signup" className="login__link">Sign up now →</Link>
            </p>
        </div>
    );
};

export default LoginPage;