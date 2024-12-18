import { ingredients } from "../data/pizzas";
function AddPizza({ handleSubmit, handleInput, handleIngredients, formData }) {
  const ingredientList = ingredients();

  return (
    <section className="my-4">
      <h2>Aggiungi nuova pizza</h2>
      <form onSubmit={handleSubmit}>
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
            <div className="mb-3 form-check" key={ingredient}>
              <input
                type="checkbox"
                className="form-check-input"
                id="ingredients"
                name="ingredients"
                onChange={handleIngredients}
                value={ingredient}
              />
              <label className="form-check-label" htmlFor="avaiable">
                {ingredient}
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
