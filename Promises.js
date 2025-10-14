function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve({
          id: 1,
          name: "bca",
          batch: 2024,
        });
      } else {
        reject("sorry i am ashamed of myself");
      }
    }, 2000);
  });
}
fetchData()
  .then((obj) => {
    console.log(
      `data recieved : id: ${obj.id} Name: ${obj.name}, batch: ${obj.batch}`,
    );
  })
  .catch((info) => {
    console.log(info);
  });

// let
// let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     resolve("promise resolved succesfully")
//     })
// })
// promise.then((message)=>{
//     console.log("hello")
// })
//
// promise.catch((err)=>{
//     console.log(err)
// })
//
