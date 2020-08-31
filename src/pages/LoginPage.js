// src/pages/LoginPage.js
import React, { useState } from "react";
import { signIn } from "../store/user/actions";
import { useDispatch } from "react-redux";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(signIn(email, password));
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <h1>Login Bitch</h1>
          <form className="box box__padding box--grey" onSubmit={handleSubmit}>
            <p>
              <label>Email: </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </p>
            <p>
              <label>Password: </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </p>
            <p>
              <button type="submit">Login</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
