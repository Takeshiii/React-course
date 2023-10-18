import { ReviewContainer } from "../Review/container";

import styles from "./styles.module.scss";

export const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      {reviews.map((id) => (
        <ReviewContainer key={id} reviewId={id} />
      ))}
    </div>
  );
};
