import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss'

const ManageUser = (props) => {
  return (
    <div className="manage-user-container">
      <div className="title">manage user</div>
      <div className="user-content">
        <div>
          <button>Add new user</button>
        </div>
        <div>table user</div>
      </div>
        <ModalCreateUser />
    </div>
  );
};
export default ManageUser;
