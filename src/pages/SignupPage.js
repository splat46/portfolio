// src/pages/signupPage.js
import React, { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log("email and password:", email, password);
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
                  <input type="text" name="firstname"></input>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Lastname</label>
                <div className="col-sm-8">
                  <input type="text" name="lastname"></input>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Phone</label>
                <div className="col-sm-8">
                  <input type="text" name="phone"></input>
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
