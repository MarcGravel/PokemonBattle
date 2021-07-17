function addSelection(element) {
    var parent = element.parentElement;
    var getname = parent.querySelector('h5');
    var name = getname.innerText;
    var image = parent.querySelector('img').getAttribute('src');
    var health = parent.querySelector('progress').getAttribute('value');
    var attack = parent.querySelector('h6').getAttribute('value');

    var pokemon = {
    name: name,
    img : image,
    healthBar : health,
    attack: attack
    }
    Cookies.set('userPokemon', pokemon);
    console.log(pokemon);
}

function redirectBattle() {
    window.location.href = "battle.html"; 
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
var randomNumber = getRandomInt(3);
var allCharacters = document.getElementsByClassName('character');
var enemyChoice = allCharacters[randomNumber];
    console.log(enemyChoice);

function addEnemy(){
    var enemy = enemyChoice;
    var getname = enemy.querySelector('h5');
    var name = getname.innerText;
    var image = enemy.querySelector('img').getAttribute('src');
    var health = enemy.querySelector('progress').getAttribute('value');
    var attack = enemy.querySelector('h6').getAttribute('value');
    var enemyPokemon = {
        name: name,
        img: image,
        healthBar: health,
        attack: attack
    }
    Cookies.set('enemyPokemon', enemyPokemon);
    console.log(enemyPokemon);
}
