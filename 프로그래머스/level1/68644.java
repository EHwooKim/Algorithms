import java.util.Arrays;
import java.util.HashSet;

class Solution {
    public Integer[] solution(int[] numbers) {
        HashSet<Integer> set = new HashSet<Integer>();
        
        for (int i = 0; i < numbers.length; i++) {
            for (int j = i + 1; j < numbers.length; j++) {
                set.add(numbers[i] + numbers[j]);
            }
        }
        Integer[] result = set.toArray(new Integer[set.size()]);
        Arrays.sort(result);
        return result;
    }
}