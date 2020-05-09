def dis_calc(p1, p2):
    return abs(p1[0]-p2[0]) + abs(p1[1]-p2[1])

def near_finger(phone, finger, number):
    from_left = dis_calc(phone[number], phone[finger[1]])
    from_right = dis_calc(phone[number], phone[finger[2]])
    if from_left == from_right:
        return finger[0]
    elif from_left < from_right:
        return 1
    else:
        return 2

def solution(numbers, hand):
    phone = {1: [0, 3],2: [1, 3],3: [2, 3],4: [0, 2],5: [1, 2],6: [2, 2],7: [0, 1],8: [1, 1],9: [2, 1],'*': [0, 0],0: [1, 0],'#': [2, 0]}
    finger = [1 if hand == 'left' else 2,'*', '#'] # hand, left, right
    finger_str = '_LR'
    answer = ''
    for number in numbers:
        if number in [1, 4, 7]:
            finger[1] = number
            answer += finger_str[1]
        elif number in [3, 6, 9]:
            finger[2] = number
            answer += finger_str[2]
        else:
            f = near_finger(phone, finger, number)
            finger[f] = number
            answer += finger_str[f]
    return answer

print(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right')) # 'LRLLLRLLRRL
