import React from 'react'

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