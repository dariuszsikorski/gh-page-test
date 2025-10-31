import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { DatePicker } from '../components/DatePicker'
import { today, getLocalTimeZone } from '@internationalized/date'

export function HomeView() {
  return (
    <div className="HomeView">
      <h1>Elegant Minimalist Design</h1>
      <p>A Lightroom-inspired interface showcasing React Aria components with clean typography and refined aesthetics.</p>

      <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '1rem', marginBottom: '1rem', fontWeight: 400, color: '#d0d0d0', letterSpacing: '0.05em' }}>
            DATE PICKER
          </h2>
          <DatePicker
            label="Select Date"
            defaultValue={today(getLocalTimeZone())}
          />
        </div>

        <div>
          <h2 style={{ fontSize: '1rem', marginBottom: '1rem', fontWeight: 400, color: '#d0d0d0', letterSpacing: '0.05em' }}>
            BUTTONS
          </h2>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" size="medium" onPress={() => console.log('Primary clicked')}>
              Primary
            </Button>
            <Button variant="secondary" size="small">Secondary</Button>
            <Button variant="accent" size="large">Accent</Button>
            <Button variant="negative">Delete</Button>
          </div>
        </div>
      </div>

      <nav>
        <Link to="/demo">View Demo Page →</Link>
      </nav>
    </div>
  )
}
