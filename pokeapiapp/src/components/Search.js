import React, {useState } from 'react'
import FilterPokemon from './FilterPokemon';

const Search = ({getPokemon}) => {
  
  

  //console.log(getPokemon);

 const [search,setSearch] = useState([]);

 //realizamos el handlechange en el input para que nos lleve el valor como parametro de la 
 //funcion getPokemon().

 
 const handleChange = (e) => {

    const {value} = e.target

     setSearch(value);
     if(value.length === 0) {
        getPokemon(undefined)
     }

 } 

  return (
    <div className='container'>
        
        <form  onSubmit={e => e.preventDefault()}>
            <input
              className='form-control my-3'
              placeholder='Buscar un pokemon por nombre o id'
              onChange={handleChange}
            />
            
            <button className='btn btn-secondary d-inline mb-0' onClick={(e) => getPokemon(search.toLowerCase())}>Buscar</button>              

        </form>
     
    </div>
  )
}

export default Search