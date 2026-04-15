// import datejs (required for formatting dates)
require('datejs');

function combineUsers(...args) {
  // Step 2: initialize return object
  const combinedObject = {
    users: []
  };

  // Step 3 & 4: loop and merge arrays
  args.forEach(arr => {
    combinedObject.users.push(...arr);
  });

  // Step 5: add current date in M/d/yyyy format
  combinedObject.merge_date = new Date().toString('M/d/yyyy');

  // Step 7: return object
  return combinedObject;
}

// export function for testing
module.exports = combineUsers;