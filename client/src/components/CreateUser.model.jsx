import { useMutation } from "@apollo/client";
import { XIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { ADD_CLIENT } from "../utils/graphql/mutations.graphql";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [addClient] = useMutation(ADD_CLIENT, {
    variables: { email, name },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" && name === "") return alert("The Field is required!");
    addClient(email, name);

    setEmail("");
    setName("");
  };
  return (
    <div className="model-bg">
      <div className="model-body">
        <div className="model-header">
          <h3 className="model-headline">Create Client</h3>
          <XIcon className="model-close" />
        </div>
        <form className="model-form" onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="model-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
