def solution(arr, queries):
    answer = []
    for q in queries:
        res=1000001
        for a in arr[q[0]:q[1]+1]:
            if a>q[2] and res>a:
                res=a
        if res==1000001:
            res=-1
        answer.append(res)
    return answer