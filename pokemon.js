$(document).on("pagecreate","#secondpage",function(event){


var music = new Audio('http://66.90.93.122/ost/pokemon-gameboy-sound-collection/fllwdebjsg/107-battle-vs-wild-pokemon-.mp3');

//music.play();

//vars for the buttons
var specialButton = document.getElementById("specialButton");
var attackButton  = document.getElementById("attackButton");
var resetButton  =  document.getElementById("reset");

//variables foruser and enemy hP
var userHealth =  1000;
var enemyHealth = 1000;

//vars for the user attacks
var normalAttack =  100;
var specialAttack =  400;

//vars for the HP bars
var userbar =  document.getElementById('userbar');
var enemybar =  document.getElementById('enemybar');

//var for the h1 text on top
var word = document.getElementById("word");



attackButton.addEventListener('click', function(){
  word.innerHTML = "normal attack used";
  enemyHealth = enemyHealth - normalAttack;
  enemybar.value=enemyHealth;
  
});

specialButton.addEventListener('click', function(){
  word.innerHTML = "special attack!!";
   enemyHealth = enemyHealth - specialAttack;
   enemybar.value=enemyHealth;
});

reset.addEventListener('click', function(){
 word.innerHTML = "charmander i chose you!"
  enemyHealth = 1000;
 userHealth =  1000;
  enemybar.value=enemyHealth;
  userbar.value=userHealth;
});

  
});


