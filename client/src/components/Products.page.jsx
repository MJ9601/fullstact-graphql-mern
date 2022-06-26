import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../utils/graphql/queries.graphql";
import ProductRow from "./Row.Product";

const Products = ({ user }) => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
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

export default Products;
