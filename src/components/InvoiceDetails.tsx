const InvoiceDetails = ({
  id,
  date,
  status,
}: {
  id: string;
  date: string;
  status: boolean;
}) => {
  return (
    <ul className="list-unstyled">
      <li className="text-muted">
        <i
          className="fas fa-circle"
          style={{ color: "#3B5D50", marginRight: "2%" }}
        ></i>
        <span className="fw-bold">ID:</span> #{id}
      </li>
      <li className="text-muted">
        <i
          className="fas fa-circle"
          style={{ color: "#3B5D50", marginRight: "2%" }}
        ></i>
        <span className="fw-bold">Creation Date: </span>
        {date}
      </li>
      <li className="text-muted">
        <i
          className="fas fa-circle"
          style={{ color: "#3B5D50", marginRight: "2%" }}
        ></i>
        <span className="me-1 fw-bold">Status:</span>
        {status ? (
          <span className="badge bg-success text-black fw-bold">Paid</span>
        ) : (
          <span className="badge bg-warning text-black fw-bold">Unpaid</span>
        )}
      </li>
    </ul>
  );
};
export default InvoiceDetails;
