
$(document).ready(function() {
    // Afficher le texte quand le bouton "Afficher le Texte" est cliqué
    $("#showTextButton").click(function() {
        $("#textContainer").show();
        $("#showTextButton").hide();
        $("#hideTextButton").show();
    });

    // Cacher le texte quand le bouton "Cacher le Texte" est cliqué
    $("#hideTextButton").click(function() {
        $("#textContainer").hide();
        $("#showTextButton").show();
        $("#hideTextButton").hide();
    });
});
 