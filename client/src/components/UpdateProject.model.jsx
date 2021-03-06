import { XIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useAppState } from "../context/StateProvider";
import { useMutation } from "@apollo/client";
import { UPDATE_PRODUCT } from "../utils/graphql/mutations.graphql";
import { GET_PRODUCTS } from "../utils/graphql/queries.graphql";

const UpdateProduct = () => {
  const [{ currentProduct }, dispatch] = useAppState();
  const id = currentProduct._id;
  const [title, setTitle] = useState(currentProduct.title);
  const [price, setPrice] = useState(currentProduct.price);
  const [image, setImage] = useState(currentProduct.image);
  const [desc, setDesc] = useState(currentProduct.description);
  const [status, setStatus] = useState(currentProduct.status);
  const [updateProduct] = useMutation(UPDATE_PRODUCT, {
    variables: { id, title, price, image, desc, status },
    refetchQueries: [{ query: GET_PRODUCTS }],
  });

  const onSubmit = (e) => {
    e.preventDefault();
    updateProduct(id, title, Number(price), image, desc, image);
    dispatch({ type: "SET_CURRENT_PRODUCT", product: null });
  };
  return (
    <div className="model-bg">
      <div className="model-body">
        <div className="model-header">
          <h3 className="model-headline">Update Product</h3>
          <XIcon
            className="model-close"
            onClick={() =>
              dispatch({
                type: "SET_CURRENT_PRODUCT",
                product: null,
              })
            }
          />
        </div>
        <form className="model-form" onSubmit={onSubmit}>
          <input type="hidden" value={currentProduct._id} />

          <input
            type="text"
            placeholder="Title"
            className="model-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Price"
            className="model-input"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image url"
            className="model-input"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <textarea
            type="text"
            placeholder="Description"
            className="model-input"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="model-input"
          >
            <option value="NotPublished">Not Published</option>
            <option value="Published">Published</option>
          </select>
          <input type="submit" value="Submit" className="button" />
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
