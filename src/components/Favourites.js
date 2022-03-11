import React, {useState} from 'react'
import Pagination from './Pagination'

function Favourites() {

  const[curGenre,setCurGenre] = useState("All Genre");

  return (
    <>


      <div className="flex justify-center space-x-2 flex-wrap mt-4 px-2">
        <button className={
          curGenre == "All Genres" ? "m-2 text-lg px-2 text-white p-1 rounded-xl bg-blue-400 font-bold " :
            "m-2 text-lg px-2 text-white p-1 rounded-xl bg-gray-400 font-bold  hover:bg-blue-400 "
        }
        >

          All Genres

        </button>


        <button className = {
          curGenre == "All Genres" ? "m-2 text-lg px-2 text-white p-1 rounded-xl bg-blue-400 font-bold " :
            "m-2 text-lg px-2 text-white p-1 rounded-xl bg-gray-400 font-bold  hover:bg-blue-400 "
        } >Action</button>
        {/* <button className=" m-2 text-lg px-2 text-white p-1 rounded-xl bg-gray-400 font-bold  hover:bg-blue-400" >Comedy</button>
        <button className=" m-2 text-lg px-2 text-white p-1 rounded-xl bg-gray-400 font-bold  hover:bg-blue-400" >Drama</button>
        <button className=" m-2 text-lg px-2 text-white p-1 rounded-xl bg-gray-400 font-bold  hover:bg-blue-400" >Animation</button> */}
      </div>

      <div className="text-center" >
        <input type="text" placeholder="Search" className="border border-4 text-center p-1 m-2" />
        <input type="number" placeholder="Rows" className="border border-4 text-center p-1 m-2" />

      </div>


      <div>Inputs Container</div>
      <div>Table Container</div>

      <div> <Pagination /> </div>
      

    </>
  )
}

export default Favourites