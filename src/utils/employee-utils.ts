import { IEmployeeName, IEmployeeLocation } from "../models/Employee";

 export  function setName(name: IEmployeeName)  {
  return name.title + " " + name.first + " " + name.last;
}

export function setAddress(location: IEmployeeLocation) {
  return location.city + ", "+ location.state +", "+ location.postcode+", " + location.street.name + ", " + location.street.number; 
}