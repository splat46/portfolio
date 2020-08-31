// src/pages/signupPage.js
import React, { useState } from "react";
import { signUp } from "../store/user/actions";
import { useDispatch } from "react-redux";

export default function SignupPage() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(signUp(email, password, firstname, lastname, phone));
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <h1>Signup Bitch</h1>

          <div className="box box__padding box--grey">
            <form onSubmit={handleSubmit}>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Firstname</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    name="firstname"
                    value={firstname}
                    onChange={(event) => {
                      setFirstname(event.target.value);
                    }}
                  ></input>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Lastname</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    name="lastname"
                    value={lastname}
                    onChange={(event) => {
                      setLastname(event.target.value);
                    }}
                  ></input>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Phone</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={(event) => {
                      setPhone(event.target.value);
                    }}
                  ></input>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Email</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    name="email"
                    placeholder="example@email.com"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  ></input>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Password</label>
                <div className="col-sm-8">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  ></input>
                </div>
              </div>
              <button type="submit" className="btn btn-primary mr-4">
                Signup
              </button>
              <a href="/#" alt="Already a account? Sign in">
                I already have a account
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
