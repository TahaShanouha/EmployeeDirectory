/* eslint-disable import/prefer-default-export */
export interface IEmployee {
  name?: IEmployeeName;
  email?: string;
  phone?: string;
  location?: IEmployeeLocation;
  department?: string;
  title?: string;
  id?: IEmployeeId
}

export interface IEmployeeName {
  title : string;
  first: string;
  last: string;
}

interface IEmployeeLocation{
  street: string;
  city: string;
  state: string;
  postcode: string;
}

interface IEmployeeId{
  name: string;
  value: string;
}
