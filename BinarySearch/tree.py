# 4 7
# 20 15 10 17
# 15

# 5 20
# 4 42 40 26 46
# 36

#백준2805 _ 이진탐색을 사용하지않으면 시간초과 오류 발생
import sys

n, m = map(int, sys.stdin.readline().split())
trees = list(map(int, sys.stdin.readline().split()))

start, end = 1, max(trees) 

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