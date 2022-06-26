import { useQuery } from "@apollo/client";
import { GET_CLIENT_BY_ID } from "../utils/graphql/queries.graphql";
import UserProduct from "./User.Product";

const UserPage = ({ user }) => {
  const { loading, error, data } = useQuery(GET_CLIENT_BY_ID, {
    variables: { id: user._id },
  });
  return (
    <>
      <div className="border-b-2 w-[100%] py-1 px-3 text-lg font-[500]">
        JohnDoe
      </div>
      <UserProduct user={data.client._id} />
    </>
  );
};

export default UserPage;
