def solution(arr, k):
    answer = []
    new_arr=[]
    
    for i in range(len(arr)):
        if(len(new_arr)>0 and (arr[i] in new_arr)):continue
        new_arr.append(arr[i])
        
    for i in range(k):
        if(i>=len(new_arr)):answer.append(-1)
        else: answer.append(new_arr[i])
        
    return answer