function hasDuplicates(numArr: number[]) {
  const numSet = new Set();

  for (const num of numArr) {
    if (numSet.has(num)) {
      return true;
    }
    numSet.add(num);
  }
  return false;
}

const myArr = [1, 2, 3, 3];
console.log(hasDuplicates(myArr));
