import { useQuery } from "@apollo/client";
import { useAppState } from "../context/StateProvider";
import { FILTER_PRODUCTS } from "../utils/graphql/queries.graphql";
import ProductRow from "./Row.Product";

const UserProduct = () => {
  const [{ currentUser: clientId }] = useAppState();
  const { loading, error, data } = useQuery(FILTER_PRODUCTS, {
    variables: { client: clientId },
  });
  if (loading) return <div className="">loading ...</div>;
  if (error) return <div className="">something went wrong!</div>;
  return (
    <div className="py-2 my-2 container mx-auto flex justify-center items-start gap-2 flex-wrap">
      {data &&
        data.filterProducts.map((product) => (
          <ProductRow key={product._id} product={product} />
        ))}
    </div>
  );
};

export default UserProduct;
