def solution(myStr):
    answer = []
    tempStr=''
    
    for alp in myStr:
        if(alp=='a' or alp=='b' or alp=='c'):
            if(len(tempStr)):
                answer.append(tempStr)
                tempStr=''
            continue
        tempStr+=alp
        
    if(tempStr):answer.append(tempStr)    
    return answer if(len(answer)) else ["EMPTY"]