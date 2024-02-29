def solution(tickets):

    routes = dict()

    for (start, end) in tickets:
        routes[start] = routes.get(start, []) + [end]  
        
   
    for r in routes.keys():
        routes[r].sort(reverse=True)

    way = ["ICN"]
    path = []

    while way:
        top = way[-1]
        if top not in routes or len(routes[top]) == 0:
            path.append(way.pop())
        else:
            way.append(routes[top][-1])
            routes[top] = routes[top][:-1]
    
    answer = path[::-1]
    return answer