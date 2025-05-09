import { useContext } from "react";
import type { ReactNode } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps): ReactNode {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error(
      "AuthContext is null. Make sure you're inside <AuthProvider>."
    );
  }
  const { isLoggedIn } = authContext;

  return isLoggedIn ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
