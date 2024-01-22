def solution(my_string, queries):
    answer=list(my_string)

    for query in queries:
        answer=answer[0:query[0]]+list(reversed(answer[query[0]:query[1]+1]))+answer[query[1]+1:]
        
    return ''.join(answer)