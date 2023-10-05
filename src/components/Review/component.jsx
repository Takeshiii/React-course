import styles from "./styles.module.scss";

export const Review = ({ review }) => {
  return (
    <div className={styles.review}>
      {review.user}: {review.text}
    </div>
  );
};
