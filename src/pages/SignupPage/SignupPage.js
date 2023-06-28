import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import InputField from "../../components/InputField/InputField";
import "./SignupPage.scss";

const SignupPage = () => {
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const api_url = "http://localhost:8080";

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${api_url}/users/register`, {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        phone: e.target.phone.value,
        address: e.target.address.value,
        email: e.target.email.value,
        password: e.target.password.value,
      })
      .then(() => {
        setSuccess(true);
        setErr("");
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        setSuccess(false);
        setErr(error.response.data);
        e.target.reset();
      });
  };

  return (
    <div className="register">
      <form className="register__form" onSubmit={handleSubmit}>
        <h2 className="register__title">Sign Up</h2>
        <InputField
          type="text"
          name="firstName"
          label="First name"
          placeholder="First Name"
        />
        <InputField
          type="text"
          name="lastName"
          label="Last name"
          placeholder="Last Name"
        />
        <InputField
          type="text"
          name="phone"
          label="Phone"
          placeholder="Phone Number"
        />
        <InputField
          type="text"
          name="address"
          label="Address"
          placeholder="Address"
        />
        <InputField
          type="text"
          name="email"
          label="Email"
          placeholder="Email"
        />
        <InputField
          type="password"
          name="password"
          label="Password"
          placeholder="Password"
        />

        <button className="register__button">Sign up</button>

        {success && (
          <div className="register__alert">Registration Successful!</div>
        )}
        {err && (
          <div className="register__alert">
            Regitration Failed! Please Try Again!
          </div>
        )}
      </form>
      <p className="register__text">
        Have an account?{" "}
        <Link className="register__link" to="/">
          Log In →
        </Link>
      </p>
    </div>
  );
};

export default SignupPage;
