
$(document).ready(function() {
    let puzzleContainer = $('#puzzleContainer');
    let pieces = [
        {id: 1, img: 'taquin/1.png'},
        {id: 2, img: 'taquin/2.png'},
        {id: 3, img: 'taquin/3.png'},
        {id: 4, img: 'taquin/4.png'},
        {id: 5, img: 'taquin/5.png'},
        {id: 6, img: 'taquin/6.png'},
        {id: 7, img: 'taquin/7.png'},
        {id: 8, img: 'taquin/8.png'},
        {id: 9, empty: true} // Case vide
    ];

    function initializePuzzle() {
        pieces = pieces.sort(() => Math.random() - 0.5);
        puzzleContainer.empty();
        pieces.forEach(piece => {
            let pieceElement = $('<div></div>')
                .addClass('piece')
                .css('background-image', piece.img ? `url(${piece.img})` : 'none')
                .data('id', piece.id);
            if (piece.empty) {
                pieceElement.addClass('empty');
            }
            puzzleContainer.append(pieceElement);
        });
        addClickEvents();
    }

    function addClickEvents() {
        $('.piece').click(function() {
            let emptyIndex = pieces.findIndex(piece => piece.empty);
            let pieceIndex = $(this).index();
            if ([pieceIndex - 1, pieceIndex + 1, pieceIndex - 3, pieceIndex + 3].includes(emptyIndex)) {
                // Échanger la pièce cliquée avec la pièce vide
                pieces[emptyIndex] = pieces[pieceIndex];
                pieces[pieceIndex] = {id: 9, empty: true};
                initializePuzzle();
                checkWin();
            }
        });
    }

    function checkWin() {
        let isWin = pieces.every((piece, index) => piece.id === index + 1 || piece.empty);
        if (isWin) {
            $('.piece').off('click'); // Désactiver les clics
            $('#message').text('Vous avez gagné').css('color', 'green');
            $('#restartButton').show();
        }
    }

    $('#restartButton').click(function() {
        $('#message').empty();
        $(this).hide();
        initializePuzzle();
    });

    initializePuzzle();
});
