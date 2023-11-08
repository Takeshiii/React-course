import { User } from "./component";
import { useGetUsersQuery } from "../../redux/services/users";

export const UserContainer = ({ userId }) => {
  const { data: user } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => {
      return {
        ...result,
        data: result.data?.find(({ id }) => id === userId),
      };
    },
  });

  if (!user) {
    return null;
  }

  return <User user={user} />;
};
