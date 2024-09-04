import { Link } from 'react-router-dom'
import AppRoutes from './AppRoutes'

function App() {
  return (
    <div>
      <header className="header">
        <h1>My Books</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </header>
      <section className="main">
        <AppRoutes />
      </section>
    </div>
  )
}

export default App
import { Routes, Route } from 'react-router-dom'
import BookSortAndFilter from './BookSortAndFilter'
import Home from './Home'
import About from './About'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<BookSortAndFilter />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default AppRoutes
function Home() {
  return (
    <div>
      <h2>Welcome to My Books</h2>
      <p>This is a simple application to manage and view your book collection.</p>
    </div>
  )
}

export default Home
function About() {
  return (
    <div>
      <h2>About My Books</h2>
      <p>My Books is a web application designed to help book enthusiasts manage their personal library.</p>
      <p>Created with React, Express, and SQLite.</p>
    </div>
  )
}

export default About
