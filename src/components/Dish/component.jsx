import { useState } from "react";
import { Button } from "../Button/component";
import styles from "./styles.module.scss";

export const Dish = ({ dish }) => {
  const [amount, setAmount] = useState(0);
  return (
    <div className={styles.dish}>
      {dish.name}
      <Button
        disabled={amount === 0}
        onClick={() => setAmount(amount - 1)}
        title={"-"}
        style={"counter"}
      />
      {amount}
      <Button
        disabled={amount === 5}
        onClick={() => setAmount(amount + 1)}
        title={"+"}
        style={"counter"}
      />
    </div>
  );
};
