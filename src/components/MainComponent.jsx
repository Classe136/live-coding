import { useState, useEffect } from "react";
import { pizzas, filterItems } from "../data/pizzas.js";
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
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState(pizzas);
  const [formData, setFormData] = useState(newPizza);

  //PER IL FILTRO NON è NECESSARIO useEffect perchè quando il componente viene rieseguito all'aggiornamento della variabile search viene ricreata anche la const filteredMenu sulla quale cicleremo nell'array infatti filterdMenu è una variabile che si basa su due altre variabili di stato -- menu e search -- quindi non va impostata come variabile di stato e non è necessario useEffect per calcolarla
  const filteredMenu = filterItems(menu, search);

  useEffect(() => {
    console.log("La variabile è cambiata");

    //cleanup
    return () => console.log("cleanup");
  }, [formData.avaiable]);
  function deleteItem(id) {
    setMenu(menu.filter((el) => el.id !== id));
  }
  function handleInput(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  }
  function handleIngredients(e) {
    setFormData((formData) => {
      let { ingredients, ...others } = formData;
      if (ingredients.includes(e.target.value)) {
        ingredients = ingredients.filter((val) => val !== e.target.value);
      } else {
        ingredients = [...ingredients, e.target.value];
      }
      return {
        ingredients,
        ...others,
      };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setMenu([...menu, { id: self.crypto.randomUUID(), ...formData }]);
    setFormData(newPizza);
  }
  function handleSearch(e) {
    setSearch(e.target.value);
  }
  return (
    <main className="container">
      <div className="row gy-4">
        <div className="col-12 py-4">
          <label htmlFor="search" className="form-label">
            Cerca
          </label>
          <input
            type="search"
            name="search"
            id="search"
            value={search}
            className="form-control"
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="row gy-4">
        {filteredMenu.length > 0
          ? filteredMenu.map(
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
        handleIngredients={handleIngredients}
        formData={formData}
      />
    </main>
  );
}
export default MainComponent;
