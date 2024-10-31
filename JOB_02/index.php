
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.14.0/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="/resources/demos/style.css">
    <link rel="stylesheet" href="script.js">
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

    <style>
        .container { display: flex; justify-content: center; flex-wrap: wrap; }
        .container img { margin: 5px; width: 10%; height: 10%; cursor: pointer; }
        .message { font-size: 1.5em; }
    </style>

    <button id="shuffleButton">Mélanger les Images</button>

    <div id="imageContainer" class="container">
        <img src="arc_en_ciel/arc1.png" alt="arc1" data-color="1">
        <img src="arc_en_ciel/arc2.png" alt="arc2" data-color="2">
        <img src="arc_en_ciel/arc3.png" alt="arc3" data-color="3">
        <img src="arc_en_ciel/arc4.png" alt="arc4" data-color="4">
        <img src="arc_en_ciel/arc5.png" alt="arc5" data-color="5">
        <img src="arc_en_ciel/arc6.png" alt="arc6" data-color="6">
    </div>

    <p class="message" id="message"></p>

    

</body>
</html>

<!-- //<!DOCTYPE html><html lang="en"><head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1">
//   <title>jQuery UI Draggable - Default functionality</title>
//   <link rel="stylesheet" href="https://code.jquery.com/ui/1.14.0/themes/base/jquery-ui.css">
//   <link rel="stylesheet" href="/resources/demos/style.css">

//   <style>
//   #draggable { width: 150px; height: 150px; padding: 0.5em; }
//   </style>

//   <script src="https://code.jquery.com/jquery-3.7.1.js"></>
//   <script src="https://code.jquery.com/ui/1.14.0/jquery-ui.js"></script>
//   <script>
//   $( function() {
//     $( "#draggable" ).draggable();
//   } );
//   </script>

// </head>
// <body>
 
// <div id="draggable" class="ui-widget-content">
//   <p>Drag me around</p>
// </div> 
  -->