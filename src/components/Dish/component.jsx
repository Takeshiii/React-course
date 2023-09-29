import { useState } from "react";
import { Button } from "../Button/component";

export const Dish = ({ dish }) => {
  const [amount, setAmount] = useState(0);
  return (
    <div>
      {dish.name}-
      <Button
        disabled={amount === 0}
        onClick={() => setAmount(amount - 1)}
        title={"-"}
      />
      {amount}
      <Button
        disabled={amount === 5}
        onClick={() => setAmount(amount + 1)}
        title={"+"}
      />
    </div>
  );
};