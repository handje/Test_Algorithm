def solution(strArr):
    answer = []
    for string in strArr:
        if(string.find('ad')==-1):answer.append(string)
    return answer