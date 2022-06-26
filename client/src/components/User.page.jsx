import { useMutation } from "@apollo/client";
import Products from "./Products.page";

const UserPage = ({ user }) => {
  return (
    <>
      <div className="border-b-2 w-[100%] py-1 px-3 text-lg font-[500]">
        JohnDoe
      </div>
      <Products user={user} />
    </>
  );
};

export default UserPage;
