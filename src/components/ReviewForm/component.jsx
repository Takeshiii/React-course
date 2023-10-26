import { useReducer } from "react";
import { Button } from "../Button/component";

import styles from "./styles.module.scss";

const DEFAULT_VALUE = {
  name: "",
  text: "",
  rating: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload };
    case "setReview":
      return { ...state, text: action.payload };
    case "setRating":
      return { ...state, rating: action.payload };
    case "reset":
      return { ...DEFAULT_VALUE };
    default:
      return state;
  }
};

export const ReviewForm = ({ onSubmit }) => {
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_VALUE);

  return (
    <div className={styles.form}>
      <h1 className={styles.title}>Tell us how you like the restaurant:</h1>
      <div className={styles.inputs}>
        <input
          className={styles.input}
          type="text"
          placeholder="Name"
          value={formValue.name}
          onChange={(event) =>
            dispatch({ type: "setName", payload: event.target.value })
          }
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Your review here..."
          value={formValue.text}
          onChange={(event) =>
            dispatch({ type: "setReview", payload: event.target.value })
          }
        />
        <input
          className={styles.input}
          type="number"
          min="1"
          max="5"
          value={formValue.rating}
          onChange={(event) =>
            dispatch({ type: "setRating", payload: event.target.value })
          }
        />
      </div>
      <div className={styles.buttons}>
        <Button title={"Save"} onClick={() => onSubmit(formValue)} />
        <Button title={"Close"} onClick={onSubmit} />
      </div>
    </div>
  );
};
