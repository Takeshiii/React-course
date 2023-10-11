import { Button } from "../Button/component";

export const Tab = ({ title, onClick, isActive }) => {
  return (
    <Button
      size="large"
      viewVariant={isActive ? "active" : "base"}
      title={title}
      onClick={onClick}
    />
  );
};
