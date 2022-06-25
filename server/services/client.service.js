import ClientModel from "../models/client.model";

export const createUser = async (payload) =>
  (await ClientModel.create(payload)).toJSON();

export const findAllUser = async (query = {}) => await ClientModel.find(query);

export const findUser = async (query) => await ClientModel.findOne(query);

export const findUserAndUpdate = async (query, update, options = {}) =>
  await ClientModel.updateOne(query, update, options);

export const deleteUser = async (query) => await ClientModel.deleteOne(query);
