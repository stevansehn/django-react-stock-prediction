import type { ReactElement } from "react";

import { Link } from "react-router-dom";

import Button from "./Button";

const Header = (): ReactElement => {
  return (
    <>
      <nav className="navbar container pt-3 pb-3 align-items-start">
        <Link className="navbar-brand text-light" to="/">
          Stock Prediction Portal
        </Link>

        <div>
          <Button text={"Login"} class={"btn-outline-info"} endpoint="/login" />
          &nbsp;
          <Button text={"Register"} class={"btn-info"} endpoint="/register" />
        </div>
      </nav>
    </>
  );
};

export default Header;
