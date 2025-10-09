
async function fetchData(){

    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        

        if(!response.ok){
            throw new Error("Could not fetch resource");
            
        }

        const data = await response.json();
        const imgElement = data.sprites.front_default;
        const pokemonSprite = document.getElementById("pokemonSprite");
        const notPokemon = document.getElementById("notPokemon")
        
        notPokemon.textContent = "";

        pokemonSprite.src = imgElement;
        pokemonSprite.style.display = "block";
    }

    catch(error){
        console.error(error);
        
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const notPokemon = document.getElementById("notPokemon");
        notPokemon.innerHTML = `<strong>${pokemonName}</strong> it's not a Pokémon`;
    }
}