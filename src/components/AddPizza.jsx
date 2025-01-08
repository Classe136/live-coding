import { useState, useEffect } from "react";
import axios from "axios";
//import { ingredients } from "../data/pizzas";
const newPizza = {
  name: "",
  image: "",
  price: "",
  avaiable: false,
  ingredients: [],
};
const apiUrl = "http://localhost:3000";
function AddPizza({ handleSubmit }) {
  const [formData, setFormData] = useState(newPizza);
  const [ingredientList, setIngredientList] = useState([]);

  useEffect(() => {
    //console.log("E' stato eseguito use effect");
    getIngredients();

    //return () => console.log("cleanup");
  }, []);

  function getIngredients() {
    axios
      .get(apiUrl + "/ingredients")
      .then((res) => {
        console.log(res.data);
        setIngredientList(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        // always executed
      });
  }
  //mostrare funzione per ripassare oggetto verso il padre e tenere nel parent
  // solo l'array e la funzione submit
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
  function addPizza(e) {
    e.preventDefault();
    //no id ce lo rstituisce il backend
    //handleSubmit({ ...formData, id: self.crypto.randomUUID() });
    handleSubmit({ ...formData });
    setFormData(newPizza);
  }
  //
  return (
    <section className="my-4">
      <h2>Aggiungi nuova pizza</h2>
      <form onSubmit={addPizza}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Your name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="namelHelp"
            value={formData.name}
            onChange={handleInput}
            name="name"
          />
          <div id="namelHelp" className="form-text">
            Scrivi il nome della pizza
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Immagine della pizza
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            value={formData.image}
            onChange={handleInput}
            name="image"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Prezzo della pizza
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            value={formData.price}
            onChange={handleInput}
            name="price"
          />
        </div>
        <div className="card p-4">
          {ingredientList.map((ingredient) => (
            <div className="mb-3 form-check" key={ingredient.id}>
              <input
                type="checkbox"
                className="form-check-input"
                id="ingredients"
                name="ingredients"
                onChange={handleIngredients}
                value={ingredient.title}
                checked={formData.ingredients.includes(ingredient.title)}
              />
              <label className="form-check-label" htmlFor="avaiable">
                {ingredient.title}
              </label>
            </div>
          ))}
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="avaiable"
            name="avaiable"
            onChange={handleInput}
            value={formData.avaiable}
            checked={formData.avaiable}
          />
          <label className="form-check-label" htmlFor="avaiable">
            Disponibile
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
}

export default AddPizza;
