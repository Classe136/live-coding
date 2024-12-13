import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//import image from "./assets/react.svg";
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </>
  );
}

export default App;
