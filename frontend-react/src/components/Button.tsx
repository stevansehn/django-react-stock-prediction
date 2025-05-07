import type { ReactElement } from "react";

import { Link } from "react-router-dom";

interface ButtonProps {
  text: string;
  class: string;
  endpoint: string;
}

const Button = (props: ButtonProps): ReactElement => {
  return (
    <>
      <Link className={`btn ${props.class}`} to={props.endpoint}>
        {props.text}
      </Link>
    </>
  );
};

export default Button;
