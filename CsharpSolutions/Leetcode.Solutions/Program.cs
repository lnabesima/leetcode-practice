using System.Diagnostics.CodeAnalysis;

namespace Leetcode.Solutions;

public class Program
{
    public static int[] TwoSum(int[] nums, int target)
    {
        Dictionary<int, int> seenNumbersMap = new(nums.Length);

        for (int i = 0; i < nums.Length; i++)
        {
            int complement = target - nums[i];

            if (seenNumbersMap.TryGetValue(complement, out int complementIndex))
            {
                return [complementIndex, i];
            }

            seenNumbersMap.TryAdd(nums[i], i);
        }

        throw new ArgumentException("No two sum solution found.");
    }

    [ExcludeFromCodeCoverage]
    static void Main(string[] args)
    {
        int[] arr = [1, 1, 3, 4];
        const int target = 4;

        Console.WriteLine(TwoSum(arr, target));
    }
}