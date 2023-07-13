import { useLocation } from "react-router-dom";
import '../css/PokeDetails.css'
import pokeball from '../img/pokeball.png'
import pokeballtrans from '../img/pokeball_transparent.png'
import pokelogo from '../img/pokemonlogo.svg'
import Back from "../components/Back";

const PokeDetails = () => {

  const location = useLocation()
  console.log(location)
  return (
    <section className="detailPage">
    <img src={pokelogo} alt="pokemon logo" className="pokemonlogo"/>
    <section className="pokemonDetailContainer">
      <div className="pokeImageAndinfo">
          <div className="pokeImage">
            <img src={location.state.sprites.other.dream_world.front_default} alt="" />
          </div>
          <div className="pokeInfo">
            <div className="pokeType">
              <h2><img src={pokeballtrans} />TYPE<img src={pokeballtrans} /></h2>
              <h3>{location.state.types.map((elt) => <p className={elt.type.name}>{elt.type.name}</p>)}</h3>
            </div>
            <div className="pokeStats">
            <h2><img src={pokeballtrans} />STATISTICS<img src={pokeballtrans} /></h2>
              <div className="stats1">
                <p><span>ATTACK:</span> {location.state.stats[0].base_stat}</p>
                <p><span>DEFENSE:</span> {location.state.stats[1].base_stat}</p>
              </div>
              <div className="stats2">
                <p><span>SPECIAL:</span> {location.state.stats[2].base_stat}</p>
                <p><span>SPEED:</span> {location.state.stats[4].base_stat}</p>
              </div>
            </div>
            <div className="pokeInfoWrapper">
              <h2><img src={pokeballtrans} />ATTACKS & MOVES<img src={pokeballtrans} /></h2>
              <div className="pokeAttacks">
                <p>{location.state.moves.map((elt) => <p>{elt.move.name}</p>)}</p>
              </div>
            </div>
          </div>
      </div>
      <div className="detailId-Name">
        <div className="detailBall-Name">
          <img src={pokeball} alt="pokeball" className='pokeball'/>
          <h2>{location.state.id}</h2>
        </div>
        <h2 className="detailPokeName">{location.state.name}</h2>
      </div>
    </section>
    <Back/>
    </section>
  )
}

export default PokeDetails;

// const PokeDetails = () => {

//   const location = useLocation()
//   console.log(location)
//   return (
//     <section className="container_details">
//       <article>
//         <img src={location.state.sprites.other.dream_world.front_default} alt="" />

//         <h2>{location.state.id}</h2>
//         <h2>{location.state.name}</h2>
//         <h3>{location.state.types.map((elt) => <p>{elt.type.name}</p>)}</h3>
//       </article >
//       <article>
//         <h2>Attacks and Movements:</h2>
//         <p>{location.state.moves.map((elt) => <p>{elt.move.name}</p>)}</p>
//       </article>

//     </section>
//   )
// }

// export default PokeDetails;

// VON MIR ERSTE BEARBEITUNG

{/* <section className="container_details">
<img src={location.state.sprites.other.dream_world.front_default} alt="" />
<div className="pokeDetailInfo">
  <div className="pokeIDDetails">
  <img src={pokeball} alt="pokeball" className='pokeball'/>
  <h2>{location.state.id}</h2>
  </div>
  <h2>{location.state.name}</h2>
</div>
<div className="pokeTypes">
  <h2>Type:</h2>
  <h3>{location.state.types.map((elt) => <p>{elt.type.name}</p>)}</h3>
</div>
<div>
<h2>Attacks and Movements:</h2>
<p>{location.state.moves.map((elt) => <p>{elt.move.name}</p>)}</p>
</div>

</section> */}