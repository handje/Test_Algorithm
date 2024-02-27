#프로그래머스 단어변환
from collections import deque

def solution(begin, target, words):
    
    if target not in words : 
        return  0
    
    return bfs(begin, target, words)


def bfs(begin, target, words):
    queue = deque()
    queue.append([begin, 0])
    
    while queue:
        now, answer = queue.popleft()
        
        if answer>len(words): return 0;
        if now == target:
            return answer

        for word in words:
            count = 0
            for i in range(len(now)): 
                if now[i] != word[i]: 
                    count += 1
                    
            if count == 1: 
                queue.append([word, answer+1])

print(solution('hit','cog',["hot", "dot", "dog", "lot", "log", "cog"]))
#최소값을 찾는것=bfs사용
#한글자씩만 바꿀 수 있음