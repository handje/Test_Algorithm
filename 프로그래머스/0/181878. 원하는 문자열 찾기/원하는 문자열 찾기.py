def solution(myString, pat):
    myString=myString.upper()
    pat=pat.upper()
    return int(pat in myString)