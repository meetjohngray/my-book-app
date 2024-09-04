import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import BookList from './BookList'
import Home from './Home'
import About from './About'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<BookList />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </section>
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App
import React from 'react'

function Home() {
  return (
    <div>
      <h2>Welcome to My Books</h2>
      <p>This is a simple application to manage and view your book collection.</p>
    </div>
  )
}

export default Home
import React from 'react'

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
