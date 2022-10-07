import React from 'react';
import './App.css';


function Explore() {
	return (
		<>
		<form id="form" role="search">
  <input type="search" id="query" name="q"
   placeholder="Search..."
   aria-label="Search through site content"/>
  <button>Search</button>
</form>
</>
	)
}

export default Explore

