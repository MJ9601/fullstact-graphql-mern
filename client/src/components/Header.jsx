import { useAppState } from "../context/StateProvider";
import Logo from "../utils/assets/logo.png";
const Header = () => {
  const [{ displayUsers, currentUser }, dispatch] = useAppState();
  return (
    <>
      <div className="px-3 bg-slate-100 flex flex-row items-center justify-between">
        <div className="flex items-center justify-start gap-2">
          <img src={Logo} className="w-[100px] object-cover h-[60px]" />
          <h3 className="text-lg font-[500]">Shopping booth</h3>
        </div>
        <div className="flex items-center justify-right gap-4">
          <button
            className="button"
            onClick={() => dispatch({ type: "TOGGLE_DISPLAY_USERS" })}
          >
            {displayUsers ? "Products" : "Clients"}
          </button>
        </div>
      </div>
      <div className="w-[100%] px-4 pt-3 pb-1 flex justify-end items-center gap-2 border-b-2 mb-2">
        <button
          className="button"
          onClick={() => dispatch({ type: "TOGGLE_CREATE_USER" })}
        >
          Create Client
        </button>
        {currentUser && (
          <button
            className="button"
            onClick={() => dispatch({ type: "TOGGLE_CREATE_PRODUCT" })}
          >
            Create Product
          </button>
        )}
      </div>
    </>
  );
};

export default Header;
