import users from './fake.api/user.api';
import professions from './fake.api/professions.api';
const API = {
  users,
  professions,
  qualities: users.getAllQualities(),
};
export default API;
