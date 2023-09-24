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
        <div>
          {restaurants[0].menu.map((dish, index) => {
            return (
              <ul key={index}>
                <li>name: {dish.name}</li>
                <li>price: {dish.price}</li>
                <li>
                  ingredients:
                  {dish.ingredients.map((Ingredient, index) => {
                    return <ol key={index}>- {Ingredient}</ol>;
                  })}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
      <div>
        <h2>Reviews</h2>
        <div>
          {restaurants[0].reviews.map((review, index) => {
            return (
              <div key={index}>
                <p>{review.user}</p>
                <p>{review.text}</p>
                <p>{review.rating}</p>
                <br></br>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    <div>
      <div>
        <h1>{restaurants[1].name}</h1>
        <h2>Menu</h2>
        <div>
          {restaurants[1].menu.map((dish, index) => {
            return (
              <ul key={index}>
                <li>name: {dish.name}</li>
                <li>price: {dish.price}</li>
                <li>
                  ingredients:
                  {dish.ingredients.map((Ingredient, index) => {
                    return <ol key={index}>- {Ingredient}</ol>;
                  })}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
      <div>
        <h2>Reviews</h2>
        <div>
          {restaurants[1].reviews.map((review, index) => {
            return (
              <div key={index}>
                <p>{review.user}</p>
                <p>{review.text}</p>
                <p>{review.rating}</p>
                <br></br>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    <div>
      <div>
        <h1>{restaurants[2].name}</h1>
        <h2>Menu</h2>
        <div>
          {restaurants[2].menu.map((dish, index) => {
            return (
              <ul key={index}>
                <li>name: {dish.name}</li>
                <li>price: {dish.price}</li>
                <li>
                  ingredients:
                  {dish.ingredients.map((Ingredient, index) => {
                    return <ol key={index}>- {Ingredient}</ol>;
                  })}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
      <div>
        <h2>Reviews</h2>
        <div>
          {restaurants[2].reviews.map((review, index) => {
            return (
              <div key={index}>
                <p>{review.user}</p>
                <p>{review.text}</p>
                <p>{review.rating}</p>
                <br></br>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    <div>
      <div>
        <h1>{restaurants[3].name}</h1>
        <h2>Menu</h2>
        <div>
          {restaurants[3].menu.map((dish, index) => {
            return (
              <ul key={index}>
                <li>name: {dish.name}</li>
                <li>price: {dish.price}</li>
                <li>
                  ingredients:
                  {dish.ingredients.map((Ingredient, index) => {
                    return <ol key={index}>- {Ingredient}</ol>;
                  })}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
      <div>
        <h2>Reviews</h2>
        <div>
          {restaurants[3].reviews.map((review, index) => {
            return (
              <div key={index}>
                <p>{review.user}</p>
                <p>{review.text}</p>
                <p>{review.rating}</p>
                <br></br>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);
