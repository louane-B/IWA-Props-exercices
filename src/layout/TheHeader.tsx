import '../style/Layout.scss'
import { Link } from 'react-router-dom'

function TheHeader() {
  return (
    <header className='border-bottom'>
      <h1>Exercices sur les props. Bonne chance jeune padawan</h1>
      <div>
        <ul className="flex-between">
          <Link to="/">Home</Link>
          {Array.from({ length: 5 }, (_, i) => (
            (i === 2)
              ?
              <>
                <Link to={`/exercice2point5`} key={"over9000"}>Exercice 2.5</Link>
                <Link to={`/exercice${i + 1}`} key={i}>Exercice {i + 1}</Link>
              </>
              :
              <Link to={`/exercice${i + 1}`} key={i}>Exercice {i + 1}</Link>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default TheHeader
