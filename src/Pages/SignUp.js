import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { babyshop } from "../context";
import { Button } from "react-bootstrap";

function SignUp() {
  const data = useContext(babyshop);
  const { email, setemail, setuserdata, userdata } = data;
  const navigate = useNavigate();
  const inputref = useRef(null);
  const submithandle = () => {
    const userFirstName = inputref.current.name.value;
    const userLastName = inputref.current.lastname.value;
    const userPassword = inputref.current.password.value;
    const userEmail = inputref.current.email.value;
    setemail([
      ...email,
      { userFirstName, userLastName, userEmail, userPassword },
    ]);
    navigate("/login");
    const item = {
      id: Math.floor(Math.random() * 10000),
      name: userFirstName,
      lastname: userLastName,
      email: userEmail,
    };
    setuserdata([...userdata, item]);
    console.log(userdata);
  };

  console.log(inputref);
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }

  return (
    <div className="form ">
      <h2 style={{ textAlign: 'center'}}>SignUp</h2>
      <form ref={inputref} onSubmit={handleSubmit}>
        <div className="form-body">
          <div className="username">
            <label className="form__label" for="firstName">
              {" "}
              First Name{" "}
            </label>
            <input
              className="form__input"
              type="text"
              id="firstName"
              placeholder="First Name"
              name="name"
            />
          </div>
          <div className="username">
            <label className="form__label" for="firstName">
              Last Name{" "}
            </label>
            <input
              className="form__input"
              type="text"
              id="lastName"
              placeholder="Last Name"
              name="lastname"
            />
          </div>

          <div className="email">
            <label className="form__label" for="email">
              Email{" "}
            </label>
            <input
              type="email"
              id="email"
              className="form__input"
              placeholder="Email"
              name="email"
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
              name="password"
            />
          </div>
        </div>
        <div class="footer">
          <Button type="submit" class="btn" onClick={submithandle}>
            Register
          </Button>
        </div>
        <label>Already have an account? </label>
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
}

export default SignUp;
