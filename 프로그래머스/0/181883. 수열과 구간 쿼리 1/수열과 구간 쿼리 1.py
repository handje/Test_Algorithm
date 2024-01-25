def solution(arr, queries):   
    for s,e in queries:
        arr=arr[:s]+list(map(lambda x:x+1,arr[s:e+1]))+arr[e+1:]
    return arr