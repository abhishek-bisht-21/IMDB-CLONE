
// rfce -> For boiler plate code.
import React from 'react'
import Image from '../banner.jpg'

function Banner() {
  return (
    <>
    
    <div className = {`bg-[url(${Image})] h-[60vh] bg-center bg-cover flex items-end justify-center`}>

    	<div className = "text-3xl text-white p-4 bg-gray-900 w-full flex justify-center bg-opacity-50">Spider-Man : No Way Home</div>
    </div>
    
    </>
  	)
}

export default Banner