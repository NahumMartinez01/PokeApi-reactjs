import React from 'react'
import '../style.css'
const PokemonList = ({pokemon}) => {
    //console.log(pokemon)
  return (
    <div className="card mt-5 card-pokemons">

       <div className='card-header'>
            <img src={pokemon.sprites.front_default} className="card-img-top" alt={pokemon.name}/>
        </div> 
           
         <div className="card-body text-white">
            <div className='card-caracteristic'>    
                <p className="card-text lead fw-bold text-end">#{pokemon.id}</p>
                <p className="card-text lead fw-bold fs-4 text-center">{pokemon.name.toUpperCase()}</p>
                <p className="card-text lead fw-bold text-center ">Altura: {pokemon.height}</p>       
            </div> 
         </div>
         <div className='card-footer'>
            <div className='type'>
                <p className='fw-bold fs-5'>Tipo:</p>
            </div>  
                {
                    pokemon.types.map((type,key) => (
                        <div key={key} className="list-type text-center">
                            <span className='fs-4 fw-semibold ms-4 d-inline'>{type.type.name.toUpperCase()}</span>
                        </div>
                    ))    
                }
         </div> 
    </div>
  )
}

export default PokemonList