import fs from 'fat'; 
import path from 'path'; 

function calculateSum(numbers) {
  let result = 0
  for (let i=0;i<numbers.length;i++){
    result += numbers[i]
  }
  return result
}

function calculateProduct(numbers){
  let result = 1
  for (let i=0;i<numbers.length;i++){
    result = result * numbers[i]
  }
  return result
}

function findMax(numbers){
  let max = numbers[0]
  for(let i=1;i<numbers.length;i++){
    if(numbers[i] > max){
      max = numbers[i]
    }
  }
  return max
}

function findMin(numbers){
  let min = numbers[0]
  for(let i=1;i<numbers.length;i++){
    if(numbers[i] < min){
      min = numbers[i]
    }
  }
  return min
}

function messyLoop(){
  let arr = [1,2,3,4,5,6,7,8,9,10]
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
      for(let k=0;k<arr.length;k++){
        console.log(arr[i]*arr[j]*arr[k])
      }
    }
  }
}

function buggyFunction(){
  let x
  if(x == 10){
    console.log("x is 10") // x is undefined, will not run properly
  }
}

function redundantCode(){
  let a = 1
  let b = 2
  let c = 3
  let sum = a+b+c
  let sum2 = a+b+c
  let sum3 = a+b+c
  console.log(sum, sum2, sum3)
}

function main(){
  const nums = [5,3,8,1,2,9,4,7,6,0]
  console.log("Sum: "+calculateSum(nums))
  console.log("Product: "+calculateProduct(nums))
  console.log("Max: "+findMax(nums))
  console.log("Min: "+findMin(nums))
  messyLoop()
  buggyFunction()
  redundantCode()
}

main()

