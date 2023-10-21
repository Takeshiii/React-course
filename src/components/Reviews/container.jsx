import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectReviewLoadingStatus } from "../../redux/entities/review/selectors";
import { getReviews } from "../../redux/entities/review/thunks/get-reviews";
import { getUsers } from "../../redux/entities/user/thunks/get-users";
import { Reviews } from "./component";
import { REQUEST_STATUS } from "../../constants/statuses";

export const ReviewsContainer = (props) => {
  const loadingStatus = useSelector(selectReviewLoadingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getReviews());
  }, []);

  return (
    <div>
      {loadingStatus === REQUEST_STATUS.pending ? (
        <div>Loading...</div>
      ) : (
        <Reviews {...props} />
      )}
    </div>
  );
};
