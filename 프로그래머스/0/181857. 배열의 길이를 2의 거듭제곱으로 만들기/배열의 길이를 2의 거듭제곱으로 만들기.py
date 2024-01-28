def solution(arr):
    new_len=1
    while True:
        if(new_len>=len(arr)):
            arr+=([0]*(new_len-len(arr)))
            break
        new_len*=2   
    return arr