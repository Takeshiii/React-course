import { useCreateReviewMutation } from "../../redux/services/reviews";
import { ReviewForm } from "./component";

export const ReviewFormContainer = ({ restaurantId, onClose }) => {
  const [createReview, { isLoading }] = useCreateReviewMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const onSubmitForm = (form) => {
    createReview({
      restaurantId,
      newReview: {
        ...form,
        userId: "a304959a-76c0-4b34-954a-b38dbf310360",
      },
    });
  };

  return <ReviewForm onClose={onClose} onSubmit={onSubmitForm} />;
};
