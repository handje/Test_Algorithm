def solution(array):
    answer = 0
    array=list(map(str,array))
    for nums in array:
        for n in nums:
            if n=="7":
                answer+=1
    return answer