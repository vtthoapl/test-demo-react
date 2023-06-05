import ModalCreateUser from './ModalCreateUser';
import './ManageUser.scss';

const ManageUser = (props) => {
  return (
    <div className="manage-user-container">
      <div className="title">
      Manage user
      </div>
      <div className="user-content">
        <div className="btn-add-new">
          <button className='btn btn-primary'>Add new user</button>
        </div>
        <div className="table-users-container">table user
        </div>
      <ModalCreateUser />
      </div>
    </div>
  );
};
export default ManageUser;
