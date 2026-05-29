// stat

// E[sum]/aN

const sumNumbers = (arr) =>{
    let num = 0;
    arr.map((number)=>{num += number})
    return num;
}

let meanNumbers = [3, 5, 6, 9, 7,6,5,2,5,8,45,9];


const mean = (arr, func2) =>{
    let sum = func2(arr);
    return sum/arr.length;
}

let data = mean(meanNumbers, sumNumbers);

console.log(data)

// median

const bubbleSort = (arr) =>{
    let temp = 0;
    for(let i = 0; i < arr.length; i++){
        for(let k = 0; k < arr.length - 1; k++){
            if(arr[k] > arr[k+1]){
                temp = arr[k] + arr[k+1];
                arr[k] = temp - arr[k];
                arr[k+1] = temp - arr[k+1];
            }
        }
    }
}

console.log(meanNumbers)

const median = (arr) =>{
    bubbleSort(arr);
    let length = arr.length;
    if(length%2 === 0){
        return (arr[length/2] + arr[length/2 - 1])/2
    }else{
        return arr[Math.floor(length/2)]
    }
}

console.log(median(meanNumbers))
// console.log(strotedNumbers)


// binary

let binary = []
let base10 = 78
while(base10 > 0){
    if(base10%2 === 0){
        binary.push(0)
    }else{
        binary.push(1)
    }
    base10 = base10 % 2 === 0 ? (base10/2): (base10/2) - 0.5;
}
console.log(`${binary.reverse()}`)