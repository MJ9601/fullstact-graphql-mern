import { useMutation } from "@apollo/client";
import { XIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useAppState } from "../context/StateProvider";
import { ADD_PRODUCT } from "../utils/graphql/mutations.graphql";
import { GET_PRODUCTS } from "../utils/graphql/queries.graphql";

const CreateProject = () => {
  const [{ currentUser: client }, dispatch] = useAppState();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState("NotPublished");
  const [createProduct] = useMutation(ADD_PRODUCT, {
    variables: { title, price, desc, image, status, client },
    refetchQueries: [{ query: GET_PRODUCTS }],
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (title == "" || price == "" || desc == "")
      return alert("Tile, price and description fields are required!");

    console.log({ title, price, desc, image, status, client });
    createProduct(title, Number(price), desc, image, status, client);

    setTitle("");
    setPrice("");
    setDesc("");
    setImage("");
    setStatus("NotPublished");
    dispatch({
      type: "TOGGLE_CREATE_PRODUCT",
    });
  };

  return (
    <div className="model-bg">
      <div className="model-body">
        <div className="model-header">
          <h3 className="model-headline">Create Product</h3>
          <XIcon
            className="model-close"
            onClick={() => dispatch({ type: "TOGGLE_CREATE_PRODUCT" })}
          />
        </div>
        <form className="model-form" onSubmit={onSubmit}>
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
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            placeholder="Description"
            className="model-input"
          />
          <select
            className="model-input"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
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

export default CreateProject;
