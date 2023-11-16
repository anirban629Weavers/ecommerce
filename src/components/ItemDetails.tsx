const ItemDetails = ({
  no,
  name,
  qty,
  unitPrice,
  totalAmount,
}: {
  no?: string;
  name: string;
  qty: number;
  unitPrice: number;
  totalAmount: number;
}) => {
  return (
    <tr>
      <th scope="row">{no}1</th>
      <td>{name}</td>
      <td>{qty}</td>
      <td>&#8377;{unitPrice}</td>
      <td>&#8377;{totalAmount}</td>
    </tr>
  );
};

export default ItemDetails;
