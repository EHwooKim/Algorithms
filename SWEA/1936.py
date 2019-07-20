#. 가위는 1, 바위는 2, 보는 3으로 표현되며 A와 B가 무엇을 냈는지 입력으로 주어진다.

A, B = input().split()

if A == '1':
    if B == '2':
        print('B')
    else:
        print('A')
elif A == '2':
    if B == '1':
        print('A')
    else:
        print('B')
elif A == '3':
    if B == '1':
        print('B')
    else:
        print('A')

#----------------------
A, B = map(int, input().split())

winner = 'A'

if (A == 1 and B == 3) or (A == 3 and B == 1):
    if B < A :
        winner = 'B'
else:
    if B > A :
        winner = 'B'


print(winner)


    