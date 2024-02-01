def solution(picture, k):
    answer = []
    for pic in picture:
        answer+=[(''.join(list(map(lambda x:x*k,pic))))]*k
    return answer