

    //----VERSION PIRATE----
$(document).ready(function() {
    const puzzleContainer = $('#puzzleContainer');
    let pieces = [
        { id: 1, img: 'pirate/1.png' },
        { id: 2, img: 'pirate/2.png' },
        { id: 3, img: 'pirate/3.png' },
        { id: 4, img: 'pirate/4.png' },
        { id: 5, img: 'pirate/5.png' },
        { id: 6, img: 'pirate/6.png' },
        { id: 7, img: 'pirate/7.png' },
        { id: 8, img: 'pirate/8.png' },
        { id: 9, empty: true } // Case vide
    ];
     
    //----VERSION JAPAN----
    // $(document).ready(function() {
    //     const puzzleContainer = $('#puzzleContainer');
    //     let pieces = [
    //         { id: 1, img: 'japan/1.png' },
    //         { id: 2, img: 'japan/2.png' },
    //         { id: 3, img: 'japan/3.png' },
    //         { id: 4, img: 'japan/4.png' },
    //         { id: 5, img: 'japan/5.png' },
    //         { id: 6, img: 'japan/6.png' },
    //         { id: 7, img: 'japan/7.png' },
    //         { id: 8, img: 'japan/8.png' },
    //         { id: 9, empty: true } // Case vide
    //     ];

    //----VERSION TAQUIN----
    // $(document).ready(function() {
    //     const puzzleContainer = $('#puzzleContainer');
    //     let pieces = [
    //         { id: 1, img: 'pirate/1.png' },
    //         { id: 2, img: 'pirate/2.png' },
    //         { id: 3, img: 'pirate/3.png' },
    //         { id: 4, img: 'pirate/4.png' },
    //         { id: 5, img: 'pirate/5.png' },
    //         { id: 6, img: 'pirate/6.png' },
    //         { id: 7, img: 'pirate/7.png' },
    //         { id: 8, img: 'pirate/8.png' },
    //         { id: 9, empty: true } // Case vide
    //     ];

    
    function initializePuzzle() {
        shufflePieces();
        renderPuzzle();
        makeDraggable();
        $('#message').text('');
        $('#restartButton').hide();
    }

    function shufflePieces() {
        pieces.sort(() => Math.random() - 0.5);
    }

    function renderPuzzle() {
        puzzleContainer.empty();
        pieces.forEach(piece => {
            const pieceElement = $('<div></div>')
                .addClass('piece')
                .css('background-image', piece.img ? `url(${piece.img})` : 'none')
                .data('id', piece.id);
            if (piece.empty) {
                pieceElement.addClass('empty').css('background-image', 'none');
            }
            puzzleContainer.append(pieceElement);
        });
    }

    function makeDraggable() {
        $(".piece:not(.empty)").draggable({
            revert: "invalid",
            start: function() {
                $(this).css("z-index", 100);
            },
            stop: function() {
                $(this).css("z-index", "");
            }
        });

        $(".piece.empty").droppable({
            accept: ".piece:not(.empty)",
            drop: function(event, ui) {
                const emptyPiece = $(this);
                const draggedPiece = ui.draggable;

                const emptyIndex = pieces.findIndex(piece => piece.empty);
                const draggedIndex = pieces.findIndex(piece => piece.id === draggedPiece.data('id'));

                // Swap the empty piece and the dragged piece
                [pieces[emptyIndex], pieces[draggedIndex]] = [pieces[draggedIndex], pieces[emptyIndex]];

                renderPuzzle();
                makeDraggable();

                checkWin(); // Vérifier si le jeu est gagné
            }
        });
    }

    function checkWin() {
        const isWin = pieces.every((piece, index) => piece.empty || piece.id === index + 1);
        if (isWin) {
            $('#message').text('Vous avez gagné !').css('color', 'blue');
            $('#restartButton').show();
        }
    }

    $('#shuffleButton').click(initializePuzzle);
    $('#restartButton').click(initializePuzzle);

    initializePuzzle();
});
