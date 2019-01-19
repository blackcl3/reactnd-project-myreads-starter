import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router-dom'
import Shelf from './Shelf.js'

class BookShelves extends React.Component {

	render() {
		const allBooks = this.props.allBooks;
		console.log("Am here", allBooks)
		const currentlyReading = allBooks.filter(book => book.shelf === 'currentlyReading')
		const wantToRead = allBooks.filter(book => book.shelf === 'wantToRead')
		const read = allBooks.filter(book => book.shelf === 'read')
		return (

				<div>
					<Shelf books={currentlyReading} title={"Currently Reading"} changeShelf={this.props.changeShelf}/>
					<Shelf books={wantToRead} title={"Want to Read"} changeShelf={this.props.changeShelf}/>
					<Shelf books={read} title={"Read"} changeShelf={this.props.changeShelf}/>
				</div>

		)
	}
}

export default BookShelves