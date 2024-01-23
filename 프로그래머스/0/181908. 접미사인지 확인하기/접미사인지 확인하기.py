def solution(my_string, is_suffix):
    answer=[]
    for i in range(len(my_string)):
        answer.append(my_string[i:])
    return int(is_suffix in answer)