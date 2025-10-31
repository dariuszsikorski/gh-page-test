import './index.scss'
import { Routes, Route } from 'react-router-dom'
import { routes } from './routes'

function App() {
  return (
    <div className="App">
      <header className="App_header">
        <h1>Git page test</h1>
      </header>
      <main className="App_main">
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
    </div>
  )
}

export default App
