import Logo from "../utils/assets/logo.png";
const Header = () => {
  return (
    <>
      <div className="px-3 bg-slate-100 flex flex-row items-center justify-between">
        <div className="flex items-center justify-start gap-2">
          <img src={Logo} className="w-[100px] object-cover h-[60px]" />
          <h3 className="text-lg font-[500]">Shopping booth</h3>
        </div>
      </div>
    </>
  );
};

export default Header;
