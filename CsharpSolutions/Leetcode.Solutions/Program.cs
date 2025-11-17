using System.Diagnostics.CodeAnalysis;

namespace Leetcode.Solutions;

public class Program
{
    public static bool IsAnagram(string? s, string? t)
    {
        // time complexity: O(n)
        // space complexity: O(n)

        // check if both strings have the same character count or are null
        // if they don't (or are null), they couldn't even be an anagram
        if (s == null || t == null) return false;
        if (s.Length != t.Length) return false;


        // count every letter in string `s`
        Dictionary<char, int> charMap = new();
        foreach (var letter in s)
        {
            charMap[letter] = charMap.GetValueOrDefault(letter) + 1;
        }

        // try to remove every letter in string `t`
        // if the letter doesn't exist in the map, or it's count's 0, return false
        // bc it's not an anagram
        foreach (var letter in t)
        {
            if (!charMap.TryGetValue(letter, out int count) || count == 0)
            {
                return false;
            }

            charMap[letter]--;
        }

        // if all letters are removed, then it's an anagram; we should return `true`
        return true;
    }

    [ExcludeFromCodeCoverage]
    static void Main(string[] args)
    {
        var string1 = "racecar";
        var string2 = "carrace";
        Console.WriteLine(IsAnagram(string1, string2));
    }
}