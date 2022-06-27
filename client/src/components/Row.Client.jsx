import { useMutation } from "@apollo/client";
import { TrashIcon } from "@heroicons/react/solid";
import { useAppState } from "../context/StateProvider";
import { DEL_CLIENT } from "../utils/graphql/mutations.graphql";
import { GET_CLIENTS } from "../utils/graphql/queries.graphql";

const ClientRow = ({ client }) => {
  const [{}, dispatch] = useAppState();
  const [deleteClient] = useMutation(DEL_CLIENT, {
    variables: {
      id: client._id,
    },
    refetchQueries: [{ query: GET_CLIENTS }],
    // update(cache, { data: { deleteClient } }) {
    //   const { clients } = cache.readQuery({ query: GET_CLIENTS });
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: {
    //       clients: clients.filter((client) => client._id !== null),
    //     },
    //   });
    // },
  });
  return (
    <div className="flex justify-between items-center gap-4 font-[500] border-b-2 w-[100%]  hover:bg-slate-100  px-2 transition-all duration-100 py-2">
      <div className="justify-start items-center gap-4 flex">
        <div className="ml-3">{client.name}</div>
        <div className="text-slate-500 text-sm">{client.email}</div>
      </div>
      <div className="flex justify-right items-center gap-4">
        <button
          className="button"
          onClick={() =>
            dispatch({
              type: "SET_CURRENT_USER",
              client: client._id,
            })
          }
        >
          More Details
        </button>
        <button onClick={deleteClient}>
          <TrashIcon className="delete-button" />
        </button>
      </div>
    </div>
  );
};

export default ClientRow;
