import { useQuery } from "@apollo/client";
import { useAppState } from "../context/StateProvider";
import { GET_CLIENT_BY_ID } from "../utils/graphql/queries.graphql";
import UserProduct from "./User.Product";

const UserPage = () => {
  const [{ currentUser: clientId }] = useAppState();
  const { loading, error, data } = useQuery(GET_CLIENT_BY_ID, {
    variables: { id: clientId },
  });
  if (loading) return <div className="">Loading...</div>;
  return (
    <>
      <div className="border-b-2 w-[100%] py-1 px-3 text-lg font-[500]">
        {data.client.name}
      </div>
      <UserProduct />
    </>
  );
};

export default UserPage;
