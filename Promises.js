//function having created promise
//promise creation
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

// async await
// introduced in es6 update of js
// 2016
async function getData() {
  try {
    const obj = await fetchData();
    console.log("data recieved");
  } catch (error) {
        console.log(error)
    }
}

getData();







// promise consumption
// fetchData()
//   .then((obj) => {
//     console.log(
//       `data recieved : id: ${obj.id} Name: ${obj.name}, batch: ${obj.batch}`,
//     );
//   })
//   .catch((info) => {
//     console.log(info);
//   });

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
