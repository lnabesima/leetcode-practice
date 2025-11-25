function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (const [index, value] of nums.entries()) {
    const complement = target - value;
    const seen = map.get(complement);
    if (seen !== undefined) {
      return [seen, index];
    }

    map.set(value, index);
  }

  throw new Error("No two sum solution found.");
}

const nums = [2, 7, 11, 15];
const target = 9;

const result = twoSum(nums, target);
console.log(result);
