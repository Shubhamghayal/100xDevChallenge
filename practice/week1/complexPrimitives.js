const arr=[1,9,7,2,3,4,5,6,8]

function bigarr(){
    let big=0;
    for(let i=0;i<arr.length;i++){
        if (arr[i]>big){
            big=arr[i]
        }
    }
    return big
}
console.log(bigarr())