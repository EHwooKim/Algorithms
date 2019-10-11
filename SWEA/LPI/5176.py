def inorder(v):
    global num
    if v > N: return
    inorder(v*2)
    node[v] = num
    num += 1
    inorder(v*2+1)

T = int(input())
for t in range(1, T + 1):
    N = int(input())
    node = [0] * (N + 1)
    num = 1
    inorder(1)
    print('#{} {} {}'.format(t, node[1], node[N//2]))