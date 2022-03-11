import React from 'react'

function Favourites() {
  return (
    <>

      <div className = "flex justify-center space-x-2 flex-wrap mt-4 px-2">
            <button className = " m-2 text-lg px-2 text-white p-1 rounded-xl bg-gray-400 font-bold  hover:bg-blue-400 " >All Genres</button>
            <button className = " m-2 text-lg px-2 text-white p-1 rounded-xl bg-gray-400 font-bold  hover:bg-blue-400" >Action</button>
            <button className = " m-2 text-lg px-2 text-white p-1 rounded-xl bg-gray-400 font-bold  hover:bg-blue-400" >Comedy</button>
            <button className = " m-2 text-lg px-2 text-white p-1 rounded-xl bg-gray-400 font-bold  hover:bg-blue-400" >Drama</button>
            <button className = " m-2 text-lg px-2 text-white p-1 rounded-xl bg-gray-400 font-bold  hover:bg-blue-400" >Animation</button>



      </div>
      <div>Inputs Container</div>
      <div>Table Container</div>
      <div>Pagination</div>

    </>
  )
}

export default Favourites