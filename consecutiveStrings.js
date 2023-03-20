const arr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"]
const arr2 =["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"]


function longest_consec(arr,k){
    
let max=0
let str=''
let n= arr.length

if(n === 0 || k<= 0 || k > n) return 'nothing'
if(n===1) return arr
for(let i=0;i< n;i++){
    
    
    if(i !== n-1){   
        if(arr[i].concat(arr[i+1]).length > max){
        max = arr[i].concat(arr[i+1]).length
        str=arr[i].concat(arr[i+1])
    }}
}
 return str
}




console.log(longest_consec(arr,2))
