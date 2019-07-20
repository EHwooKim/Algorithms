# 하나의 자연수를 입력 받아 각 자릿수의 합을 계산하는 프로그램을 작성하라.

number = input()

print(sum([int(number[i]) for i in range(len(number))]))
