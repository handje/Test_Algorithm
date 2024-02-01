def solution(order):
    answer = 0
    
    for coffee in order:
        if("americano" in coffee or coffee=="anything"): answer+=4500
        else:answer+=5000
        
    return answer