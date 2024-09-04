import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import BookList from './BookList'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <header className="header">
        <h1>My Books</h1>
      </header>
      <section className="main">
        <BookList />
      </section>
    </QueryClientProvider>
  )
}

export default App
