# 함수 만드는거 연습
def change_day():
    day = input()
    year = day[0:4]
    month = day[4:6]
    date = day[6:]
    if int(month) in [1, 3, 5, 7, 8, 10, 12]:
        return f'{year}/{month}/{date}' if int(date) in range(1, 32) else -1
    elif int(month) in [4, 6, 9, 11]:
        return f'{year}/{month}/{date}' if int(date) in range(1, 31) else -1
    elif int(month) == 2:
        return f'{year}/{month}/{date}' if int(date) in range(1, 29) else -1
    else:
        return -1
             
def print_day():
    count = int(input())
    for i in range(1, count+1):
        result = change_day()
        
        print(f'#{i} {result}')


print_day()
    
#-------------------------------
# count = int(input())

# for i in range(1, count+1):
# day = input()
# year = day[0:4]
# month = day[4:6]
# date = day[6:]
#     if int(month) in [1, 3, 5, 7, 8, 10, 12]:
#         if int(date) in range(1, 32):
#             print(f'#{i} {year}/{month}/{date}')
#         else:
#             print(f'#{i} -1')
#     elif int(month) == 2:
#         if int(date) in range(1,29):
#             print(f'#{i} {year}/{month}/{date}')
#         else:
#             print(f'#{i} -1')
#     elif int(month) in [4, 6, 9, 11]:
#         if int(date) in range(1, 31):
#             print(f'#{i} {year}/{month}/{date}')
#         else:
#             print(f'#{i} -1')
#     else:
#         print(f'#{i} -1')


