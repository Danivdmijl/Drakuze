const pokemonImage = document.getElementById("js--pokemon-image");
let randomNumber = Math.floor(Math.random() * 897 + 1);

console.log(randomNumber)


let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
.then(function(response){
    return response.json();
})
.then(function(realData){
    console.log(realData);
    pokemonName = realData.name;
    pokemonText.innerText = "A wild " + pokemonName + " has appeared";
    pokemonImage.src = realData.sprites.front_default;
});


const catchButton = document.getElementById("js--catch-button");
const pokemonText = document.getElementById("js--pokemon-text");
let pokemonName = "";

let pokemonGamePlayed = false;


catchButton.onclick = function(){
    if(pokemonGamePlayed === false){
        let catchNumber = Math.floor(Math.random() * 2);
        if(catchNumber === 0){
            pokemonText.innerText = "Pokemon Fled!"   
            setTimeout(idkwtfditeigword, 1750); 
        }
    
        else{
            pokemonText.innerText = "Pokemon Caught!"
            setTimeout(idkwtfditeigword, 1750);
        }
        pokemonGamePlayed = true
    }
}

function idkwtfditeigword(){
    randomNumber = Math.floor(Math.random() * 897 + 1);
            console.log(randomNumber);
            fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
            .then(function(response){
                return response.json();
            })
            .then(function(realData){
                console.log(realData);
                pokemonImage.src = realData.sprites.front_default;
                pokemonName = realData.name;
                pokemonText.innerText = "A wild " + pokemonName + " has appeared";
                setTimeout(nieuwepokemon, 750);
            });        
}


const runButton = document.getElementById("js--run-button");
console.log(runButton);

runButton.onclick = function () {
    let runNumber = Math.floor(Math.random() * 3);
    if(runNumber === 0){
        pokemonText.innerText = "You cant run!"   
        setTimeout(catchButton, 1750); 
    }

    else{
        idkwtfditeigword();        
    }
}




function nieuwepokemon(){
    pokemonGamePlayed = false
}
