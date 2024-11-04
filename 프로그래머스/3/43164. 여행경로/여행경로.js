function solution(tickets) {
  tickets.sort(); // 티켓을 사전순으로 정렬하여 탐색 시 우선순위를 유지
  const route = [];

  function dfs(current) {
    if (route.length === tickets.length) {
      route.push(current);
      return true;
    }

    for (let i = 0; i < tickets.length; i++) {
      if (!tickets[i].used && tickets[i][0] === current) {
        tickets[i].used = true;
        route.push(current);
        
        if (dfs(tickets[i][1])) return true;

        route.pop();
        tickets[i].used = false;
      }
    }
    return false;
  }

  dfs("ICN");
  return route;
}
