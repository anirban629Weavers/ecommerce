import { IUser_DB } from "@/interfaces/user.interface";
import { formatDate } from "@/utils/getDateDetails";

const ShowUserRow = ({ user, index }: { user: IUser_DB; index: number }) => (
  <tr>
    <td scope="col">{index + 1}</td>
    <td scope="col">
      {/* <Link
        href={`/invoice/${user._id}`}
        style={{
          cursor: "pointer",
          textDecoration: "none",
          color: "#3B5D50",
        }}
      > */}
      {user._id}
      {/* </Link> */}
    </td>
    <td scope="col">{user.firstname + " " + user.lastname}</td>
    <td scope="col">{user.email}</td>
    <td scope="col">
      {user.isAdmin ? (
        <span className="text-success">True</span>
      ) : (
        <span className="text-warning">False</span>
      )}
    </td>
    <td scope="col">{user.birthday}</td>
    <td scope="col">{user.phone}</td>
    <td scope="col">{formatDate(user.createdAt).substring(0, 12)}</td>
  </tr>
);
export default ShowUserRow;
