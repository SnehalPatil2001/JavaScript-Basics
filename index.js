let arr=[12,34,45,56,67,,89,90];
//console.log("Even Numbers");
console.log("Even Numbers: ");
for(let i=0; i<arr.length; i++){
    if(arr[i]%2 ===0 ){
        console.log(arr[i]);
    }
}

console.log("Odd numbers: ");
for(let i=0; i<arr.length; i++){
    if(arr[i]%2 !==0){
        console.log(arr[i]);
    }
}
