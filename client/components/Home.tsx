import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h2>About My Books</h2>
      <p>My Books is a web application designed to help book enthusiasts manage their personal library.</p>
      <Outlet />
    </div>
  )
}

export default Home