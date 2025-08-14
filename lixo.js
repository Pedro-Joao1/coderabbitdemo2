import fs from 'fs'; // unused import

function calculateProduct(numbers) {
  let result = 1
  for (let i = 0; i < numbers.length; i++) {
    result *= numbers[i]
  }
  return result
}

function main() {
  const nums = [1,2,3,4,5]
  const product = calculateProduct(nums)
  console.log("Product is " + product)
}

main()
