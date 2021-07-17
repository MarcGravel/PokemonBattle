//gets user and computer selected pokemon
var userPokemonCookie = Cookies.get('userPokemon');
var enemyPokemonCookie = Cookies.get('enemyPokemon');

//redirect function to home
function redirect() {
    window.location.href = "index.html"; 
}
//checks if pokemon selection was made
if(userPokemonCookie == undefined) {
    var noSelection = document.getElementById('noSelection');
    noSelection.style.display = "block";

    //clears visibility of user and enemy pokemon
    var userDiv = document.getElementById('userPokemon');
    userDiv.style.display = "none";
    var enemyDiv = document.getElementById('enemyPokemon');
    enemyDiv.style.display = "none";
}

//parsed cookies for access to objects
var userPokemon = JSON.parse(userPokemonCookie);
//valid properties are: attack, healthBar, img, name.

var enemyPokemon = JSON.parse(enemyPokemonCookie);
//valid properties are: attack, healthBar, img, name.

//Puts elements on page depending on cookies 
//User
var userPokemonPageImage = document.createElement('img');
userPokemonPageImage.setAttribute('src', userPokemon.img);
document.getElementById('userPokemon').append(userPokemonPageImage);

var userPokemonPageHealth = document.createElement('p');
userPokemonPageHealth.innerText = userPokemon.healthBar;
document.getElementById('healthUser').append(userPokemonPageHealth);

//Enemy
var enemyPokemonPageImage = document.createElement('img');
enemyPokemonPageImage.setAttribute('src', enemyPokemon.img);
document.getElementById('enemyPokemon').append(enemyPokemonPageImage);

var enemyPokemonPageHealth = document.createElement('p');
enemyPokemonPageHealth.innerText = enemyPokemon.healthBar;
document.getElementById('healthEnemy').append(enemyPokemonPageHealth);


// Battle health bar
var userMaxHealth = document.getElementById('userHealthBar');
var enemyMaxHealth = document.getElementById('enemyHealthBar');

var myHealth = userPokemon.healthbar;
var theAttack = userPokemon.attack;
var enemyHealth = enemyPokemon.healthbar;
var attackHealth = myHealth - theAttack;

//sets health bars to correct place
if (enemyPokemon.healthBar != 100) {
    var setUserProgress = document.getElementById('healthEnemy');
    var setAttackedHealth = enemyPokemon.healthBar;
    setUserProgress.setAttribute('value', setAttackedHealth);
}

if (userPokemon.healthBar != 100) {
    var setEnemyProgress = document.getElementById('healthUser');
    var setAttackedHealthEnemy = userPokemon.healthBar;
    setEnemyProgress.setAttribute('value', setAttackedHealthEnemy);
}


function battleAttacks (){
    
    enemyPokemon.healthBar = enemyPokemon.healthBar - userPokemon.attack;
    //Enemy health bar
    var userProgress = document.getElementById('healthEnemy');
    var attackedHealth = enemyPokemon.healthBar - userPokemon.attack;
    userProgress.setAttribute('value', attackedHealth);
    
    if (enemyPokemon.healthBar <= 0) {
        winner("You are");
        gameOver();
        removeAttack();
    } else {
        userPokemon.healthBar = userPokemon.healthBar - enemyPokemon.attack;

        //User health Bar
        var enemyProgress = document.getElementById('healthUser');
        var attackedHealthEnemy = userPokemon.healthBar - enemyPokemon.attack;
        enemyProgress.setAttribute('value', attackedHealthEnemy);

        if (userPokemon.healthBar <= 0) {
            winner("The enemy is");
            gameOver();
            removeAttack();
        }
    }

    Cookies.set('userPokemon', userPokemon);
    Cookies.set('enemyPokemon', enemyPokemon);
    
    console.log(userPokemon);
    console.log(enemyPokemon);
}

// Game over function and message
function gameOver() {
    var gameOverAnnouncement = document.createElement('h1');
        gameOverAnnouncement.style.textDecoration = 'uppercase';
        gameOverAnnouncement.style.color = 'white';
        gameOverAnnouncement.innerText = "Game Over";
        document.getElementById('gameOver').append(gameOverAnnouncement);

        var playAgainBtn = document.getElementById('playAgainBtn');
        playAgainBtn.style.display = "block";

}

//Winner function 
function winner(winner) {
    var displayWinner = document.createElement('h3');
    displayWinner.style.color = 'white';
    displayWinner.innerText = winner + " the champion!";
    document.getElementById('gameOver').append(displayWinner);
}

//remove attack button when game ends 
function removeAttack() {
    var attackBtn = document.getElementById('attack');
    attackBtn.style.display = "none";
}
