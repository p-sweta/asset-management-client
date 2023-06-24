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
        <div className='login'>
            <form className="login__form" onSubmit={handleSubmit}>
                <h2 className="login__title">Log in</h2>

                <InputField type="text" name="email" label="Email" />
                <InputField type="password" name="password" label="Password" />

                <button className="login__button">
                    Log in
                </button>

                {err && <div className="login__alert">{`Invalid Email or Password! ${err}`}</div>}
            </form>
            <p>
                Need an account? <Link to="/signup">Sign up</Link>
            </p>
        </div>
    );
};

export default LoginPage;