<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.14.0/themes/base/jquery-ui.css">
    <!-- <link rel="stylesheet" href="/resources/demos/style.css"> -->
    <link rel="stylesheet" href="script.js">
    <link rel="stylesheet" href="style.css">
    <title>script-02-JQUERY</title>

    <!-- <script src="https://code.jquery.com/jquery-3.7.1.js"></script> -->

    <script src="https://code.jquery.com/jquery-3.7.1.min.js" 
            integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" 
            crossorigin="anonymous">
    </script>

    <script src="https://code.jquery.com/ui/1.14.0/jquery-ui.js"></script>

    <script src="script.js" defer></script>

</head>
<body>
    <h1 class="h1">Jeu du Taquin</h1>
    <button id="shuffleButton">Mélanger les Images</button>
    <button id="restartButton" style="display:none;">Recommencer</button>
    <div id="puzzleContainer"></div>
    <p class="message" id="message"></p>
    
    
</body>
</html>
