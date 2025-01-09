import { useParams } from "react-router-dom";
export default function PizzaPage() {
  const { id } = useParams();
  return (
    <section className="container">
      <h1>Sono la pizza con id {id}</h1>
    </section>
  );
}
