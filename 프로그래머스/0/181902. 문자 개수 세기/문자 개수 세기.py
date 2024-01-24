def solution(my_string):
    answer = []
    for i in range(ord('A'),ord('z')+1):
        if(not chr(i).isalpha()): continue
        answer.append(my_string.count(chr(i)))
    return answer