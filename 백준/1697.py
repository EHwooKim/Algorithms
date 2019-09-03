def catch(start, end, count):
    global result
    if count >= result:
        return
    if start == end:
        result = count
        return
    catch(start+1, end, count + 1)
    catch(start*2, end, count + 1)
    catch(start-1, end, count + 1)

N, K = map(int, input().split())
result = K-N
catch(N, K, 0)
print(result)

