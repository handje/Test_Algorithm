def solution(arr):
    if(2 not in arr): return [-1]
    start=arr.index(2)
    end=0
    
    for i in range(start,len(arr)):
        if(arr[i]==2 and i>end):end=i
        
    return arr[start:end+1]