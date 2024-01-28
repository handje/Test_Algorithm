def solution(strArr):
    strArr=list(map(len,strArr))
    strLen={}
    for arr in strArr:
        if(str(arr) in strLen.keys()): strLen[str(arr)]+=1
        else: strLen[str(arr)]=1
    
    return max(strLen.values())