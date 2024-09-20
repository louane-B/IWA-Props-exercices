import '@style/Layout.scss'
import { Link } from 'react-router-dom'

function TheHeader() {
  return (
    <header className='border-bottom'>
      <h1>Exercices sur les props. Bonne chance jeune padawan</h1>
      <div>
        <ul className="flex-between">
          <Link to="/">Home</Link>
          {Array.from({ length: 5 }, (_, i) => (
            <Link to={`/version${i + 1}`} key={i}>Exercice {i + 1}</Link>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default TheHeader
