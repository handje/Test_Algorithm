#프로그래머스 타겟넘버
answer = 0
def DFS(i, numbers, target, sumValue):
    global answer
    N = len(numbers)
    if(i== N and target == sumValue):
        answer += 1
        return
    if(i == N):
        return

    DFS(i+1,numbers,target,sumValue+numbers[i])
    DFS(i+1,numbers,target,sumValue-numbers[i])
    
def solution(numbers, target):
    global answer
    DFS(0,numbers,target,0)
    return answer

print(solution([1,1,1,1,1],3))

#인덱스를 증가시키며 +,-경우를 모두 구함