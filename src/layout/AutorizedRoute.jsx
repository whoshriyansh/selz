import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AuthorizedRoute = ({ children, allowedRoles }) => {
  const { auth } = useAuth();

  if (!auth.token || !allowedRoles.includes(auth.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default AuthorizedRoute;
