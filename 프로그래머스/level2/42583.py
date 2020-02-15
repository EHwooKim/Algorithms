from collections import deque

def solution(bridge_length, weight, truck_weights):
    answer = 0
    bridge = deque()
    bridge_sum = 0
    truck_weights = deque(truck_weights)
    while truck_weights or bridge:
        if bridge and bridge[0][1] >= bridge_length:
            bridge_sum -= bridge[0][0]
            bridge.popleft()
        if truck_weights and bridge_sum + truck_weights[0] <= weight:
            bridge_sum += truck_weights[0]
            bridge.append([truck_weights.popleft(), 0])
        if bridge:
            for truck in bridge:
                truck[1] += 1
        answer += 1
    return answer

print(solution(2, 10, [7, 4, 5, 6]))