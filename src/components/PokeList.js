// Infrastructure
import { useState, useEffect } from "react";
// Components
import PokeItem from './PokeItem';
import Menu from './Menu';
import SearchBar2 from './SearchBar2'

// Styling
import '../css/PokeList.css';
import pokemonlogo from '../img/pokemonlogo.svg';
import animatedpokeball from '../img/animatedpokeball.gif';
import { Link } from "react-router-dom";

const PokeList = () => {

  // Different states to store pokemon data, loading state and error state
  // State for Pokemon data
  const [pokemon, setPokemon] = useState([]);
  // State for loading state
  const [loading, setLoading] = useState(true);
  // State for error handling
  const [error, setError] = useState(null);
  // State for filtered Pokemon
  const [typeFilteredPokemon, setTypeFilteredPokemon] = useState([]);
  // State to open and close menu component
  const [isOpen, setIsOpen] = useState(false);
  const [searchPokemon, setSearchPokemon] = useState([])


  // Fetch of Pokemon date
  useEffect(() => {

    const getData = async () => {
      try {
        // First fetch to get the amount of Pokemon
        const firstResponse = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=200');
        // Throw error in case of an HTTP error
        if (!firstResponse.ok) {
          throw new Error(`This is an HTTP error: The status is ${firstResponse.status}`);
        }
        // Process the data of the fetch
        // Convert HTTP object in JSON
        const actualData = await firstResponse.json();
        const pokemonResults = actualData.results;
        // Create an empty array to store amount of Pokemon later used to determine the number of loops
        const pokeArray = [];
        // Loop through the results and fetch data of every single Pokemon
        for (let count = 1; count <= pokemonResults.length; count++) {
          // Second fetch to get the Pokemon data
          const secondResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${count}/`);
          // Throw error in case of an HTTP error
          if (!secondResponse.ok) {
            throw new Error(`This is an HTTP error: The status is ${secondResponse.status}`);
          }
          // Process the data of the fetch
          const actualPokemonData = await secondResponse.json();
          pokeArray.push(actualPokemonData);
        }
        // Set the state of the Pokemon data
        setPokemon(pokeArray);
        // Catch errors
      } catch (error) {
        setError(error.message);
        // Finally set loading to false
      } finally {
        setLoading(false);
      }
    }

    getData();

  }, []);

  // Update the state of the pokemon according to the filter selection of the user inside the Menu component
  const handleTypeFilterChange = (filteredPokemon) => {
    setTypeFilteredPokemon(filteredPokemon);
  }

  // Update the state of the pokemon according to the Search Function
  const handleSearchPokemon = (searchQuery) => {
    const filteredByType = typeFilteredPokemon.length > 0 ? typeFilteredPokemon : pokemon;
    const filteredByQuery = filteredByType.filter((pokemon) => {
      return searchQuery.some((query) => {
        return pokemon.name.toLowerCase().includes(query.name.toLowerCase());
      });
    });
    setSearchPokemon(filteredByQuery);
  }

  return (
    <div className="wholePokeList">
      <Link to='/'>
      <img src={pokemonlogo} alt="pokemon logo" className="pokemonlogo" />
      </Link>
      {loading && <div className="loading">
        <img src={animatedpokeball} alt="animated pokeball" />
      </div>}
      {error && (<div>{`There is a problem fetching the post data - ${error}`}</div>)}
      {/* Button to open the menu but is only visible when setIsOpen is false */}
      {!isOpen && <button className="filterBtn" onClick={() => setIsOpen(true)}>TYPES</button>}
      {/* Menu component when setIsOpen is true */}
      <Menu pokemon={pokemon} onTypeFilterChange={handleTypeFilterChange} setIsOpen={setIsOpen} isOpen={isOpen} />
      <div className={isOpen ? 'pokeListGridHidden' : 'pokeListGrid'}>
        <SearchBar2
          key={pokemon.id}
          pokemon={pokemon}
          onSearchChange={handleSearchPokemon}
        />
        <div className="pokeListGrid">
          {/* Implement ternary operator to render the desired pokemon according to the filter function */}
          {searchPokemon.length > 0 ? (
            searchPokemon.map(pokemon => (
              <PokeItem
                key={pokemon.id}
                pokemonImage={pokemon.sprites.other.dream_world.front_default}
                pokemonId={pokemon.id}
                pokemonName={pokemon.name}
                completePokemon={pokemon}
                type={pokemon.types}
                attack={pokemon.stats[0].base_stat}
                defense={pokemon.stats[1].base_stat}
                special={pokemon.stats[2].base_stat}
                speed={pokemon.stats[4].base_stat}
              />
            ))
          ) : (
            typeFilteredPokemon.length > 0 ? (
              typeFilteredPokemon.map(pokemon => (
                <PokeItem
                  key={pokemon.id}
                  pokemonImage={pokemon.sprites.other.dream_world.front_default}
                  pokemonId={pokemon.id}
                  pokemonName={pokemon.name}
                  completePokemon={pokemon}
                  type={pokemon.types}
                  attack={pokemon.stats[0].base_stat}
                  defense={pokemon.stats[1].base_stat}
                  special={pokemon.stats[2].base_stat}
                  speed={pokemon.stats[4].base_stat}
                />
              ))
            ) : (
              pokemon.map(pokemon => (
                <PokeItem
                  key={pokemon.id}
                  pokemonImage={pokemon.sprites.other.dream_world.front_default}
                  pokemonId={pokemon.id}
                  pokemonName={pokemon.name}
                  completePokemon={pokemon}
                  type={pokemon.types}
                  attack={pokemon.stats[0].base_stat}
                  defense={pokemon.stats[1].base_stat}
                  special={pokemon.stats[2].base_stat}
                  speed={pokemon.stats[4].base_stat}
                />
              ))
            )
          )}

        </div>
      </div>
    </div>
  )
}

export default PokeList;