import { Link } from 'react-router-dom'
import { Button } from '../components/Button'

export function DemoView() {
  return (
    <div className="DemoView">
      <h1>Demo View</h1>
      <p>This is a demo page with react-aria components</p>

      <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column', maxWidth: '300px' }}>
        <Button variant="primary" onPress={() => alert('Primary action')}>
          Primary Button
        </Button>

        <Button variant="secondary" onPress={() => alert('Secondary action')}>
          Secondary Button
        </Button>
      </div>

      <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="accent">Accent</Button>
        <Button variant="negative">Negative</Button>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>

      <nav style={{ marginTop: '2rem' }}>
        <Link to="/">Back to Home</Link>
      </nav>
    </div>
  )
}
