
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="script.js">

    <title>script-01-JQUERY</title>

    <!-- <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> -->
     
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" 
            integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" 
            crossorigin="anonymous">
    </script>

</head>
<body>
    
    <button id="showTextButton">Afficher le Texte</button>
    <button id="hideTextButton" style="display:none;">Cacher le Texte</button>

    <div id="textContainer" style="display:none;">
        <p>Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit, ensuite on prie.</p>
    </div>

    <!-- <script>
        $(document).ready(function() {
            // Afficher le texte quand le bouton "Afficher le Texte" est cliqué
            $("#showTextButton").click(function() {
                $("#textContainer").show();
                $("#showTextButton").hide();
        //         $("#hideTextButton").show();
        //     });

        //     // Cacher le texte quand le bouton "Cacher le Texte" est cliqué
        //     $("#hideTextButton").click(function() {
        //         $("#textContainer").hide();
        //         $("#showTextButton").show();
        //         $("#hideTextButton").hide();
        //     });
        // });
    </script> -->

    <style>

        #showTextButton {
            margin-top : 10px;
            background-color: red;
            color : white;
            border-radius : 5px ;
            cursor: pointer;
        }

        #showTextButton:hover {
            background: green ;
            color : white ;
        }

        #hideTextButton {
            margin-top : 10px;
            background-color: green;
            color : white;
            border-radius : 5px ;
            cursor: pointer;
        }

        #hideTextButton:hover {
            background: red ;
            color : white ;
        }
    </style>

    <script src="script.js"></script>
</body>
</html>
