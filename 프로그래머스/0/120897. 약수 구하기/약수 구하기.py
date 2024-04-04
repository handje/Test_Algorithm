def solution(n):
    answer = []
    num=1
    while num<=n:
        if n%num==0: answer.append(num)
        num+=1
    return answer