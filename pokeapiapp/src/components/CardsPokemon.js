import React from 'react'
import PokemonList from './PokemonList'
import '../style.css'
const CardsPokemon = ({pokemon}) => {
    //console.log(pokemon)
  
   
  return (
    <div className='container'>
        <div>
            <h1 className='text-center'>Lista de Pokemones</h1>
        </div>
       <div className="pokemon-cards">             
            {pokemon.map((pokemon) => (
                   
                    <PokemonList pokemon={pokemon} key={pokemon.name}/>
            ))}      
           
        </div>
    </div>
  )
}

/*
<div classNameName='col-md-6 my-5 ms-5'>
            <div classNameName="card w-50 bg-dark">
                <img
                    src={props.sprite}
                    alt={`imagen-${props.name}`}
                    classNameName="card-img-top"
                    width="120px"
                    height="220px"
                />
                <div classNameName="card-body bg-danger text-white">
                    <p classNameName='text-end fw-bold fs-4'>#{props.id}</p>
                    <h5 classNameName='text-center fw-bold fs-4'>{props.name.toUpperCase()}</h5>
                    <p classNameName='text-center fw-bold lead'>altura: {props.height}</p>
                    <h5 classNameName='d-inline text-center mt-3'>Tipo: </h5>
                    {props.types.map((type,key) => (
                            <div key={key} classNameName="d-inline text-center">
                                <span classNameName='fs-6 fw-semibold ms-4'>[{type.type.name.toUpperCase()}]</span>
                            </div>
                         ))    
                        }
                </div>
            </div> 
            
        </div> */
export default CardsPokemon