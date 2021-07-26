import { Model, Schema, model } from "mongoose";

import { IListingModel } from "../types";

const listingModel: Model<IListingModel> = model('listing', new Schema({
  title: String,
  description: String
}))
export default listingModel;