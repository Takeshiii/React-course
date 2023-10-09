import { Button } from "../Button/component";

export const Tab = ({ title, onClick, isActive }) => {
  return <Button title={title} onClick={onClick} active={isActive} />;
};
