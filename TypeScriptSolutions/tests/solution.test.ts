import { isAnagram } from '../src/solution';

describe('isAnagram', () => {
  it('should return false if one string is empty', () => {
    const str1 = '';
    const str2 = 'banana';
    expect(isAnagram(str1, str2)).toBe(false);
  });
  it('should return false if one string is null', () => {
    const str1 = null;
    const str2 = 'banana';
    expect(isAnagram(str1, str2)).toBe(false);
  });
  it('should return false if one string have have one letter only', () => {
    const str1 = 'a';
    const str2 = 'banana';
    expect(isAnagram(str1, str2)).toBe(false);
  });
  it('should return true if both strings are empty', () => {
    const str1 = '';
    const str2 = '';
    expect(isAnagram(str1, str2)).toBe(true);
  });
  it('should return false if both strings are null', () => {
    const str1 = null;
    const str2 = null;
    expect(isAnagram(str1, str2)).toBe(false);
  });
  it('should return true if both strings contains only one identical letter', () => {
    const str1 = 'a';
    const str2 = 'a';
    expect(isAnagram(str1, str2)).toBe(true);
  });
  it('should return false if one string contains only one, different letter', () => {
    const str1 = 'a';
    const str2 = 'b';
    expect(isAnagram(str1, str2)).toBe(false);
  });
  it("should return false if there's a mismatch between string's lengths", () => {
    const str1 = 'banana';
    const str2 = 'banan';
    expect(isAnagram(str1, str2)).toBe(false);
  });
  it('should return false if one string has different letters at the beginning', () => {
    const str1 = 'banana';
    const str2 = 'cbnana';
    expect(isAnagram(str1, str2)).toBe(false);
  });
  it('should return false if one string has different letters at the end', () => {
    const str1 = 'banana';
    const str2 = 'banacb';
    expect(isAnagram(str1, str2)).toBe(false);
  });
  it('should return true if both strings have the same length and contains the same letters', () => {
    const str1 = 'racecar';
    const str2 = 'carrace';
    expect(isAnagram(str1, str2)).toBe(true);
  });
});
