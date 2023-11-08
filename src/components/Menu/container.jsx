import { Menu } from "./component";
import { useGetDishesQuery } from "../../redux/services/dishes";

export const MenuContainer = ({ restaurantId }) => {
  const { data: menu, isFetching } = useGetDishesQuery(restaurantId);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return <Menu menu={menu} />;
};
