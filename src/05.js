function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every((user) => {
      return goodUsers.some((gooduser) => {
        return user.id === gooduser.id;
      });
    });
  };
}

module.exports = checkUsersValid
