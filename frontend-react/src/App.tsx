import { ReactElement } from "react";
import "./assets/css/style.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";

function App(): ReactElement {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
