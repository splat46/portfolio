// src/pages/signupPage.js
import React, { useState } from "react";

export default function SignupPage() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <h1>Signup Bitch</h1>

          <div className="box box__padding box--grey">
            <form>
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
                  ></input>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Password</label>
                <div className="col-sm-8">
                  <input type="password" name="password"></input>
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
