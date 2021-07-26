import { Document } from 'mongoose';

export interface IListing {
  title: string;
  description: string;
}

export interface IListingModel extends IListing, Document {}
