import { useState } from "react";
import Button from "./Button.jsx";
import style from "./Card.module.css";
/**
 * Renders a card component with an image, title, badge, and description.
 *
 * @param {string} image - The URL of the image to display at the top of the card. Defaults to a placeholder image.
 * @param {string} title - The title of the card.
 * @param {ReactNode} badge - A badge element to display within the card.
 * @param {string} description - The description text of the card. Defaults to "Descrizione non presente".
 *
 * @returns {JSX.Element} A JSX element representing the card.
 */
function Card({
  image = "https://picsum.photos/600/400",
  title,
  badge,
  description = "Descrizione non presente",
}) {
  const [pippo, setPippo] = useState(false);

  const [numero, setNumero] = useState(10);
  function toggleActive() {
    setPippo(!pippo);
  }
  function incr(e) {
    e.stopPropagation();
    setNumero(numero + 100);
  }
  return (
    <div
      className={`card ${style.cardEffec} ${pippo ? style.isActive : ""}`}
      onClick={toggleActive}
    >
      <img
        src={image}
        className={`card-img-top ${style.cardImg}`}
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div>{badge}</div>
        <div>{numero}</div>
        <Button />
        <button onClick={incr}>Incrementa</button>
      </div>
    </div>
  );
}

export default Card;
