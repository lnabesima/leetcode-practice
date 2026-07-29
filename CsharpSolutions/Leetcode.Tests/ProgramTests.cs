using Leetcode.Solutions;

namespace Leetcode.Tests;

public class ProgramTests
{
    public class FunctionalCorrectness
    {
        public static TheoryData<string, int[], int, int[]> TwoSumFunctionalCorrectnessTests()
        {
            return new TheoryData<string, int[], int, int[]>
            {
                { "basic positive numbers", [ 1, 2, 3, 4 ], 7, [2, 3]},
                {"negative numbers", [-1, -2, -3, -4], -3, [0, 1]},
                {"mixed positive and negatives", [-1, 0, 1, 2], -1,  [0, 1] },
                {"zeros", [0, 0, 0, 0], 0, [0, 1]},
                {"repeated numbers (valid pair)", [1, 2, 2, 4], 4,  [ 1, 2 ]},
                {"unsorted array", [2, 5, 1, 3] , 6, [1, 2] },
                {"large integers",  [ 999999998, 2, 1 ], 1000000000,  [ 0, 1 ]},
        };
        }

        [Theory]
        [MemberData(nameof(TwoSumFunctionalCorrectnessTests))]
        public void Solves_For_Valid_Inputs(string _, int[] arr, int target, int[] expectedResult)
        {
            int[] actualResult = Program.TwoSum(arr, target);
            Assert.Equal(expectedResult, actualResult);
        }
    }

    public class ErrorHandling
    {
        public static TheoryData<string, int[], int> TwoSumErrorHandlingTests()
        {
            return new TheoryData<string, int[], int>
            {
                { "empty array", [], 10 },
                { "single element", [1], 10 },
                { "no solution found", [1, 2, 5], 10 },
                { "repeated numbers (no solution)", [1, 2, 2, 4,], 100 }
            };
        }

        [Theory]
        [MemberData(nameof(TwoSumErrorHandlingTests))]
        public void Throws_Error_on_Invalid_Inputs(string _, int[] nums, int target)
        {
            var ex = Assert.Throws<ArgumentException>(() => Program.TwoSum(nums, target));
            Assert.Equal("No two sum solution found.", ex.Message);
        }

    }

    public class Performance
    {
        [Fact]
        public void TwoSum_PerformsEfficiently_WithLargeDataset()
        {
            // Arrange
            int size = 1_000_000;
            int[] nums = Enumerable.Range(0, size).ToArray();
            int target = nums[size - 2] + nums[size - 1];
            int[] expectedResult = [size - 2, size - 1];

            // Act
            int[] actualResult = Program.TwoSum(nums, target);
            
            // Assert
            Assert.Equal(expectedResult, actualResult);
        }
    }
}