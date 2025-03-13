import React from "react";
import { NavLink, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1 style={{ color: "red", fontSize: "24px" }}>
        Oops! Something went wrong
      </h1>
      <p style={{ fontSize: "18px" }}>
        {err.status}: {err.statusText}
      </p>
      <NavLink style={{fontSize: "18px", textDecoration: "underline"}} to={"/"}>Go to Dashboard</NavLink>
    </div>
  );
};

export default Error;
