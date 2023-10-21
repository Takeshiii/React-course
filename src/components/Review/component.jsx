import { UserContainer } from "../User/container";

import styles from "./styles.module.scss";

export const Review = ({ review }) => {
  return (
    <div className={styles.review}>
      <UserContainer userId={review.userId} />: {review.text}
    </div>
  );
};
