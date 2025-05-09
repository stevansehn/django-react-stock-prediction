import type { ReactElement } from "react";
import { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";

import Button from "./Button";
import { AuthContext } from "../AuthProvider";

const Header = (): ReactElement => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error(
      "AuthContext is null. Make sure you're inside <AuthProvider>."
    );
  }
  const { isLoggedIn, setIsLoggedIn } = authContext;
  const navigate = useNavigate();

  async function handleLogout(): Promise<void> {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
    navigate("/login");
  }

  return (
    <>
      <nav className="navbar container pt-3 pb-3 align-items-start">
        <Link className="navbar-brand text-light" to="/">
          Stock Prediction Portal
        </Link>
        <div>
          {isLoggedIn ? (
            <>
              <Button
                text="Dashboard"
                class="btn-outline-warning"
                endpoint="/dashboard"
              />
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Button
                text={"Login"}
                class={"btn-outline-info"}
                endpoint="/login"
              />
              &nbsp;
              <Button
                text={"Register"}
                class={"btn-info"}
                endpoint="/register"
              />
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
