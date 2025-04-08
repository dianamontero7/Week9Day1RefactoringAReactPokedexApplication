function PokemonList() {
    return (
        <div id="pokemonlist">

        <div className="pokemon-card">
        <img src="https://img.pokemondb.net/artwork/large/bulbasaur.jpg" alt="Bulbasaur" />
        <h3>Name: Bulbasaur</h3>
        <h3>Type: Grass/Poison</h3>
      </div>

      <div className="pokemon-card">
        <img src="https://img.pokemondb.net/artwork/charizard.jpg" alt="Charizard" />
        <h3>Name: Charizard</h3>
        <h3>Type: Fire/Flying</h3>
      </div>

      <div className="pokemon-card">
        <img src="https://img.pokemondb.net/artwork/beedrill.jpg" alt="Beedrill" />
        <h3>Name: Beedrill</h3>
        <h3>Type: Bug/Poison</h3>
      </div>

      <div className="pokemon-card">
        <img src="https://img.pokemondb.net/artwork/golem.jpg" alt="Golem" />
        <h3>Name: Golem</h3>
        <h3>Type: Rock/Ground</h3>
      </div>

      <div className="pokemon-card">
        <img src="https://img.pokemondb.net/artwork/onix.jpg" alt="Onix" />
        <h3>Name: Onix</h3>
        <h3>Type: Rock/Ground</h3>
      </div>

      </div>
    );
}

export {PokemonList};