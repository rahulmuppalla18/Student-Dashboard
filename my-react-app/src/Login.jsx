import React from "react";
import logo from "./assets/logo.jpg"; // Import the logo

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen" style={{ background: "#e0f7fa" }}>
      <form className="login-box">
        <img
          src={logo} // Use the imported logo
          alt="Logo"
          className="mb-6"
          style={{ width: 72, height: 72 }}
        />
        <h2 className="mb-8">Login</h2>
        <div className="input-group">
          <label className="input-label" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            required
          />
        </div>
        <a className="forgot-password" href="/forgot-password">
          Forgot password?
        </a>
        <button type="submit">Login</button>
        <p>
          Don't have an account?{" "}
          <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
}