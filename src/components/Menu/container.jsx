import { useSelector } from "react-redux";
import { getDishes } from "../../redux/entities/dish/thunks/get-dishes";
import { REQUEST_STATUS } from "../../constants/statuses";
import { Menu } from "./component";
import { selectRestaurantMenuById } from "../../redux/entities/restaurant/selectors";
import { useRequest } from "../../hooks/use-request";

export const MenuContainer = ({ restaurantId }) => {
  const restaurantMenu = useSelector((state) =>
    selectRestaurantMenuById(state, restaurantId)
  );

  const menuLoadingStatus = useRequest(getDishes, restaurantId);

  if (menuLoadingStatus === REQUEST_STATUS.pending) {
    return <div>Loading...</div>;
  }

  return <Menu menu={restaurantMenu} />;
};
