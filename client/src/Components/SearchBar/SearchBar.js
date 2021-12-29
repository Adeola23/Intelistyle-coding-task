import React from 'react'
import './SearchBar.css'

const SearchBar = ({placeholder}) =>{
    return (
            <div className="searchInput">
                <input className="search" type="text" placeholder={placeholder}/>
                <div className="searchIcon"> </div>
            </div>
    )
}

export default SearchBar