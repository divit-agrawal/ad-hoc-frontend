import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div style={{ backgroundColor: "#01282D", height: "100vh" }}>
      {/* Box with button */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80%",
        }}
      >
        <div
          style={{
            backgroundColor: "#F5F5F5",
            width: "400px",
            height: "400px",
            borderRadius: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h1
              style={{ color: "#01282D", fontSize: "32px", fontWeight: "bold" }}
            >
              Sign In
            </h1>
            <p
              style={{ color: "#01282D", fontSize: "16px", fontWeight: "bold" }}
            >
              Welcome back!
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginTop: "20px",
              }}
            >
              <input
                type="text"
                placeholder="Email"
                style={{
                  width: "300px",
                  height: "40px",
                  borderRadius: "8px",
                  border: "none",
                  paddingLeft: "10px",
                  fontSize: "16px",
                }}
                required
              />
              <input
                type="password"
                placeholder="Password"
                style={{
                  width: "300px",
                  height: "40px",
                  borderRadius: "8px",
                  border: "none",
                  paddingLeft: "10px",
                  fontSize: "16px",
                  marginTop: "10px",
                }}
                required
              />
              <button
                style={{
                  width: "300px",
                  height: "40px",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: "#01282D",
                  color: "#F5F5F5",
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                <a
                  href="dashboard"
                  style={{ textDecoration: "none", color: "#F5F5F5" }}
                >
                  Sign In
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-7.5%",
        }}
      >
        <p style={{ color: "#F5F5F5", fontSize: "16px", fontWeight: "bold" }}>
          Don't have an account?{" "}
          <Link to="/signup">
            <a href="/dashboard"
              style={{ textDecoration: "none", color: "#F5F5F5" }}
            >
              Sign Up
            </a>
          </Link>
        </p>
      </div>
      <section></section>
    </div>
  );
}
