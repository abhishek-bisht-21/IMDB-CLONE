import React from 'react'

function Pagination() {
  return (
    <>
    	<div className = "w-full flex justify-center mb-8">
		<button className = " p-2 border-2 border-indigo-500 text-indigo-500 border-r-0 rounded-l-xl text-lg">Previous</button>
		<button className = " p-2 border-2 border-indigo-500 text-indigo-500 border-r-0 bg-gray-300 text-lg" >1</button>
		<button className = " p-2 border-2 border-indigo-500 text-indigo-500 rounded-r-xl text-lg" >Next</button>

	</div>
    </>
  )
}

export default Pagination