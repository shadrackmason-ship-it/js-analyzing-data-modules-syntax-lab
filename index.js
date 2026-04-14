function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  for (let i = 0; i < args.length; i++) {
    combinedObject.users = [...combinedObject.users, ...args[i]];
  }

  combinedObject.merge_date = new Date().toLocaleDateString('en-US');

  return combinedObject;
}

module.exports = combineUsers;