import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "../../components/Layout/component";
import { RestaurantContainer } from "../../components/Restaurant/container";
import { RestaurantTabsContainer } from "../../components/RestaurantTabs/container";
import {
  selectRestaurantIds,
  selectRestaurantLoadingStatus,
} from "../../redux/entities/restaurant/selectors";
import { getRestaurants } from "../../redux/entities/restaurant/thunks/get-restaurants";
import { REQUEST_STATUS } from "../../constants/statuses";

export const MainPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantIds[0]
  );
  const loadingStatus = useSelector(selectRestaurantLoadingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  return (
    <Layout>
      {loadingStatus === REQUEST_STATUS.pending ? (
        <div>Loading...</div>
      ) : (
        <RestaurantTabsContainer
          activeRestaurantId={activeRestaurantId}
          onTabSelect={setActiveRestaurantId}
        />
      )}
      {activeRestaurantId && (
        <RestaurantContainer restaurantId={activeRestaurantId} />
      )}
    </Layout>
  );
};
