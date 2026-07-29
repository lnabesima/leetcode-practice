import { twoSum } from '../src/solution';

describe('twoSum', () => {
  const ERROR_MESSAGE = 'No two sum solution found.';

  describe('Functional correctness', () => {
    test.each([
      ['basic positive numbers', [1, 2, 3, 4], 7, [2, 3]],
      ['negative numbers', [-1, -2, -3, -4], -3, [0, 1]],
      ['mixed positives and negatives', [-1, 0, 1, 2], -1, [0, 1]],
      ['zeros', [0, 0, 0, 0], 0, [0, 1]],
      ['repeated numbers (valid pair)', [1, 2, 2, 4], 4, [1, 2]],
      ['unsorted array', [2, 5, 1, 3], 6, [1, 2]],
      ['large integers', [999999998, 2, 1], 1000000000, [0, 1]],
    ])('should solve for %s', (_, nums, target, expected) => {
      expect(twoSum(nums, target)).toEqual(expected);
    });
  });

  describe('Error handling', () => {
    test.each([
      ['empty array', []],
      ['single element', [1]],
      ['no solution found', [1, 2, 5]],
      ['repeated numbers (no solution)', [1, 2, 2, 4], 100],
    ])('should throw error for %s', (_, nums, target = 10) => {
      expect(() => twoSum(nums, target)).toThrow(ERROR_MESSAGE);
    });
  });

  it('should perform efficiently with a large dataset', () => {
    // this underscore syntax is the numeric separator
    // it gets ignored by the javascript engine
    const size = 1_000_000;
    const arr = Array.from({ length: size }, (_, i) => i);
    const target = arr[size - 2]! + arr[size - 1]!;

    expect(twoSum(arr, target)).toEqual([size - 2, size - 1]);
  });
});