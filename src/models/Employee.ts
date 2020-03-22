/* eslint-disable import/prefer-default-export */
export interface IEmployee {
  name?: IEmployeeName;
  email?: string;
  phone?: string;
  location?: IEmployeeLocation;
  department?: string;
  title?: string;
  login: IEmployeeId
  picture?: IEmployeeImages;
  gender?: string;
  dob?: IEmployeeDOB;
}

export interface IEmployeeName {
  title : string;
  first: string;
  last: string;
}

export interface IEmployeeLocation{
  street: IStreet;
  city: string;
  state: string;
  postcode: string;
}

interface IStreet {
  name: string;
  number: string;
}

interface IEmployeeId{
  uuid: string;
}

interface IEmployeeImages{
  large: string;
  medium: string;
  thumbnail: string;
}

interface IEmployeeDOB{
  age: number;
}