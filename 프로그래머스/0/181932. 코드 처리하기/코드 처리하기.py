def solution(code):
    mode=0
    ret=""
    for i in range(len(code)):
        if code[i]=="1":
            mode=1-mode
            continue
        if i%2==mode:
            ret+=code[i]
    return ret if len(ret)>0 else "EMPTY"