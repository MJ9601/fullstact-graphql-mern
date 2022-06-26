import { useQuery } from "@apollo/client";
import { FILTER_PRODUCTS } from "../utils/graphql/queries.graphql";
import ProductRow from "./Row.Product";

const UserProduct = ({ user }) => {
  const { loading, error, data } = useQuery(FILTER_PRODUCTS, {
    variables: { clinet: user._id },
  });
  if (loading) return <div className="">loading ...</div>;
  if (error) return <div className="">something went wrong!</div>;
  return (
    <div className="py-2 my-2 container mx-auto flex justify-center items-start gap-2 flex-wrap">
      {data &&
        data.products.map((product) => (
          <ProductRow key={product._id} product={product} />
        ))}
    </div>
  );
};

export default UserProduct;
