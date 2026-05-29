// Synchronous

// console.log("Hey 1")
// console.log("Hey 2")
// for(let e = 0; e <10; e++){
//     console.log(e)
// }
// console.log("Hey 3")

// Asyncronius

console.log("Hey 1")
setTimeout(()=>{
    console.log("hey 2")
}, 3000)
console.log("Hey 3")



const fetchCountry = new Promise((resolve, reject)=>{
    const data =  fetch("https://restcountries.com/v3.1/name/peru").then((data)=>{
        return data.json();
    }).catch((err)=>{
        return err
    });
    if(data.ok){
        resolve(data);
    }else{
        reject(data)
    }
})

console.log("Hey 4")
fetchCountry.then((data)=>{
    console.log('Successfull '+ data)
}).catch((err)=>{
    console.log("Failed because -> "+ err)
});
console.log("Hey 5")


const awitFunc = async ()=>{
    const responce = await fetch("https://restcountries.com/v3.1/name/peru").then((response) => response.json()).then((data) =>{
        return data[0].startOfWeek;
    }).catch((err)=>{
        console.log('Error: ', err)
    })
    console.log(responce);
}

await awitFunc();
console.log("Testing Sync")