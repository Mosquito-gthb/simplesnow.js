# simplesnow.js

Hello! Thank you for interest to SimpleSnow.js. Here is a short user guide, how to connect snow to your page, edit and use it.




## Connection
1. First of all, connect simplesnow.css to head tag and insert simplesnow. It must be before your own styles.

```
<head>
<link rel="stylesheet" href="..\pathtocss\simplesnow.css" />
... <your styles> ...
</head>
```
Add at the end of body tag this script tag:
```
<body>
... <your code here> ...
<script src="..\pathtoscript\simplesnow.js"></script>
</body>
```


2. After that add this snowflake container at the begining of body tag:

```
<div class="snow-container" id="snow_cont"></div>
```
Note, that container has position: absolute, as all snowflakes. 



3. Done! Container created and ready to gen snowflakes!




## JS usage
SimpleSnow has got special functions to start and stop snow on webpage:

1. Use `startSnow()` function to begin snowfall

2. Use `stopSnow()` function to stop snowfall

3. Use `switchSnow()` function to toggle snowfall automaticly




## Settings
SimpleSnow.js makes snowflakes for almost all screen widths - from 300 to 3000 - snowfall will be correct and adaptive. But you can regulate fall speed and fall height
Fall height regulates by snow_cont height. Add this to your CSS file:

```
.snow-container {
    min-height: <your height>; /*100vh max recommended*/
}
```

Notice - the more heigth, the more speed become. To regulate fall speed, add this:

```
.snowflake {
    transition: all <transition time>; /*5s for 50vh and 7s for 100vh recommended*/
}
```

