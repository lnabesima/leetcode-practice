using System.Diagnostics.CodeAnalysis;

namespace Leetcode.Solutions;

public class Program
{
    public static int[] TwoSum(int[] nums, int target)
    {
        Dictionary<int, int> seenNumbersMap = new();

        for (int i = 0; i < nums.Length; i++)
        {
            int complement = target - nums[i];

            if (seenNumbersMap.TryGetValue(complement, out int complementIndex))
            {
                return [complementIndex, i];
            }

            seenNumbersMap.Add(nums[i], i);
        }

        throw new Exception("No two sum solution found.");
    }

    [ExcludeFromCodeCoverage]
    static void Main(string[] args)
    {
        int[] arr = [1, 2, 3, 4];
        const int target = 3;

        Console.WriteLine(TwoSum(arr, target));
    }
}