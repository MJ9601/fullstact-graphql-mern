import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../utils/graphql/queries.graphql";
import ClientRow from "./Row.Client";

const Client = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <div>Loading ...</div>;
  if (error) return <div>Something went wrong!</div>;
  const clients = data?.clients;
  return (
    <div className="py-3 flex flex-col items-start justify-center  container mx-auto my-3">
      {data &&
        clients.map((client) => <ClientRow key={client._id} client={client} />)}
    </div>
  );
};

export default Client;
