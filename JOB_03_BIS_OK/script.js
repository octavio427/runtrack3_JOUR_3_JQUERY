
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

    //----VERSION PIRATE----
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

    $(document).ready(function() {
        const puzzleContainer = $('#puzzleContainer');
        const previewImage = $('#previewImage'); // Sélecteur pour l'image de la miniature
        const themes = {
            pirate: {
                pieces: [
                    { id: 1, img: 'pirate/1.png' },
                    { id: 2, img: 'pirate/2.png' },
                    { id: 3, img: 'pirate/3.png' },
                    { id: 4, img: 'pirate/4.png' },
                    { id: 5, img: 'pirate/5.png' },
                    { id: 6, img: 'pirate/6.png' },
                    { id: 7, img: 'pirate/7.png' },
                    { id: 8, img: 'pirate/8.png' },
                    { id: 9, empty: true }
                ],
                preview: 'pirate/miniature.png'
            },

            japan: {
                pieces: [
                    { id: 1, img: 'japan/1.png' },
                    { id: 2, img: 'japan/2.png' },
                    { id: 3, img: 'japan/3.png' },
                    { id: 4, img: 'japan/4.png' },
                    { id: 5, img: 'japan/5.png' },
                    { id: 6, img: 'japan/6.png' },
                    { id: 7, img: 'japan/7.png' },
                    { id: 8, img: 'japan/8.png' },
                    { id: 9, empty: true }
                ],
                preview: 'japan/miniature.png'
            },
            
            chat: {
                pieces: [
                    { id: 1, img: 'chat/1.png' },
                    { id: 2, img: 'chat/2.png' },
                    { id: 3, img: 'chat/3.png' },
                    { id: 4, img: 'chat/4.png' },
                    { id: 5, img: 'chat/5.png' },
                    { id: 6, img: 'chat/6.png' },
                    { id: 7, img: 'chat/7.png' },
                    { id: 8, img: 'chat/8.png' },
                    { id: 9, empty: true }
                ],
                preview: 'chat/miniature.png'
            },

            guerriere: { 
                pieces: [
                    { id: 1, img: 'guerriere/1.png' },
                    { id: 2, img: 'guerriere/2.png' },
                    { id: 3, img: 'guerriere/3.png' },
                    { id: 4, img: 'guerriere/4.png' },
                    { id: 5, img: 'guerriere/5.png' },
                    { id: 6, img: 'guerriere/6.png' },
                    { id: 7, img: 'guerriere/7.png' },
                    { id: 8, img: 'guerriere/8.png' },
                    { id: 9, empty: true }
                ],
                    preview: 'guerriere/miniature.png'
            },

            taquin: {
                pieces: [
                    { id: 1, img: 'taquin/1.png' },
                    { id: 2, img: 'taquin/2.png' },
                    { id: 3, img: 'taquin/3.png' },
                    { id: 4, img: 'taquin/4.png' },
                    { id: 5, img: 'taquin/5.png' },
                    { id: 6, img: 'taquin/6.png' },
                    { id: 7, img: 'taquin/7.png' },
                    { id: 8, img: 'taquin/8.png' },
                    { id: 9, empty: true }
                ],   
                    preview: 'taquin/miniature.png'
            }
        };
 
        let pieces = themes.pirate.pieces; // Par défaut, on démarre avec le thème "pirate"

        function initializePuzzle() {
            shufflePieces();
            renderPuzzle();
            enableDraggableAndDroppable();
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
                    pieceElement.addClass('empty');
                }
                puzzleContainer.append(pieceElement);
            });
        }

        function getAdjacentIndices(emptyIndex) {
            const adjacentIndices = [];
            const gridSize = 3;
            const top = emptyIndex - gridSize;
            const bottom = emptyIndex + gridSize;
            const left = (emptyIndex % gridSize !== 0) ? emptyIndex - 1 : -1;
            const right = (emptyIndex % gridSize !== gridSize - 1) ? emptyIndex + 1 : -1;

            if (top >= 0) adjacentIndices.push(top);
            if (bottom < pieces.length) adjacentIndices.push(bottom);
            if (left >= 0) adjacentIndices.push(left);
            if (right >= 0) adjacentIndices.push(right);
            return adjacentIndices;
        }

        function enableDraggableAndDroppable() {
            const emptyIndex = pieces.findIndex(piece => piece.empty);
            const adjacentIndices = getAdjacentIndices(emptyIndex);

            // Désactiver draggable pour toutes les pièces
            $(".piece").each(function() {
                if ($(this).data("ui-draggable")) {
                    $(this).draggable("destroy");
                }
            });

            // Activer draggable uniquement pour les pièces adjacentes
            adjacentIndices.forEach(index => {
                if (!pieces[index].empty) {
                    $(`.piece`).eq(index).draggable({
                        revert: "invalid",
                        start: function() {
                            $(this).css("z-index", 100);
                        },
                        stop: function() {
                            $(this).css("z-index", "");
                        }
                    });
                }
            });

            // Désactiver et activer droppable pour la case vide
            $(".empty").each(function() {
                if ($(this).data("ui-droppable")) {
                    $(this).droppable("destroy");
                }
            }).droppable({
                accept: ".piece:not(.empty)",
                drop: function(event, ui) {
                    const draggedPiece = ui.draggable;
                    const draggedIndex = pieces.findIndex(piece => piece.id === draggedPiece.data('id'));
                    const emptyIndex = pieces.findIndex(piece => piece.empty);

                    // Vérifier si le morceau glissé est adjacent à la case vide
                    if (adjacentIndices.includes(draggedIndex)) {
                        // Échanger la case vide et la case glissée
                        [pieces[emptyIndex], pieces[draggedIndex]] = [pieces[draggedIndex], pieces[emptyIndex]];

                        renderPuzzle();
                        enableDraggableAndDroppable(); // Réactiver les draggables après chaque mouvement
                        checkWin();
                    }
                }
            });
        }

        function checkWin() {
            const isWin = pieces.every((piece, index) => piece.empty || piece.id === index + 1);
            if (isWin) {
                $('.piece').draggable("disable");
                $('#message').text('Vous avez gagné !').css('color', 'green');
                $('#restartButton').show();
            }
        }
 
        // Event pour changer de thème
        // $('#themeSelect').change(function() {
        //     const selectedTheme = $(this).val();
        //     pieces = themes[selectedTheme]; // Changer le thème
        //     previewImage.attr("src", themes[selectedTheme][0].img); // Mettre à jour la source de la miniature
        //     initializePuzzle(); // Réinitialiser le puzzle avec le nouveau thème
        // });

        // Event pour changer de thème
        $('#themeSelect').change(function() {
            const selectedTheme = $(this).val();
            pieces = themes[selectedTheme].pieces;
            previewImage.attr("src", themes[selectedTheme].preview); // Mise à jour de la miniature
            initializePuzzle();
        });
        $('#shuffleButton').click(initializePuzzle);
        $('#restartButton').click(initializePuzzle);

        initializePuzzle();
    });


