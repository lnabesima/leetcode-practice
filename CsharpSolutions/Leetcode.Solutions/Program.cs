using System.Diagnostics.CodeAnalysis;

namespace Leetcode.Solutions;

public class Program
{
    public static bool IsAnagram(string? s, string? t)
    {
        // time complexity: O(n)
        // space complexity: O(n)

        // if the strings have different character counts, they can't be anagrams
        if (s == null || t == null) return false;
        if (s.Length != t.Length) return false;


        // count every letter in string `s`
        Dictionary<char, int> charMap = new();
        foreach (var letter in s)
        {
            charMap[letter] = charMap.GetValueOrDefault(letter) + 1;
        }

        foreach (var letter in t)
        {
            if (!charMap.TryGetValue(letter, out int count) || count == 0)
            {
                // if the current value of letter is 0, then s and t can't be an anagrams
                return false;
            }

            charMap[letter]--;
        }

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