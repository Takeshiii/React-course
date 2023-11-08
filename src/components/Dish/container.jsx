import { useDispatch, useSelector } from "react-redux";
import { Dish } from "./component";
import { selectDishAmountById } from "../../redux/ui/cart/selectors";
import { cartActions } from "../../redux/ui/cart";

export const DishContainer = ({ dish }) => {
  const amount = useSelector((state) => selectDishAmountById(state, dish.id));
  const dispatch = useDispatch();

  if (!dish) {
    return null;
  }

  return (
    <Dish
      dish={dish}
      amount={amount}
      increment={() => {
        dispatch(cartActions.increment(dish.id));
      }}
      decrement={() => {
        dispatch(cartActions.decrement(dish.id));
      }}
    />
  );
};
