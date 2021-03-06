import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './Components/SearchBooks.js'
import BookShelves from './Components/BookShelves.js'
import Shelf from './Components/Shelf.js'



class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

    showSearchPage: false,
    books: [],
    query: ''
  }



  updateSearchPageState = pageView => {
    console.log(this)
    this.setState({showSearchPage : pageView})
  }

  //this function syntax borrowed from https://github.com/JohPik/reactnd-project-myreads-starter/blob/master/src/App.js
  getAllBooks () {
    BooksAPI.getAll()
    .then((books) => this.setState({books: books}))

  }



  componentDidMount() {
    this.getAllBooks()


  }


  changeBookShelf = (book, shelf) => {
      this.setState({
           books : this.state.books.map(b => {
            if(b.id === book.id) {
              b.shelf = shelf
              BooksAPI.update(book, shelf)
              return b
            } else {
              BooksAPI.update(book, shelf)
              return b
            }
      })
    })
  }



  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks showSearchPage={this.updateSearchPageState}/>
        ) : (
          <div className="list-books">

            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <BookShelves allBooks={this.state.books} changeShelf={this.changeBookShelf} updateBook={this.updateBookState}>
            </BookShelves>

            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>

        )}
      </div>
    )
  }
}

export default BooksApp
