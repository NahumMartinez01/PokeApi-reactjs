import Swal from "sweetalert2";
import {useEffect,useState} from 'react'
import { fetchPokemon,fetchAllPokemon, fetchNormal} from './components/Api.js'
import Search from './components/Search.js'
import CardsPokemon from './components/CardsPokemon.js'
import Nav from './components/Nav.js'


const App = () => {

  const [pokemon, setPokemon] = useState([]);
  const [cargando, setCargando] = useState(false)
  const [searching, setSearching] = useState(false);
    
  const fetchPokemons = async () => {
    setTimeout(async() => {
      setCargando(true)
      try {
        
        const data = await fetchAllPokemon();
        const promises = data.results.map(async (pokemon) => {
          return await fetchNormal(pokemon.url) 
        })
        const results = await Promise.all(promises)
        setPokemon(results)
        
        setCargando(false)

      } catch (err) {
        console.log(err)
      }
    },600) 
  }

  const getPokemon = async(busqueda) => {
    if(!busqueda){
      return fetchPokemons();
    }
     setCargando(true);
     setSearching(true);
     
     setTimeout(async() => {  
       try {
         const res = await fetchPokemon(busqueda)
         const data = await res.json();
                 
         setPokemon([data])
         setCargando(false);
       
        } catch (error) {
       
          console.log(error);
          setCargando(false);
          
          return Swal.fire({
            title: "Error!",
            text: "Pokemon no encontrado :(",
            icon: "error",
          });         
       }
       
     }, 300); 
   } 


  

  useEffect( () => {
    
  if(!searching){
    fetchPokemons();
   
  } 
  },[])

    return (
    <div className="container">
        <Nav/>
        <Search getPokemon={getPokemon} />
        
        
        {cargando ? (
            <div className="spinner-border text-danger ms-5 mt-5" role="status">
                <span className="visually-hidden">Cargando...</span>
            </div>
        ): null}

        {!cargando && pokemon ? (
           <CardsPokemon pokemon={pokemon}/>
        ):null} 

    </div>
  )
}

export default App