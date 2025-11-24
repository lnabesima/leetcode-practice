using Leetcode.Solutions;

namespace Leetcode.Tests;

public class ProgramTests
{
    [Theory]
    [InlineData("", "banana", false)]
    [InlineData("a", "banana", false)]
    [InlineData(null, "banana", false)]
    [InlineData("", "", true)]
    [InlineData(null, null, false)]
    [InlineData("a", "a", true)]
    [InlineData("a", "b", false)]
    [InlineData("banana", "banan", false)]
    [InlineData("banana", "cbnana", false)]
    [InlineData("banana", "banacb", false)]
    [InlineData("racecar", "carrace", true)]
    public void ValidAnagram_MultipleData_ReturnsExpected(string? s, string? t, bool expectedResult)
    {
        var actualResult = Program.IsAnagram(s, t);

        Assert.Equal(expectedResult, actualResult);
    }
}