import mongoose from "mongoose";

const Client = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
  },
  {
    timestamps: true,
  }
);

const ClientModel = mongoose.model("Client", Client);

export default ClientModel;
