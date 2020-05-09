def mkdir(directory, path):
    directory.append(path)
    return directory
    
def cp(directory, copy, path):
    copy_root = copy.split('/')
    copy_root = '/' + copy_root[-1]
    copy_root = copy.rstrip(copy_root)
    arr = []
    for d in directory:
        if d.startswith(copy):
            arr.append(d.lstrip(copy_root))
    for t in arr:
        directory.append(path+ t)
    return directory

def rm(directory, path):
    arr = []
    for d in directory:
        if d.startswith(path):
            arr.append(d)
    for t in arr:
        directory.remove(t)
    return directory
    
def solution(directory, command):
    for c in command:
        c = c.split(' ')
        if c[0] == 'mkdir':
            directory = mkdir(directory, c[1])
        elif c[0] == 'cp':
            directory = cp(directory, c[1], c[2])
        elif c[0] =='rm':
            directory = rm(directory, c[1])
    return directory

print(solution([
"/",
"/hello",
"/hello/tmp",
"/root",
"/root/abcd",
"/root/abcd/etc",
"/root/abcd/hello"
],
[
"mkdir /root/tmp",
"cp /hello /root/tmp", 
"rm /hello"
]
))

# print(solution(
# [
# "/"
# ],
# [
# "mkdir /a",
# "mkdir /a/b",
# "mkdir /a/b/c",
# "cp /a/b /",
# "rm /a/b/c"
# ]
# ))