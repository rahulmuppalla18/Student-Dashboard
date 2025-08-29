import React from "react";
import logo from "./assets/logo.jpg"; // Import the logo

export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen" style={{ background: "#e0f7fa" }}>
      <form className="login-box">
        <img
          src={logo}
          alt="Logo"
          className="mb-6"
          style={{ width: 72, height: 72 }}
        />
        <h2 className="mb-8">Create Account</h2>
        <div className="input-group">
          <label className="input-label" htmlFor="fullname">Full Name</label>
          <input
            id="fullname"
            type="text"
            placeholder="Full Name"
            required
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="Email Address"
            required
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            placeholder="Confirm Password"
            required
          />
        </div>
        <button type="submit">Sign Up</button>
        <p>
          Already have an account?{" "}
          <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}