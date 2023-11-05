import { Button } from "../Button/component";

import styles from "./styles.module.scss";

export const Dish = ({ dish, amount, increment, decrement }) => {
  return (
    <div className={styles.dish}>
      {dish.name}
      <Button
        size="small"
        disabled={amount === 0}
        onClick={decrement}
        title="-"
      />
      {amount}
      <Button
        size="small"
        disabled={amount === 5}
        onClick={increment}
        title="+"
      />
    </div>
  );
};
