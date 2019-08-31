M, N = map(int, input().split()) 
N_arr = [0]
M_arr = [0]
W = H = 0
for _ in range(int(input())):
    tp, num = map(int, input().split())
    if tp == 0:
        N_arr.append(num)
    else:
        M_arr.append(num)
N_arr.append(N); N_arr.sort()
M_arr.append(M); M_arr.sort()
for i in range(len(N_arr)-1):
    h = N_arr[i+1]-N_arr[i]
    H = h if h > H else H
for i in range(len(M_arr)-1):
    w = M_arr[i+1]-M_arr[i]
    W = w if w > W else W

print(H*W)