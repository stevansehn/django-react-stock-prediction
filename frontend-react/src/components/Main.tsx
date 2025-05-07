import type { ReactElement } from "react";

import Button from "./Button";

const Main = (): ReactElement => {
  return (
    <>
      <div className="container">
        <div className="p-5 text-center bg-light-dark rounded">
          <h1 className="text-light">Stock Prediction Portal</h1>
          <p className="text-light lead">
            This stock prediction application utilizes machine learning to
            forecast future stock prices.
          </p>
          <Button text="Login" class="btn-outline-warning" endpoint="/login" />
        </div>
      </div>
    </>
  );
};

export default Main;
