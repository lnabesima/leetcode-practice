export function isAnagram(
  s: string | null | undefined,
  t: string | null | undefined
): boolean {
  // time complexity: O(n)
  // space complexity: O(n)

  // the loose equality operator is used here to check if the strings
  // are either null or undefined, but whitespace remains a valid value
  if (s == null || t == null) return false;

  // if the strings have different character counts, they can't be anagrams
  if (s.length !== t.length) return false;

  const charMap = new Map<string, number>();
  for (const letter of s) {
    const currentValue = charMap.get(letter) || 0;
    charMap.set(letter, currentValue + 1);
  }

  for (const letter of t) {
    const currentValue = charMap.get(letter) || 0;

    // if the current value of letter is 0, then `s` and `t` can't be an anagrams
    if (currentValue === 0) return false;

    charMap.set(letter, currentValue - 1);
  }

  return true;
}
