import java.util.Arrays;
import java.util.ArrayList;

class Solution {
    public ArrayList<Integer> solution(int[] answers) {
        int[][] students = {{}, {1, 2, 3, 4, 5}, {2, 1, 2, 3, 2, 4, 2, 5}, {3, 3, 1, 1, 2, 2, 4, 4, 5, 5}};
        int[] studentsLength = {0, 5, 8, 10};
        int[] points = {0, 0, 0, 0};
        ArrayList<Integer> result = new ArrayList<Integer>();
        
        for (int i = 1; i < 4; i++) {
            for (int j = 0; j < answers.length; j++) {
                if (answers[j] == students[i][j % studentsLength[i]]) {
                    points[i] += 1;
                }
            }            
        }
        int maxValue = -1;
        for (int i = 0; i < 4; i++) {
            if (points[i] > maxValue) {
                maxValue = points[i];
            }
        }
        
        for (int i = 0; i < 4; i++) {
            if (points[i] == maxValue) {
                result.add(i);
            }
        }
        return result;
    }
}