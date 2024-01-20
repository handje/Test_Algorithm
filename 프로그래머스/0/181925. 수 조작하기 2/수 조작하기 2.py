def solution(numLog):
    result=''
    for i in range(1,len(numLog)):
        num=numLog[i]-numLog[i-1]
        
        if(num==1):result+='w'
        elif(num==-1): result+='s'
        elif(num==10): result+='d'
        else: result+='a'
    
    return result