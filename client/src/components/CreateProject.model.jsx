import { XIcon } from "@heroicons/react/solid";

const CreateProject = () => {
  return (
    <div className="model-bg">
      <div className="model-body">
        <div className="model-header">
          <h3 className="model-headline">Create Product</h3>
          <XIcon className="model-close" />
        </div>
        <form className="model-form">
          <input
            type="text"
            name=""
            id=""
            placeholder="Title"
            className="model-input"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Price"
            className="model-input"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Image url"
            className="model-input"
          />
          <textarea
            type="text"
            name=""
            id=""
            placeholder="Description"
            className="model-input"
          />
          <select name="" id="" className="model-input">
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
