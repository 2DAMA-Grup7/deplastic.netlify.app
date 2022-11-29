var arrayData = new Array();
var logTxt = new XMLHttpRequest();
var ruta = "../../netlify/functions/routes/Log.txt"

logTxt.open("GET",ruta,false);
logTxt.send(null)
var txt = logTxt.responseText
arrayData.forEach(function(data){
    toString(data)
})

export default getLog