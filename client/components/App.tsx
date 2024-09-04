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



