import { useAppState } from "../context/StateProvider";
import Logo from "../utils/assets/logo.png";
const Header = () => {
  const [{ displayUsers }, dispatch] = useAppState();
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
    </>
  );
};

export default Header;
