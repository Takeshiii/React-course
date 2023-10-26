import { useSelector } from "react-redux";
import { getReviews } from "../../redux/entities/review/thunks/get-reviews";
import { getUsers } from "../../redux/entities/user/thunks/get-users";
import { Reviews } from "./component";
import { REQUEST_STATUS } from "../../constants/statuses";
import { selectRestaurantReviewsById } from "../../redux/entities/restaurant/selectors";
import { useRequest } from "../../hooks/use-request";

export const ReviewsContainer = ({ restaurantId }) => {
  const restaurantReviews = useSelector((state) =>
    selectRestaurantReviewsById(state, restaurantId)
  );
  const reviewsLoadingStatus = useRequest(getReviews, restaurantId);
  const userLoadingStatus = useRequest(getUsers, restaurantId);

  if (
    reviewsLoadingStatus === REQUEST_STATUS.pending ||
    userLoadingStatus === REQUEST_STATUS.pending
  ) {
    return <div>Loading...</div>;
  }

  return <Reviews reviews={restaurantReviews} />;
};
