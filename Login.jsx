import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("praneetharaju2006@gmail.com");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any necessary authentication logic here
    console.log("Logged in user:", email);

    // Navigate to the homepage ("/")
    navigate("/");
  };

  return (
    <div className="login-container" style={{ textAlign: "center", paddingTop: "4rem", color: "#fff" }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: "300px", margin: "2rem auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid #444", background: "#fff", color: "#000" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid #444", background: "#fff", color: "#000" }}
        />

        <button
          type="submit"
          style={{
            padding: "0.75rem",
            borderRadius: "6px",
            border: "none",
            background: "#007bff",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Sign In
        </button>
      </form>

      <button
        type="button"
        onClick={() => navigate("/")}
        style={{ background: "transparent", border: "none", color: "#aaa", cursor: "pointer" }}
      >
        ← Back to Home
      </button>
    </div>
  );
}