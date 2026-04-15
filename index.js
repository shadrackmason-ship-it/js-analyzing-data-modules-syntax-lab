function combineUsers(...args) {
  const users = args.flat();

  return {
    users,
    merge_date: new Date().toISOString().split('T')[0]
  };
}

module.exports = combineUsers;