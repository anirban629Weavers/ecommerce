import { IOrderAddress } from "@/interfaces/order.interface";

export const isAddressFilled = (address: IOrderAddress): boolean => {
  return (
    address.addressline1.trim() !== "" &&
    address.addressline2.trim() !== "" &&
    address.city.trim() !== "" &&
    address.state.trim() !== "" &&
    address.zipcode.trim() !== ""
  );
};
