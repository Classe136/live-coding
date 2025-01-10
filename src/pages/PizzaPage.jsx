import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";
import Card from "../components/Card.jsx";

const apiUrl = import.meta.env.VITE_API_URL;
export default function PizzaPage() {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(getData, [id]);

  function getData() {
    axios
      .get(apiUrl + "/pizzas/" + id)
      .then((res) => {
        //console.log(res);
        setPizza(res.data.item);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("finally");
      });
  }

  return (
    <section className="container">
      <h1>Sono la pizza con id {id}</h1>
      {pizza && (
        <Card
          //item={pizza}
          image={pizza.image}
          title={pizza.name}
          description={pizza.ingredients.join(", ")}
          badge={pizza.price + " €"}
          id={pizza.id}
        />
      )}
    </section>
  );
}
