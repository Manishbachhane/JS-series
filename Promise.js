const promise = new Promise((resolve, reject) => {
  // Do something asynchronous
  const success = true; // Simulate success or failure
  if (success) {
    resolve("Promise resolved successfully!");
  } else {
    reject("Promise rejected.");
  }
});

const promise2 = new Promise((resolve, reject) => {
  // Do something asynchronous
  const success = false; // Simulate success or failure
  if (success) {
    resolve("Promise resolved successfully!");
  } else {
    reject("Promise rejected.");
  }
});



promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });


