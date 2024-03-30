def solution(a, b, c):
    sum1=a+b+c
    sum2=a*a+b*b+c*c
    sum3=a**3+b**3+c**3
    
    if a==b==c and a==c==b:
        return sum1*sum2*sum3
    elif a!=b!=c and a!=c!=b:
        return sum1
    else:
        return sum1*sum2
