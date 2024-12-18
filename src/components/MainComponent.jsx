import { useState } from "react";
import pizzas from "../data/pizzas.js";
const newPizza = {
  name: "",
  image: "",
  price: "",
  avaiable: false,
  ingredients: [],
};
import Card from "./Card.jsx";
import AddPizza from "./AddPizza.jsx";

function MainComponent() {
  const [menu, setMenu] = useState(pizzas);
  const [formData, setFormData] = useState(newPizza);
  function deleteItem(id) {
    setMenu(menu.filter((el) => el.id !== id));
  }
  function handleInput(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setMenu([...menu, { id: self.crypto.randomUUID(), ...formData }]);
    setFormData(newPizza);
  }
  return (
    <main className="container">
      <div className="row gy-4">
        {menu.length > 0
          ? menu.map(
              (pizza) =>
                pizza.avaiable && (
                  <div className="col-12 col-md-6 col-lg-4" key={pizza.id}>
                    <Card
                      //item={pizza}
                      image={pizza.image}
                      title={pizza.name}
                      description={pizza.ingredients.join(", ")}
                      badge={pizza.price + " €"}
                      onDelete={() => deleteItem(pizza.id)}
                    />
                  </div>
                )
            )
          : "Non ci sono pizze"}
      </div>
      <AddPizza
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        formData={formData}
      />
    </main>
  );
}
export default MainComponent;
