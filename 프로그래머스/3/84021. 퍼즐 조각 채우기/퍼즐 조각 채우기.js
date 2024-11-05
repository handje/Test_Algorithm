function solution(game_board, table) {
    const n = game_board.length;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    function bfs(board, x, y, value) {
        const queue = [[x, y]];
        const shape = [];
        board[x][y] = 1 - value; // 방문 처리

        while (queue.length) {
            const [cx, cy] = queue.shift();
            shape.push([cx, cy]);

            for (const [dx, dy] of directions) {
                const nx = cx + dx;
                const ny = cy + dy;

                if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === value) {
                    board[nx][ny] = 1 - value; // 방문 처리
                    queue.push([nx, ny]);
                }
            }
        }

        return shape;
    }

    function normalize(shape) {
        shape.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
        const [baseX, baseY] = shape[0];
        return shape.map(([x, y]) => [x - baseX, y - baseY]);
    }

    function rotate(shape) {
        return shape.map(([x, y]) => [y, -x]);
    }

    function getAllRotations(shape) {
        const rotations = [shape];
        for (let i = 1; i < 4; i++) {
            shape = rotate(shape);
            rotations.push(normalize(shape));
        }
        return rotations;
    }

    function extractShapes(board, value) {
        const shapes = [];
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (board[i][j] === value) {
                    const shape = bfs(board, i, j, value);
                    shapes.push(normalize(shape));
                }
            }
        }
        return shapes;
    }

    const emptySpaces = extractShapes(game_board, 0);
    const puzzlePieces = extractShapes(table, 1);

    let totalFilled = 0;

    for (const space of emptySpaces) {
        for (let i = 0; i < puzzlePieces.length; i++) {
            const piece = puzzlePieces[i];
            const rotations = getAllRotations(piece);

            if (rotations.some(rot => JSON.stringify(rot) === JSON.stringify(space))) {
                totalFilled += space.length;
                puzzlePieces.splice(i, 1);
                break;
            }
        }
    }

    return totalFilled;
}
