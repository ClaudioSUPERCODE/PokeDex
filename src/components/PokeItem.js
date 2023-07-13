import '../css/PokeItem.css'
import pokeball from '../img/pokeball.png'
import { Link } from "react-router-dom";

const PokeItem = (props) => {
  return (
    <Link to={`/${props.pokemonId}`} state={props.completePokemon}>
    <div className='pokeItem'>
      <img src={props.pokemonImage} alt={props.pokemonName} />
      <div className='pokeItemInfo'>
        <div className='pokeID'>
          <img src={pokeball} alt="pokeball" className='pokeball'/>  
          <p>{props.pokemonId}</p>
        </div>
        <p className='pokeName'>{props.pokemonName}</p>
      </div>
    </div>
    </Link>
  )
}

export default PokeItem;

// const PokeItem = (props) => {
//   return (
//     <Link to={`/${props.pokemonId}`} state={props.completePokemon}>
//     <div className='pokeItem'>
//       <img src={props.pokemonImage} alt={props.pokemonName} />
//       <div className='pokeItemInfo'>
//         <div className='pokeID'>
//           <img src={pokeball} alt="pokeball" className='pokeball'/>  
//           <p>{props.pokemonId}</p>
//         </div>
//         <p className='pokeName'>{props.pokemonName}</p>
//       </div>
//     </div>
//     </Link>
//   )
// }