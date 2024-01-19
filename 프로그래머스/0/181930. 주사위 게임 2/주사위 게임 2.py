def solution(a, b, c):
    
    if(a==b and a==c):
        return (a+b+c)*(a*a+b*b+c*c)*(a**3+b**3+c**3)
    if(a==b or a==c or b==c):
        return (a+b+c)*(a*a+b*b+c*c)
        
    return a+b+c