// const array=[{
//     name:"shubham",
//     gender:"male"
// },{
//     name:"priya",
//     gender:"female"
// },{
//     name:"sham",
//     gender:"male"
// }
// ]

// for(i=0;i<array.length;i++){
//     if(array[i]["gender"]==="male"){
//         console.log(array[i]["name"])
//     }
// }


function arthemethicOperation(a,b,arthemeticFunction){
    const result=arthemeticFunction(a,b)
    return result
}
function sum(a,b){
    return a+b
}
const value=arthemethicOperation(1,5,sum)
console.log(value);