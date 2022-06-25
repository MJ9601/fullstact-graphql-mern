import mongoose from "mongoose";

const product = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String },
    status: { type: String, enum: ["published", "notPublished"] },
    client: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model("Product", product);

export default ProductModel;
