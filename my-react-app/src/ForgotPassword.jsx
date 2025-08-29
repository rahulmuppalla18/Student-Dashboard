import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.jpg";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email");
      return;
    }
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ background: "#e0f7fa" }}>
      <form className="login-box" onSubmit={handleSubmit}>
        <img
          src={logo}
          alt="Logo"
          className="mb-6"
          style={{ width: 72, height: 72 }}
        />
        <h2 className="mb-8">Forgot Password</h2>
        <div className="input-group">
          <label className="input-label" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Reset Link</button>
            <div className="mt-4 text-center">
              <Link to="/login" className="text-blue-600 hover:underline font-bold">
                🔙 Back to Login
              </Link>
            </div>
          </form>
        </div>
    );
}
