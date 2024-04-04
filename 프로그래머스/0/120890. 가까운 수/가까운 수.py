def solution(array, n):
    answer = 0
    sub=100
    for num in sorted(array):
        if abs(num-n)<sub:
            answer=num
            sub=abs(num-n)
            
    return answer