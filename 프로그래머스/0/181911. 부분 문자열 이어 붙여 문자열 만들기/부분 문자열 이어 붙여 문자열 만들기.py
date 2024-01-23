def solution(my_strings, parts):
    answer = ''
    for i in range(0,len(parts)):
        answer+=str(my_strings[i][parts[i][0]:parts[i][1]+1])
    return answer