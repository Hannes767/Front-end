// src/ProtectedRoute.jsx
import React from "react";
import { useAuth } from "./AuthContext";
import { Navigate, useLocation } from "react-router-dom";

/**
 * Komponent, mis lubab ligipääsu ainult sisselogitud kasutajatele.
 * Kui kasutaja pole sisselogitud, suunab login lehele.
 */
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth(); // ← lisa loading
  const location = useLocation();

  // Kui autentimise olek veel laeb, näita laadimisolekut
  if (loading) {
    return <div>Laadimine...</div>;
  }

  // Kui kasutaja puudub (ja nüüd on kindel), suuna login-le
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Kui kasutaja olemas, näita lehte
  return children;
}

export default ProtectedRoute;
