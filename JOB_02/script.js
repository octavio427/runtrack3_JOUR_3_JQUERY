
$(document).ready(function() {
    // Mélanger les images quand le bouton est cliqué
    $("#shuffleButton").click(function() {
        let images = $("#imageContainer img");
        let shuffled = images.sort(() => Math.random() - 0.5);
        $("#imageContainer").html(shuffled);
        makeDraggable();
    });

    // Rendre les images déplaçables
    function makeDraggable() {
        $("#imageContainer img").draggable({
            revert: "invalid"
        });
        $("#imageContainer").droppable({
            accept: "#imageContainer img",
            drop: function(event, ui) {
                let dropped = $(ui.draggable).detach().css({top: 0, left: 0});
                let droppedOn = $(event.target);
                dropped.appendTo(droppedOn);
                checkOrder();
            }
        });
    }

    // Vérifier si les images sont dans le bon ordre
    function checkOrder() {
        let images = $("#imageContainer img");
        let correctOrder = true;
        images.each(function(index, img) {
            if ($(img).data("color") !== index + 1) {
                correctOrder = false;
                return false; // Sortir de la boucle each
            }
        });

        if (correctOrder) {
            $("#message").text("Vous avez gagné").css("color", "green");
        } else {
            $("#message").text("Vous avez perdu").css("color", "red");
        }
    }

    makeDraggable();
});
