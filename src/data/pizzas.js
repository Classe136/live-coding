const pizzas = [
  {
    id: 1,
    name: "Margherita",
    image: "/img/pizze/margherita.webp",
    price: "€ 8.00",
    avaiable: true,
    ingredients: ["pomodoro", "mozzarella"],
  },
  {
    id: 2,
    name: "Marinara",
    image: "/img/pizze/marinara.jpeg",
    price: "€ 6.00",
    avaiable: true,
    ingredients: ["pomodoro", "aglio", "origano"],
  },
  {
    id: 3,
    name: "Diavola",
    image: "/img/pizze/diavola.jpeg",
    price: "€ 7.00",
    avaiable: true,
    ingredients: ["pomodoro", "mozzarella", "salame piccante"],
  },
  {
    id: 4,
    name: "Bufalina",
    image: "/img/pizze/bufalina.jpeg",
    price: "€ 10.00",
    avaiable: true,
    ingredients: ["pomodoro", "mozzarella di bufala"],
  },
  {
    id: 5,
    name: "4 formaggi",
    image: "/img/pizze/4_formaggi.jpeg",
    price: "€ 10.00",
    avaiable: false,
    ingredients: [
      "pomodoro",
      "mozzarella",
      "gorgonzola",
      "parmigiano",
      "ricotta",
    ],
  },
];

function ingredients() {
  let ingredientsList = [];
  pizzas.forEach((el) => {
    el.ingredients.forEach((ingredient) => {
      if (!ingredientsList.includes(ingredient)) {
        ingredientsList.push(ingredient);
      }
    });
  });
  return ingredientsList;
}
function filterItems(items, query) {
  query = query.toLowerCase();
  return items.filter((item) => item.name.toLowerCase().includes(query));
}
export { pizzas, ingredients, filterItems };

// const baseUrl = "https://jsonplaceholder.typicode.com/";
// const resource = "photos";//
// const num = 6;
// const params = { "_limit": num };
