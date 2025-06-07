// src/ProtectedRoute.jsx
import React from "react";
import { useAuth } from "./AuthContext";
import { Navigate, useLocation } from "react-router-dom";

/**
 * Komponent, mis lubab ligipääsu ainult sisselogitud kasutajatele.
 * Kui kasutaja pole sisselogitud, suunab login lehele.
 */
function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation(); // <- saad teada, kust üritati tulla


  if (!user) {
    // Pole sisselogitud → suuna login lehele
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Sisselogitud → näita lubatud sisu
  return children;
}

export default ProtectedRoute;
