import ProductModel from "../models/product.model";

export const createProduct = async (payload) =>
  (await ProductModel.create(payload)).toJSON();

export const findAllProducts = async (query = {}) =>
  await ProductModel.find(query);

export const findProduct = async (query) => await ProductModel.findOne(query);

export const findProductAndUpdate = async (query, update, options = {}) =>
  await ProductModel.updateOne(query, update, options);

export const deleteProduct = async (query) =>
  await ProductModel.deleteOne(query);