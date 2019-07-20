''' #++++
    +#+++
    ++#++
    +++#+
    ++++#'''

for i in range(5):
    for j in range(5):
        if i == j:
            print('#', end = '')
        else:    
            print('+', end = '')
    print()

# #-------

for i in range(5):
    line_list = list('+++++')
    line_list[i] ='#'
    print(''.join(line_list))