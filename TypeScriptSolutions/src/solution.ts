function groupAnagrams(strs: string[]) {
  const solution: Map<string, string[]> = new Map()

  // get the string
  strs.forEach(originalString => {
    
    // sort the string
    const sortedString = originalString.split("").sort((a, b) => a.localeCompare(b)).join("");

    // check if the original string have a entry in the map
    const entryExists = solution.has(sortedString);

    // if that entry exist, add to the existing array of values
    if (entryExists) {
      const values = solution.get(sortedString);
      solution.set(sortedString, [...values!, originalString]);
      return;
    }

    // if it doesn't exist, create a new entry with an array of values
    solution.set(sortedString, [originalString])
  })

  // return the values of the map
  return Array.from(solution.values())
};

console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]))