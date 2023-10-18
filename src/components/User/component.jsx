import styles from "./styles.module.scss";

export const User = ({ user }) => {
  return <div className={styles.user}>{user.name}</div>;
};
