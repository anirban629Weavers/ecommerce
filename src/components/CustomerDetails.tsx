import { IOrderAddress } from "@/interfaces/order.interface";

const CustomerDetails = ({
  name,
  email,
  phone,
  address,
}: {
  name: string;
  email: string;
  phone: string;
  address: IOrderAddress;
}) => {
  return (
    <ul className="list-unstyled">
      <li className="text-muted">
        To: <span style={{ color: "#5d9fc5" }}>{name}</span>
      </li>
      <li className="text-muted">
        <i className="fa-solid fa-envelope"></i> {email}
      </li>
      <li className="text-muted">
        <i className="fas fa-phone"></i> {phone}
      </li>
      <li className="text-muted">
        <i className="fa-solid fa-globe mr-2"></i> India
      </li>
      <li className="text-muted">
        <i className="fa-solid fa-location-dot mr-2"></i> {address.addressline1}{" "}
        {address.city}
      </li>
    </ul>
  );
};
export default CustomerDetails;
