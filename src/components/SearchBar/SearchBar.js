import React, { useContext, useState } from "react"
import { QueryContext } from "../../context/QueryContext"
import "./SearchBar.css"
import { useHistory } from "react-router-dom"

const SearchBar = () => {
  const [book, setBook] = useState("")
  const { dispatch } = useContext(QueryContext)
  const history = useHistory()

  const handleSubmit = event => {
    event.preventDefault()
    dispatch({type: 'ADD_BOOK_TITLE', bookTitle: book})
    history.push(`/search/${book}`)
    setBook("")
  }

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={event => handleSubmit(event)}>
        <input
          className="search-input"
          type="text"
          placeholder="Search for a book..."
          value={book}
          onChange={event => setBook(event.target.value)}
        />
      </form>
    </div>
  )
}

export default SearchBar
