import sys

n, m = map(int, sys.stdin.readline().split())
trees = list(map(int, sys.stdin.readline().split()))

start, end = 1, max(trees)  # 초기 시작과 끝 값 설정

while start <= end:
    treeSum = 0
    mid = (start + end) // 2 

    for t in trees:
        if t > mid:
            treeSum += t - mid 
    
    if treeSum < m:  
        end = mid - 1  
    else:  
        start = mid + 1  

print(end)