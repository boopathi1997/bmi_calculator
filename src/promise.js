

//Simulating an asynchronous operation with a Promise

let fetchData = new Promise((resolve, reject) => {
    const success = false; // Change to false to simulate rejection
    if (success) {
        setTimeout(() => resolve("Data fetched successfully"), 1000);
    } else {
        reject("Error fetching data");
    }
});
console.log(fetchData)

fetchData.then((result) =>{ 
  console.log(result)
})
.catch((fail)=>{
  console.log(fail)
})


//Asynchronous function using async/await
async function fetchDataAsync() {   
    try {
        console.log("Fetching data...");
        let result = await fetchData;
        console.log("Data received:", result); 
    } catch (error) {
        console.error("Error:", error);
    }
}

// Calling the asynchronous function
fetchDataAsync();





// Using map() with a callback function

//const numbers = [1, 2, 3, 4, 5];

// Callback function for mapping: doubling each element
//(definition:exectues call back for each array element 
 //and returns a new array)
// const doubledNumbers = numbers.map(function (num) {
//   return num * 2;
// });

// console.log("Original array:", numbers);
// console.log("Doubled array:", doubledNumbers);

