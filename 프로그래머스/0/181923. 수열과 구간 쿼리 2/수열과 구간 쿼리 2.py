def solution(arr, queries):
    result=[]
    
    for query in queries:
        min=1000001
        for i in range(query[0],query[1]+1):
            if(arr[i]>query[2] and min>arr[i]):min=arr[i]        
        
        if(min==1000001): result.append(-1)
        else: result.append(min)
        
    return result