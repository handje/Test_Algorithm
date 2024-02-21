#프로그래머스
#n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값을 구해라

def solution(citations):
    citations.sort(reverse=True)
    for i in range(len(citations)):
        if(citations[i]<i+1):
            return i
    
    return len(citations)

print(solution([3,0,6,1,5]))
print(solution([3,4]))
print(solution([1,10,11]))

# h-index 산출방법
# 1. 인용 횟수가 많은 순으로 정렬
# 2. index+1(몇번째)보다 인용횟수(해당값)가 낮아지는 값(index+1) 바로 전 값(index)이 h-index가 된다.
