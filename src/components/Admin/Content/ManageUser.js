import ModalCreateUser from './ModalCreateUser';
import './ManageUser.scss'
import { FcPlus } from 'react-icons/fc';
import { useState } from 'react';

const ManageUser = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false)
  return (
    <div className="manage-user-container">
      <div className="title">
        <FcPlus /> Manage user
      </div>
      <div className="user-content">
        <div className="btn-add-new">
          <button className="btn btn-primary" onClick={()=> setShowModalCreateUser(true)}>Add new user</button>
        </div>
        <div className="table-users-container">table user</div>
        <ModalCreateUser show={showModalCreateUser} setShow = {setShowModalCreateUser}/>
      </div>
    </div>
  );
};
export default ManageUser;
