export interface User {
  _id?: string;
  email: string;
  password: string;
  phone: PhoneNumber;
  username: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PhoneNumber {
  code: string;
  number: string;
}
