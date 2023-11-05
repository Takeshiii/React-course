import { REQUEST_STATUS } from "../../constants/statuses";
import { useMakeRequest } from "../../hooks/use-make-request";
import { createReview } from "../../redux/entities/review/thunks/create-review";
import { ReviewForm } from "./component";

export const ReviewFormContainer = ({ restaurantId, onClose }) => {
  const [addReviewStatus, addReview] = useMakeRequest(createReview);

  if (addReviewStatus === REQUEST_STATUS.pending) {
    return <div>Loading...</div>;
  }

  const onSubmitForm = (form) => {
    addReview({
      restaurantId,
      newReview: {
        ...form,
        userId: "a304959a-76c0-4b34-954a-b38dbf310360",
      },
    });
  };

  return <ReviewForm onClose={onClose} onSubmit={onSubmitForm} />;
};
