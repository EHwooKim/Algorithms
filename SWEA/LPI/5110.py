class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
class List:
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0

    def printlist(self):
        if self.head is None:
            return
        cur = self.head
        while cur is not None:
            print(cur.data, end=' ')
            cur = cur.next
        print()

    def deletelast(self): 
        if self.head is None: 
            return 
        prev, cur = None, self.head 
        while cur.next is not None:
            prev = cur
            cur = cur.next  
        if prev is None: 
            self.head = self.tail = None
        else:
            prev.next = None
            self.tail = prev
        del cur
        self.size -=1 

    def printlast(self):
        cur = self.tail
        print(cur.data, end=' ')

    def insertlast(self, node):
        if self.head is None:
            self.head = self.tail = node
            self.size += 1
            return
        else:
            self.tail.next = node
            self.tail = node
        self.size += 1

    def listextend(self, arr2):
        prev, cur = None, self.head
        value = arr2.head
        if cur.data > value.data:
            arr2.tail.next = self.head
            self.size += arr2.size
            self.head = arr2.head
        else:
            while cur.next is not None:
                prev = cur
                cur = cur.next
                if cur.data > value.data:
                    self.size += arr2.size
                    prev.next = arr2.head
                    arr2.tail.next = cur
                    return
            self.size += arr2.size
            self.tail.next = arr2.head
            self.tail = arr2.tail
            
T = int(input())            

for t in range(1, T + 1):
    N, M = map(int, input().split())
    mylist = List()
    for value in map(int, input().split()):
        mylist.insertlast(Node(value))
    for _ in range(M - 1):
        mylist2 = List()
        for value in map(int, input().split()):
            mylist2.insertlast(Node(value))
        mylist.listextend(mylist2)
    print('#{}'.format(t), end=' ')
    for _ in range(10):
        mylist.printlast()
        mylist.deletelast()
    print()



#----시이가안초오과아
# T = int(input())

# for t in range(1, T + 1):
#     N, M = map(int, input().split())
#     arr = list(map(int, input().split()))
#     for _ in range(M-1):
#         ex_arr = list(map(int, input().split()))
#         idx = -1
#         for i in range(len(arr)):
#             if arr[i] > ex_arr[0]:
#                 idx = i
#                 break
#         if idx == -1:
#             arr.extend(ex_arr)
#         else:
#             for value in ex_arr[::-1]:
#                 arr.insert(i, value)            
#     print('#{}'.format(t), end = ' ')
#     for i in range(-1, -11, -1):
#         print(arr[i], end=' ')
#     print()
        
        