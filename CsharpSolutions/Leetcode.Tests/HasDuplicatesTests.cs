using Leetcode.Solutions;

namespace Leetcode.Tests;

public class HasDuplicatesTests
{
    [Theory]
    [InlineData(new int[] { 1, 2, 3, 3 }, true)]
    [InlineData(new int[] { 1, 2, 3, 4 }, false)]
    [InlineData(new int[] { 1, 1, 1, 3, 3, 4, 3, 2, 4, 2 }, true)]
    [InlineData(new int[] { }, false)]
    [InlineData(new int[] { 1 }, false)]
    [InlineData(new int[] { 5, 4, 3, 2, 1 }, false)]
    [InlineData(new int[] { -1, -2, -3, -1 }, true)]
    [InlineData(new int[] { 0, 1, 2, 0 }, true)]
    [InlineData(new int[] { 1, 1, 2, 3, 4 }, true)]
    [InlineData(new int[] { 1, 2, 3, 4, 4 }, true)]
    public void HasDuplicates_MultipleData_ReturnsExpected(int[] inputArray, bool expectedResult)
    {
        var actualResult = Program.HasDuplicates(inputArray);

        Assert.Equal(expectedResult, actualResult);
    }
}