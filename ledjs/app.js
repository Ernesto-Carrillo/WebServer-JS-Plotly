var express = require('express');
var app = express();
const path = require('path');
const fs=require('fs');
//let datos=fs.readFileSync('data.txt','utf8');
//var Plotly = require('plotly.js-dist-min');

//var Gpio = require('onoff').Gpio;
//var led = new Gpio(17, 'out');
//led.writeSync(0);

app.use(express.json());
app.use(express.urlencoded());


app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/html/index.html'));
});

app.get('/style.css',function(req,res){
  res.sendFile(path.join(__dirname+'/html/style.css'));
});


app.post('/clicked1', function (req, res) {
  //  led.writeSync(1);
    console.log("Led encendido");
});

app.post('/clicked2', function(req, res){
//led.writeSync(0);
console.log("Led apagado");
});


app.listen(8000, function () {
    console.log('Servidor corriendo en el puerto 8000');
 });
