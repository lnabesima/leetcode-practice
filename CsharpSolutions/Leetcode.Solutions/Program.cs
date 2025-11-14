namespace Leetcode.Solutions;

public class Program
{
    public static bool HasDuplicates(int[] numArr)
    {
        HashSet<int> numSet = new();
        foreach (int num in numArr)
        {
            if (!numSet.Add(num))
            {
                return true;
            }
        }

        return false;
    }
    
    static void Main(string[] args)
    {
        int[] myArr = [1, 2, 3, 3];
        Console.WriteLine(HasDuplicates(myArr));
    
    }
}