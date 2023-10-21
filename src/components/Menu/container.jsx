import { useDispatch, useSelector } from "react-redux";
import { selectDishLoadingStatus } from "../../redux/entities/dish/selectors";
import { useEffect } from "react";
import { getDishes } from "../../redux/entities/dish/thunks/get-dishes";
import { REQUEST_STATUS } from "../../constants/statuses";
import { Menu } from "./component";

export const MenuContainer = (props) => {
  const loadingStatus = useSelector(selectDishLoadingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishes());
  }, []);

  return (
    <div>
      {loadingStatus === REQUEST_STATUS.pending ? (
        <div>Loading...</div>
      ) : (
        <Menu {...props} />
      )}
    </div>
  );
};
