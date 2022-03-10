import React, {useState} from 'react'

function Pagination() {
  
	
  const [pageNumber,setPage] = useState(1);
  function goAhead(){
	  setPage(pageNumber+1);
  }
  function goBehind(){
	  if(pageNumber > 1){
		  setPage(pageNumber-1);
	  }
  }

  return (
    <>
    	<div className = "w-full flex justify-center mb-8">
		<button className = " p-2 border-2 border-indigo-500 text-indigo-500 border-r-0 rounded-l-xl text-lg" onClick = {goBehind}>Previous</button>
		<button className = " p-2 border-2 border-indigo-500 text-indigo-500 border-r-0 bg-gray-300 text-lg" >{pageNumber}</button>
		<button className = " p-2 border-2 border-indigo-500 text-indigo-500 rounded-r-xl text-lg" onClick = {goAhead}>Next</button>

	</div>
    </>
  )
}

export default Pagination