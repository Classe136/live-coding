import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//import image from "./assets/react.svg";
import DefaultLayout from "./pages/DefaultLayout";
import HomePage from "./pages/HomePage";
import PizzasPage from "./pages/PizzasPage";
import AddPizzaPage from "./pages/AddPizzaPage";

import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import PizzaPage from "./pages/PizzaPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/contact" Component={ContactPage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/pizzas">
            <Route index Component={PizzasPage}></Route>
            <Route path=":id" Component={PizzaPage}></Route>
            <Route path="create" Component={AddPizzaPage}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
