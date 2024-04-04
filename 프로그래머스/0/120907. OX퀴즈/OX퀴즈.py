def solution(quiz):
    answer = []
    for q in quiz:
        tmp=q.split()
        if eval(''.join(tmp[:3])) ==int(tmp[-1]):
            answer.append("O")
        else:
            answer.append("X")
    return answer