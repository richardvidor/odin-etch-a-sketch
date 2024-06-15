let board = document.querySelector('.board');

function setBoardSize(size) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let squares = size * size;

    for (let i = 0; i < squares; i++) {
        let square = document.createElement('div');
        board.insertAdjacentElement('beforeend', square);
        square.style.backgroundColor = 'blue';
    }
}

setBoardSize(64)