import { TrashIcon } from "@heroicons/react/solid";

const ProductRow = ({ product }) => {
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
        <button className="button">Update Product</button>
        <button>
          <TrashIcon className="delete-button" />
        </button>
      </div>
    </div>
  );
};

export default ProductRow;
