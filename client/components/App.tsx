import { Link } from 'react-router-dom'
import AppRoutes from './AppRoutes'

function App() {
  return (
    <div>
      <header className="header">
        {/* <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav> */}
      </header>
      <section className="main">
        <AppRoutes />
      </section>
    </div>
  )
}

export default App



