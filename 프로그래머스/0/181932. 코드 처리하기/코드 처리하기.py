def solution(code):
    mode=0
    ret=''
    
    for idx in range(0,len(code)):
        if(code[idx]=="1"):
            mode=int(not bool(mode))
            continue
        if(mode==0):
            if(idx%2==0): ret+=code[idx]
        else:
            if(idx%2==1): ret+=code[idx]

    return ret if(len(ret)) else "EMPTY"