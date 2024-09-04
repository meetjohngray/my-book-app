import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import BookList from './BookList'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<BookList />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
