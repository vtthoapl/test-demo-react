
import axios from '../utils/axiosCustomize'; // becauce the axioscustomize there is only 1 export, so we can actually can call by any name, ont only by exact name: instance nam
const postCreateNewUser = (email, password, username, role, image) => {
  //submit data
  const data = new FormData();
  data.append('email', email);
  data.append('password', password);
  data.append('username', username);
  data.append('role', role);
  data.append('userImage', image);
  return axios.post('api/v1/participant', data);
};
export { postCreateNewUser };
