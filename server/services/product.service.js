import ProductModel from "../models/product.model";

export const createProduct = async (payload) =>
  (await ProductModel.create(payload)).toJSON();

export const findProducts = async (query = {}) => await ProductModel.find(query);

export const findProduct = async (query) => await ProductModel.findOne(query);

export const findProductAndUpdate = async (query, update, options = {}) =>
  (await ProductModel.findOneAndUpdate(query, update, options)).toJSON();

export const deleteProduct = async (query) =>
  await ProductModel.deleteOne(query);
