var arrayData = new Array();
var logTxt = new XMLHttpRequest();
var ruta = "../../netlify/functions/routes/Log.txt"

logTxt.open("GET",ruta,false);
logTxt.send(null)
var txt = logTxt.responseText
for (let index = 0; index < txt.length; index++) {
    arrayData.push(txt[index]);
    }
arrayData.forEach(function(data){
    console.log(data)
})

export default getLog