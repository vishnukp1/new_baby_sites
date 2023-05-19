import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { babyshop } from "../context";
import { Button } from "react-bootstrap";

function LogIn() {
  const data = useContext(babyshop);
  const { email, setauth } = data;
  const nevigate = useNavigate();

  const inputref = useRef();
  const loginPass = () => {
    const setPassword = inputref.current.upassword.value;
    const setEmail = inputref.current.uemail.value;

    const useremail = email.filter(
      (item) => item.userEmail === setEmail && item.userPassword === setPassword
    );
    if (useremail.length > 0) {
      setauth(true);
      alert("You have successfully logged");
      nevigate("/");
    } else {
      alert("Email and Password did not match");
    }
  };
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }

  return (
    <div className="form">
      <h2 style={{ textAlign: 'center'}}>LogIn</h2>
      <form ref={inputref} onSubmit={handleSubmit}>
        <div className="form-body">
          <div className="email">
            <label className="form__label" for="email">
              Email{" "}
            </label>
            <input
              type="email"
              id="email"
              className="form__input"
              placeholder="Email"
              name="uemail"
            />
          </div>
          <div className="password">
            <label className="form__label" for="password">
              Password{" "}
            </label>
            <input
              className="form__input"
              type="password"
              id="password"
              placeholder="Password"
              name="upassword"
            />
          </div>
        </div>
        <div class="footer">
          <Button type="submit" class="btn" onClick={loginPass}>
            Register
          </Button>
        </div>
        <label>Already have an account? </label>
        <Link to="/signup">Signup</Link>
      </form>
    </div>
  );
}

export default LogIn;
