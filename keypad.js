var tessel = require('tessel')
var Keypad = require('tessel-matrix-keypad');
var gpio = tessel.port['GPIO'].pin; //shortcut for referencing Tessel pins
var modD = tessel.port['D'].pin;

var keypad = new Keypad({
    keys: [
      ['D', 'C', 'B', 'A'],
      ['#', '9', '6', '3'],
      ['0', '8', '5', '2'],
      ['*', '7', '4', '1']
      ]
  , rows: [gpio.G1, gpio.G2, gpio.G3, gpio.G4]
  , cols: [gpio.G5, gpio.G6, modD.G1, modD.G2]
  , scan: 'both' // 'col' or 'both'
  , poll: 200
});

keypad.on('change', function(key, val){
  console.log("Key change: " + key);
});

keypad.on('keydown', function(key){
  console.log("Key down: " + key);
});

keypad.on('keyup', function(key){
 console.log("Key UP: " + key);
});
