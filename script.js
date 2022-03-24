const pokemonImage = document.getElementById("js--pokemon-image");
let randomNumber = Math.floor(Math.random() * 897 + 1);

console.log(randomNumber)


let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
.then(function(response){
    return response.json();
})
.then(function(realData){
    console.log(realData);
    pokemonImage.src = realData.sprites.front_default;
});


const catchButton = document.getElementById("js--catch-button");
const pokemonText = document.getElementById("js--pokemon-text");
let pokemonGamePlayed = false;


catchButton.onclick = function(){
    if(pokemonGamePlayed === false){
        let catchNumber = Math.floor(Math.random() * 2);
        if(catchNumber === 0){
            pokemonText.innerText = "Pokemon Fled!"
            randomNumber = Math.floor(Math.random() * 897 + 1);
            console.log(randomNumber);
            fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
            .then(function(response){
                return response.json();
            })
            .then(function(realData){
                console.log(realData);
                pokemonImage.src = realData.sprites.front_default;
                setTimeout(nieuwepokemon, 750);
            });            
        }
    
        else{
            pokemonText.innerText = "Pokemon Caught!"
            randomNumber = Math.floor(Math.random() * 897 + 1);
            console.log(randomNumber);
            fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
            .then(function(response){
                return response.json();
            })
            .then(function(realData){
                console.log(realData);
                pokemonImage.src = realData.sprites.front_default;
                setTimeout(nieuwepokemon, 750);
            });  
        }
        pokemonGamePlayed = true
    }
}

function nieuwepokemon(){
    pokemonText.innerText = "A wild Pokemon appeared!"
    pokemonGamePlayed = false
}
