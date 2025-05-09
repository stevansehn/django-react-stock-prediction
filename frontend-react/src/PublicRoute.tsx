import { useContext } from "react";
import type { ReactNode } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
  children: ReactNode;
}

function PublicRoute({ children }: PublicRouteProps): ReactNode {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error(
      "AuthContext is null. Make sure you're inside <AuthProvider>."
    );
  }
  const { isLoggedIn } = authContext;

  return !isLoggedIn ? children : <Navigate to="/bashboard" />;
}

export default PublicRoute;
