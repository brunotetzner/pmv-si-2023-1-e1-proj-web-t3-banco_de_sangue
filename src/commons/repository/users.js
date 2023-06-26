const userDBKey = 'base-blood-user-db';

const getAllUsers = () => {
  return getItemLocalStorage(userDBKey) || [];
};

const updateAllUsers = (users) => {
  setItemLocalStorage(userDBKey, users);
};

const createUser = (user) => {
  const users = getAllUsers();
  user.id = generateUUID();
  users.push(user);
  updateAllUsers(users);
};

const deleteUser = (userId) => {
  const users = getAllUsers();
  const usersUpdated = users.filter((user) => user.id !== userId);
  updateAllUsers(usersUpdated);
};

const findUserByEmail = (email) => {
  const users = getAllUsers();
  return users.find((user) => user.email === email);
};
