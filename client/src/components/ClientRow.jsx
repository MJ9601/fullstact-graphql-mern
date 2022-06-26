import { TrashIcon } from "@heroicons/react/solid";
const ClientRow = ({ client }) => {
  return (
    <div className="flex justify-between items-center gap-4 font-[500] border-b-2 w-[100%]  hover:bg-slate-100  px-2 transition-all duration-100 py-2">
      <div className="justify-start items-center gap-4 flex">
        <div className="ml-3">{client.name}</div>
        <div className="text-slate-500 text-sm">{client.email}</div>
      </div>
      <div className="flex justify-right items-center gap-4">
        <button className="bg-blue-500 rounded-sm px-3 pt-[2px] pb-1 text-white text-center hover:bg-blue-300 hover:text-blue-700 transition-all duration-150 hover:ring-2 hover:ring-blue-700">
          Show Products
        </button>
        <button>
          <TrashIcon className="h-8 text-red-600 bg-gray-300 py-[3px] px-[2px] rounded-sm  hover:ring-red-700 hover:ring-2 transition-all duration-300" />
        </button>
      </div>
    </div>
  );
};

export default ClientRow;
