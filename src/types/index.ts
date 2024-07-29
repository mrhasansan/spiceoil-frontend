export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  quantity: number;
  category: string;
  olfactoryProfile: string;
  imageURL: string;

  createdAt: Date;
  updatedAt: Date;
};

export type User = {
  id: string;

  username: string;
  email: string;

  createdAt: Date;
  updatedAt: Date;
};
