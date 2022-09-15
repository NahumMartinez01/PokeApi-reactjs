import React from 'react'
///Este componente solo llama a la nav-bar que contiene el logo de la pokeapi
const Nav = () => {
 
    let imgUrl ="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav className='bg-secondary text-center'>
      <div>
        <img src={imgUrl} alt="pokeapi-logo" className="navbar-image"/>
      </div>
      
    </nav>
  );
}

export default Nav