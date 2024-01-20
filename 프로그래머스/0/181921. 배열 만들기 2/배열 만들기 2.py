def solution(l, r):
    answer = []
    for num in range(l,r+1):
        if(len(set(str(num))-{'5','0'})==0): answer.append(num)
    return answer if(len(answer)>0) else [-1]