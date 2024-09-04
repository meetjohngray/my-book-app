import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h2>My Books</h2>
      <p>Welcome to My Books, a web application designed to help book enthusiasts manage their personal library.</p>
      <Outlet />
    </div>
  )
}

export default Home
