const userDBKey = 'base-blood-user-db';

const getAllUsers = () => {
  const data = getItemLocalStorage(userDBKey);
  return data?.users || [];
};

const updateAllUsers = (users) => {
  let body = getItemLocalStorage(userDBKey)
  body.users = users  
  setItemLocalStorage(userDBKey, body);
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
  console.log('>>>>>>>>>>', users)
  return users.find((user) => user.email === email);
};    

const findUserById = (userId) => {
  const users = getAllUsers();
  return users.find((user) => user.id === userId);
};

const updateUser = (userUpdated) => {
  const users = getAllUsers();

  const usersUpdated = users.map((user) => {
    if (user.id === userUpdated.id) {
      return ({
        ...user,
        ...userUpdated
      })
    }
    return user;
  })

  updateAllUsers(usersUpdated);
}

const createUserDonations = (userId, donation) => {
  const userToUpdate = findUserById(userId)
  const donations = userToUpdate.donations || []
  const updatedDonations = [...donations, donation]

  const updatedUser = {
    ...userToUpdate,
    donations: updatedDonations
  };

  const users = getAllUsers();
  const usersUpdated = users.map((user) => {
    if (user.id === userId) {
      return updatedUser;
    }
    return user;
  })

  updateAllUsers(usersUpdated);
}
