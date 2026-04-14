function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  for (let i = 0; i < args.length; i++) {
    combinedObject.users = [...combinedObject.users, ...args[i]];
  }

  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const year = today.getFullYear();

  combinedObject.merge_date = `${month}/${day}/${year}`;

  return combinedObject;
}

module.exports = combineUsers;