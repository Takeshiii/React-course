import { Button } from "../Button/component";

export const Tab = ({ title, onClick }) => {
  return <Button title={title} onClick={onClick} style={"tab"} />;
};
