import { useState, useEffect } from "react";

import axios from "axios";

import Card from "./Card.jsx";
import AddPizza from "./AddPizza.jsx";

const apiUrl = import.meta.env.VITE_API_URL;

function MainComponent() {
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    //console.log("E' stato eseguito use effect");
    getData(search);

    //return () => console.log("cleanup");
  }, [search]);

  // PER IL FILTRO NON è NECESSARIO useEffect perchè quando il componente viene
  // rieseguito all'aggiornamento della variabile search viene ricreata anche la const filteredMenu
  // sulla quale cicleremo nell'array infatti filteredMenu è una variabile che si basa su due altre
  // variabili di stato -- menu e search -- quindi non va impostata come variabile di stato
  // e non è necessario useEffect per calcolarla
  //const filteredMenu = filterItems(menu, search);

  //chiamata axios
  function getData(search) {
    let options = null;
    if (search) {
      options = {
        params: { search },
      };
    }
    axios
      .get(apiUrl + "/examples", options)
      .then((res) => {
        console.log(res.data);
        setMenu(res.data.data);
        //setCharacters(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        // always executed
      });
  }
  function deleteItem(id) {
    axios
      .delete(apiUrl + "/examples/" + id)
      .then((res) => {
        console.log(res.data);
        setMenu(menu.filter((el) => el.id !== id));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        // always executed
      });
  }

  function handleSubmit(formData) {
    axios.post(apiUrl + "/examples", formData).then((res) => {
      console.log(res.data);
      setMenu([...menu, res.data]);
    });
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
      <ul>
        {/* {characters.map((char) => (
          <li key={char.id}>{char.name}</li>
        ))} */}
      </ul>
      <AddPizza handleSubmit={handleSubmit} />
    </main>
  );
}
export default MainComponent;
