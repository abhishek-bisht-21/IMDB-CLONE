import React from 'react'
import logo from '../logo.png'

function NavBar() {
  return (
    <div className = "border pl-12 flex space-x-8 items-center py-4">
	<img className = "w-[50px] md:w-[60px]" src={logo}></img>
	<div className = "text-blue-400 font-bold text-xl md:text-3xl">Movies</div>
	<div className = "text-blue-400 font-bold text-xl md:text-3xl" > Favourites</div>
    
    
    </div>
  )
}

export default NavBar