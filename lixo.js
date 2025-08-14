import fs from 'fs'; 

function calculateSum(numbers) {
  let result = 0
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i]
  }
  return result
}

function main(){
  const nums = [1,2,3,4,5]
  const sum = calculateSum(nums)
  console.log("Sum is " + sum)
}

main()
