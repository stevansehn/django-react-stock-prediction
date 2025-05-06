import type { ReactElement } from "react";

interface ButtonProps {
  text: string;
  class: string;
}

const Button = (props: ButtonProps): ReactElement => {
  return (
    <>
      <a className={`btn ${props.class}`} href="">
        {props.text}
      </a>
    </>
  );
};

export default Button;
