import { ReviewContainer } from "../Review/container";

import styles from "./styles.module.scss";

export const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      {reviews.map((review) => (
        <ReviewContainer key={review.id} review={review} />
      ))}
    </div>
  );
};
