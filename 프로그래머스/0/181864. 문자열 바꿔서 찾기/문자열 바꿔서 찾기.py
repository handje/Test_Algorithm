def solution(myString, pat):
    pat=list(pat)
    for i in range(len(pat)):
        if(pat[i]=='A'):pat[i]='B'
        else:pat[i]='A'
    return int((''.join(pat)) in myString)