import React from "react";
import ReactDOM from "react-dom/client";
import { restaurants } from "../materials/mock";

const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <div>
    <div>
      <div>
        <h1>{restaurants[0].name}</h1>
        <h2>Menu</h2>
        <ul>
          <li>Name: {restaurants[0].menu[0].name}</li>
          <li>Price: {restaurants[0].menu[0].price}</li>
          <li>
            Ingredients: {restaurants[0].menu[0].ingredients[0]},{" "}
            {restaurants[0].menu[0].ingredients[1]}
          </li>
        </ul>
        <ul>
          <li>Name: {restaurants[0].menu[1].name}</li>
          <li>Price: {restaurants[0].menu[1].price}</li>
          <li>Ingredients: {restaurants[0].menu[1].ingredients}</li>
        </ul>
        <ul>
          <li>Name: {restaurants[0].menu[2].name}</li>
          <li>Price: {restaurants[0].menu[2].price}</li>
          <li>
            Ingredients: {restaurants[0].menu[2].ingredients[0]},{" "}
            {restaurants[0].menu[2].ingredients[1]}
          </li>
        </ul>
      </div>
      <div>
        <h2>Reviews</h2>
        <div>
          <p>{restaurants[0].reviews[0].user}</p>
          <p>
            <em>{restaurants[0].reviews[0].text}</em>
          </p>
          <p>Rating: {restaurants[0].reviews[0].rating}</p>
        </div>
        <br></br>
        <div>
          <p>{restaurants[0].reviews[1].user}</p>
          <p>
            <em>{restaurants[0].reviews[1].text}</em>
          </p>
          <p>Rating: {restaurants[0].reviews[1].rating}</p>
        </div>
      </div>
    </div>
    <div>
      <div>
        <h1>{restaurants[1].name}</h1>
        <h2>Menu</h2>
        <ul>
          <li>Name: {restaurants[1].menu[0].name}</li>
          <li>Price: {restaurants[1].menu[0].price}</li>
          <li>
            Ingredients: {restaurants[1].menu[0].ingredients[0]},{" "}
            {restaurants[1].menu[0].ingredients[1]},{" "}
            {restaurants[1].menu[0].ingredients[2]}
          </li>
        </ul>
        <ul>
          <li>Name: {restaurants[1].menu[1].name}</li>
          <li>Price: {restaurants[1].menu[1].price}</li>
          <li>
            Ingredients: {restaurants[1].menu[1].ingredients[0]},{" "}
            {restaurants[1].menu[1].ingredients[1]},{" "}
            {restaurants[1].menu[1].ingredients[2]},{" "}
            {restaurants[1].menu[1].ingredients[3]}
          </li>
        </ul>
      </div>
      <div>
        <h2>Reviews</h2>
        <div>
          <p>{restaurants[1].reviews[0].user}</p>
          <p>
            <em>{restaurants[1].reviews[0].text}</em>
          </p>
          <p>Rating: {restaurants[1].reviews[0].rating}</p>
        </div>
        <br></br>
        <div>
          <p>{restaurants[1].reviews[1].user}</p>
          <p>
            <em>{restaurants[1].reviews[1].text}</em>
          </p>
          <p>Rating: {restaurants[1].reviews[1].rating}</p>
        </div>
        <br></br>
        <div>
          <p>{restaurants[1].reviews[2].user}</p>
          <p>
            <em>{restaurants[1].reviews[2].text}</em>
          </p>
          <p>Rating: {restaurants[1].reviews[2].rating}</p>
        </div>
      </div>
    </div>
    <div>
      <div>
        <h1>{restaurants[2].name}</h1>
        <h2>Menu</h2>
        <ul>
          <li>Name: {restaurants[2].menu[0].name}</li>
          <li>Price: {restaurants[2].menu[0].price}</li>
          <li>Ingredients: {restaurants[2].menu[0].ingredients[0]}</li>
        </ul>
        <ul>
          <li>Name: {restaurants[2].menu[1].name}</li>
          <li>Price: {restaurants[2].menu[1].price}</li>
          <li>
            Ingredients: {restaurants[2].menu[1].ingredients[0]},{" "}
            {restaurants[2].menu[1].ingredients[1]}
          </li>
        </ul>
        <ul>
          <li>Name: {restaurants[2].menu[2].name}</li>
          <li>Price: {restaurants[2].menu[2].price}</li>
          <li>Ingredients: {restaurants[2].menu[2].ingredients[0]}</li>
        </ul>
      </div>
      <div>
        <h2>Reviews</h2>
        <div>
          <p>{restaurants[2].reviews[0].user}</p>
          <p>
            <em>{restaurants[2].reviews[0].text}</em>
          </p>
          <p>Rating: {restaurants[2].reviews[0].rating}</p>
        </div>
      </div>
    </div>
    <div>
      <div>
        <h1>{restaurants[3].name}</h1>
        <h2>Menu</h2>
        <ul>
          <li>Name: {restaurants[3].menu[0].name}</li>
          <li>Price: {restaurants[3].menu[0].price}</li>
          <li>Ingredients: {restaurants[3].menu[0].ingredients[0]}</li>
        </ul>
        <ul>
          <li>Name: {restaurants[3].menu[1].name}</li>
          <li>Price: {restaurants[3].menu[1].price}</li>
          <li>
            Ingredients: {restaurants[3].menu[1].ingredients[0]},{" "}
            {restaurants[3].menu[1].ingredients[1]}
          </li>
        </ul>
      </div>
      <div>
        <h2>Reviews</h2>
        <div>
          <p>{restaurants[3].reviews[0].user}</p>
          <p>
            <em>{restaurants[3].reviews[0].text}</em>
          </p>
          <p>Rating: {restaurants[3].reviews[0].rating}</p>
        </div>
        <br></br>
        <div>
          <p>{restaurants[3].reviews[1].user}</p>
          <p>
            <em>{restaurants[3].reviews[1].text}</em>
          </p>
          <p>Rating: {restaurants[3].reviews[1].rating}</p>
        </div>
      </div>
    </div>
  </div>
);
