import { IListing } from '../../types';
import listingModel from '../../models/listing';

export const listingResolver = {
  Query: {
    async getlisting(): Promise<IListing> {
      const { title, description } = await listingModel.findOne();
      return {
        title,
        description,
      };
    },
  },
};
