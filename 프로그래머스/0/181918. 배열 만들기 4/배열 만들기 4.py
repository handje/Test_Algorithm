def solution(arr):
    i=0
    stk=[]
    while i<len(arr):
        if len(stk)==0 or stk[-1]<arr[i]:
            stk.append(arr[i])
            i+=1
            continue
        stk.pop()
    return stk