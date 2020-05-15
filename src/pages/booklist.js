import React, {
  createContext,
  useState,
  useContext,
  useReducer,
  useEffect,
} from "react"

import "../styles/booklist.css"

import { v4 as uuidv4 } from "uuid"
import DefaultLayout from "../layouts"

const bookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        { title: action.book.title, author: action.book.author, id: uuidv4() },
      ]

    case "REMOVE_BOOK":
      return state.filter(book => book.id !== action.id)

    default:
      return state
  }
}

const BookContext = createContext()

const BookContextProvider = ({ children }) => {
  const windowGlobal = typeof window !== "undefined" && window
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localStorage = windowGlobal.localStorage
    if (!localStorage) {
      return []
    }
    const localData = localStorage.getItem("books")
    return localData ? JSON.parse(localData) : []
  })

  useEffect(() => {
    windowGlobal.localStorage.setItem("books", JSON.stringify(books))
  }, [books])

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  )
}

const NavBar = () => {
  const { books } = useContext(BookContext)
  return (
    <div className="navbar">
      <h1>Reading List</h1>
      <p>Currently {books.length} books </p>
    </div>
  )
}

const BookForm = () => {
  const { dispatch } = useContext(BookContext)
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const handleSubmit = e => {
    e.preventDefault()
    dispatch({ type: "ADD_BOOK", book: { title, author } })
    setTitle("")
    setAuthor("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        required
        onChange={e => {
          setTitle(e.target.value)
        }}
      />
      <input
        type="text"
        placeholder="Book Author"
        value={author}
        required
        onChange={e => {
          setAuthor(e.target.value)
        }}
      />
      <input type="submit" value="Add Book" />
    </form>
  )
}

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext)
  return (
    <li
      onClick={() => {
        dispatch({ type: "REMOVE_BOOK", id: book.id })
      }}
    >
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  )
}

const BookList = () => {
  const { books } = useContext(BookContext)
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map(book => {
          return <BookDetails book={book} key={book.id} />
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to read. Hello free time!</div>
  )
}

function App() {
  return (
    <DefaultLayout>
      <div className="App">
        <BookContextProvider>
          <NavBar />
          <BookList />
          <BookForm />
        </BookContextProvider>
      </div>
    </DefaultLayout>
  )
}

export default App
