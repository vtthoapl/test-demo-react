import ModalCreateUser from "./ModalCreateUser";

const ManageUser = (props) => {
  return (
    <div className="manage-user-container">
      <div className="title">manage user</div>
      <div className="user-content">
        <div>
          <button>Add new user</button>
        </div>
        <div>table user</div>
        <ModalCreateUser />
      </div>
    </div>
  );
};
export default ManageUser;
