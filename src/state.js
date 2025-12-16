let currentUser = null;

module.exports = {
  getCurrentUser: () => currentUser,
  setCurrentUser: (user) => {
    currentUser = user;
  },
  logoutCurrentUser: () => {
    currentUser = null;
  }
};  