//     Explications globales :

// Versions du puzzle : Le code inclut trois versions (TAQUIN, PIRATE, JAPAN) qui se distinguent uniquement par 
// les images utilisées. En sélectionnant différentes images dans pieces, on peut modifier l’apparence du puzzle.

// Grille de puzzle : Chaque puzzle est une grille de 3x3 cases, et une seule case est vide. Le joueur doit 
// déplacer les pièces en les glissant pour reconstruire l'image d'origine.

// Initialisation des éléments
// Variables globales et pieces :

// La variable puzzleContainer contient l'élément HTML où les pièces du puzzle sont placées.
// pieces est un tableau contenant les objets des pièces. Chaque objet a un id, un chemin img pour l'image, 
// et pour la case vide un booléen empty: true.
// Fonction initializePuzzle :

// Mélange les pièces avec shufflePieces.
// Affiche le puzzle avec renderPuzzle.
// Active les fonctionnalités glisser-déposer avec enableDraggableAndDroppable.
// Réinitialise les messages et cache le bouton Recommencer.
// Fonctionnalités de base
// Mélange des pièces : shufflePieces()
// Mélange les pièces de façon aléatoire en utilisant sort avec une fonction de comparaison aléatoire. Cela 
// simule un mélange pour les positions de chaque pièce.

// Affichage du puzzle : renderPuzzle()

// Vide le conteneur du puzzle, puis ajoute chaque pièce en tant qu'élément <div>.
// Si une pièce a une image, elle est appliquée comme background-image dans le style CSS.
// La classe empty est appliquée à la pièce vide, permettant d’identifier la case vide pour la rendre non 
// glissable et différente visuellement.
// Déterminer les indices adjacents : getAdjacentIndices(emptyIndex)

// Cette fonction calcule les indices des pièces adjacentes à la case vide pour permettre uniquement aux pièces 
// adjacentes d'être déplacées.
// Elle vérifie si une pièce est en haut, en bas, à gauche ou à droite de la case vide en utilisant la logique 
// des indices dans une grille 3x3.
// Gestion des interactions utilisateur
// Fonction enableDraggableAndDroppable()

// Activation de draggable : Détruit les interactions précédentes pour les pièces, puis active le draggable
//  uniquement pour les pièces adjacentes à la case vide, ce qui empêche le déplacement des pièces non adjacentes.
// Configuration de droppable pour la case vide : La case vide devient une zone de dépôt. Quand une pièce 
// adjacente est déposée, elle est échangée avec la case vide.
// Échange des pièces et mise à jour :

// Dans drop, on trouve les indices de la pièce glissée et de la case vide. S'ils sont adjacents, le contenu 
// du tableau pieces est échangé entre la case vide et la case glissée.
// renderPuzzle() et enableDraggableAndDroppable() sont rappelées pour mettre à jour l'affichage et les 
// interactions.
// Vérification de la victoire : checkWin()

// La victoire est vérifiée en confirmant que toutes les pièces sont dans l'ordre initial.
// Si c'est le cas, les interactions draggable sont désactivées et un message de victoire est affiché.
// Boutons et initialisation
// Boutons :

// Le bouton Mélanger les Images déclenche initializePuzzle pour redémarrer le jeu.
// Le bouton Recommencer s’affiche en cas de victoire et relance également initializePuzzle pour recommencer.
// Lancement au chargement :

// initializePuzzle est appelé au chargement de la page pour configurer le puzzle initial.
// Ce code combine des méthodes pour afficher un puzzle glissable avec des images et utilise le glisser-déposer
//  pour créer une interface interactive, contrôlée et agréable pour le joueur.

