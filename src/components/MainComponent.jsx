import Card from "./Card.jsx";
import pizzas from "../data/pizzas.js";
function MainComponent() {
  const menu = [...pizzas];

  return (
    <main className="container">
      <div className="row gy-4">
        {menu.length > 0
          ? menu.map((pizza) => (
              <div className="col-12 col-md-6 col-lg-4" key={pizza.id}>
                <Card
                  item={pizza}
                  image={pizza.image}
                  title={pizza.name}
                  description={pizza.ingredients.join(", ")}
                  badge={pizza.price + " €"}
                />
              </div>
            ))
          : "Non ci sono pizze"}
      </div>
    </main>
  );
}
export default MainComponent;
