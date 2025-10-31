import { Link } from 'react-router-dom'
import { Button } from '../components/Button'

export function HomeView() {
  return (
    <div className="HomeView">
      <h1>Git page test - Home</h1>
      <p>Welcome to Git page test application</p>

      <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <Button variant="primary" size="medium" onPress={() => console.log('Primary clicked')}>
          New Primary Button
        </Button>
        <Button variant="secondary" size="small">Secondary</Button>
        <Button variant="accent" size="large">Accent</Button>
        <Button variant="negative">Delete</Button>
      </div>

      <nav>
        <Link to="/demo">Go to Demo</Link>
      </nav>
    </div>
  )
}
