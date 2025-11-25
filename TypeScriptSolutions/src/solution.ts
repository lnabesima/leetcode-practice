export function twoSum(nums: number[], target: number): number[] {
  const seenNumbersMap = new Map<number, number>();
  for (const [index, value] of nums.entries()) {
    const complement = target - value;
    const complementIndex = seenNumbersMap.get(complement);
    if (complementIndex !== undefined) {
      return [complementIndex, index];
    }

    seenNumbersMap.set(value, index);
  }

  throw new Error("No two sum solution found.");
}

const nums = [2, 7, 11, 15];
const target = 9;

const result = twoSum(nums, target);
console.log(result);
