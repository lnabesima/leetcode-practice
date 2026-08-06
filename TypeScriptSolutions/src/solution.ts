function groupAnagrams(strs: string[]) {
  const solution: Map<string, string[]> = new Map();
  const LETTER_CODE_A: number = 97;

  strs.forEach(originalString => {

    const letterCounter = Array(26).fill(0);

    for (const letter of originalString) {
      const letterCode = letter.charCodeAt(0)
      letterCounter[letterCode - LETTER_CODE_A]++
    };
    const letterCounterString = letterCounter.toString();
    const stringExistsInMap: boolean = solution.has(letterCounterString)

    if (!stringExistsInMap) {
      solution.set(letterCounterString, [originalString])
      return;
    }
    solution.get(letterCounterString)?.push(originalString)
  })

  return Array.from(solution.values())
};

console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]))