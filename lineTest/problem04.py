def solution(snapshots, transactions):
    bank = {}
    log = [1] * 100000
    for snapshot in snapshots:
        bank[snapshot[0]] = snapshot[1]

    for transaction in transactions:
        id, type, name, money = transaction
        if log[int(id)]:
            if type == 'SAVE':
                try:
                    bank[name] = str(int(money) + int(bank[name]))
                except:
                    bank[name] = money
            else:
                bank[name] = str(int(bank[name]) - int(money))
            
            log[int(transaction[0])] = 0

    result = []
    for key, value in bank.items():
        result.append([key,value])
        result.sort(key=lambda x: x[0])
    return result

print(solution([
    ["ACCOUNT2", "150"],
    ["ACCOUNT1", "100"], 
    ["ACCOUNT10", "100"], 
    ["ACCOUNT21", "100"], 
  
],[
  ["1", "SAVE", "ACCOUNT2", "100"],
  ["2", "WITHDRAW", "ACCOUNT1", "50"], 
  ["1", "SAVE", "ACCOUNT2", "100"], 
  ["4", "SAVE", "ACCOUNT3", "500"], 
  ["3", "WITHDRAW", "ACCOUNT2", "30"],
  ["5", "SAVE", "ACCOUNT100", "30"],
  ["6", "WITHDRAW", "ACCOUNT100", "20"],
]))
