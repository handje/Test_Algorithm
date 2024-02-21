#프로그래머스
#양의 정수를 이어붙여 만들 수 있는 가장 큰 수

def solution(numbers):
    numStr=list(map(str,numbers))
    
    answer=''.join(sorted(numStr,key=lambda s:s*3,reverse=True))
    
    return str(int(answer))

print(solution([3,30,34,5,9]))

#1.문자열로 변경
#2.0이 포함된 값을 처리하기 위해 값을 3번 반복하여 비교 / 3,30->333,303303303
# + 문자열은 사전 순으로 하기때문에 "333">"303303"
#3. 00 을 해결하기위해 int로 변경 후 다시 출력
