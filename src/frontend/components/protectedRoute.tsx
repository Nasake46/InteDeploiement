import { Navigate } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const user = useUser();

  // État de chargement : on retourne un petit message ou spinner
  if (user === undefined) {
    return <div className="loader">Chargement...</div>;
  }

  // Si non connecté → redirection
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
