T = int(input())

for t in range(1, T + 1):
    string = input()

    for i in range(30):
        if string[:i+1] == string[i+1:2*(i+1)]:
            print('#{} {}'.format(t, i+1))
            break