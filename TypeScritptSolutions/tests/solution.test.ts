import { hasDuplicates } from '../src/solution';

describe('hasDuplicates', () => {
  it('should return true for an array with duplicate numbers', () => {
    const myArr = [1, 2, 3, 3];
    expect(hasDuplicates(myArr)).toBe(true);
  });

  it('should return false for an array with unique numbers', () => {
    const myArr = [1, 2, 3, 4];
    expect(hasDuplicates(myArr)).toBe(false);
  });

  it('should return true for an array with multiple duplicate numbers', () => {
    const myArr: number[] = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    expect(hasDuplicates(myArr)).toBe(true);
  });

  it('should return false for an empty array', () => {
    const myArr: number[] = [];
    expect(hasDuplicates(myArr)).toBe(false);
  });

  it('should return false for an array with a single element', () => {
    const myArr = [10];
    expect(hasDuplicates(myArr)).toBe(false);
  });

  it('should return false for an array with decreasing element order', () => {
    const myArr: number[] = [5, 4, 3, 2, 1];
    expect(hasDuplicates(myArr)).toBe(false);
  });

  it('should return true when the array contains duplicate negative numbers', () => {
    const myArr: number[] = [-1, -2, -3, -1];
    expect(hasDuplicates(myArr)).toBe(true);
  });

  it('should return true when the duplicate number is a 0', () => {
    const myArr: number[] = [0, 1, 2, 0];
    expect(hasDuplicates(myArr)).toBe(true);
  });
  it('should return true when the duplicate number is in the start of the array', () => {
    const myArr: number[] = [1, 1, 2, 3, 4];
    expect(hasDuplicates(myArr)).toBe(true);
  });

  it('should return true if the duplicate number is in the end of the array', () => {
    const myArr: number[] = [1, 2, 3, 4, 4];
    expect(hasDuplicates(myArr)).toBe(true);
  });
});
