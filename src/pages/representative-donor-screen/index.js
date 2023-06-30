const deleteAccount = () => {
  const userId = window.location.search.split('id=')[1].split('&')[0];
  deleteUser(userId);
  window.location.assign('../representative-screen/index.html');
};

const editAccount = () => {
  const userId = window.location.search.split('id=')[1].split('&')[0];
  addEditAccountModalToDOM(userId)
}


document.addEventListener('DOMContentLoaded', () => {
  // Registrando função callback para o botão
  const deleteAccountbutton = document.getElementById('delete-account-button');
  deleteAccountbutton.addEventListener('click', () => {
    addDeleteAccountModalToDOM(deleteAccount);
  });

  const editButton = document.getElementById('edit-account-button');
  editButton.addEventListener('click', editAccount);
});
