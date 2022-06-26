import { useMutation } from "@apollo/client";
import { XIcon } from "@heroicons/react/solid";

const CreateUser = () => {
  return (
    <div className="model-bg">
      <div className="model-body">
        <div className="model-header">
          <h3 className="model-headline">Create Client</h3>
          <XIcon className="model-close" />
        </div>
        <form className="model-form">
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="model-input"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Name"
            className="model-input"
          />
          <input type="submit" value="Submit" className="button" />
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
