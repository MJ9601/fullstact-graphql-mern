import { useMutation } from "@apollo/client";
import { TrashIcon } from "@heroicons/react/solid";
import { useAppState } from "../context/StateProvider";
import { DEL_PRODUCT } from "../utils/graphql/mutations.graphql";

const ProductRow = ({ product }) => {
  const [{}, dispatch] = useAppState();
  const [delProduct] = useMutation(DEL_PRODUCT, {
    variables: { id: product._id },
  });
  return (
    <div className="rounded-sm ring-1 bg-white ring-gray-300 py-3 px-5 max-w-[250px] relative h-[500px]">
      <img src={product.image} alt="" className="max-w-[200px] mb-4" />
      <h3 className="text-sm font-[600] mb-3">{product.title}</h3>
      <h4 className="absolute top-1 right-1 z-10 text-sm font-[500] bg-red-600 py-[2px] px-[5px] rounded-full text-white">
        ${product.price}
      </h4>
      <p className="text-sm text-gray-700 line-clamp-5">
        {product.description}
      </p>
      <div className="flex absolute bottom-1 left-2 gap-2">
        <button
          className="button"
          onClick={() =>
            dispatch({
              type: "SET_CURRENT_PRODUCT",
              product,
            })
          }
        >
          Update Product
        </button>
        <button onClick={delProduct}>
          <TrashIcon className="delete-button" />
        </button>
      </div>
    </div>
  );
};

export default ProductRow;
