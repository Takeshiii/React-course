import { useState } from "react";
import { Button } from "../Button/component";

import styles from "./styles.module.scss";

export const Dish = ({ dish }) => {
  const [amount, setAmount] = useState(0);

  return (
    <div className={styles.dish}>
      {dish.name}
      <Button
        size="small"
        disabled={amount === 0}
        onClick={() => setAmount(amount - 1)}
        title="-"
      />
      {amount}
      <Button
        size="small"
        disabled={amount === 5}
        onClick={() => setAmount(amount + 1)}
        title="+"
      />
    </div>
  );
};
