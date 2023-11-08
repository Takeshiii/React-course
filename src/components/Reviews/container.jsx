import { Reviews } from "./component";
import { useGetReviewsQuery } from "../../redux/services/reviews";

export const ReviewsContainer = ({ restaurantId }) => {
  const { data: reviews } = useGetReviewsQuery(restaurantId);

  return <Reviews reviews={reviews} />;
};
