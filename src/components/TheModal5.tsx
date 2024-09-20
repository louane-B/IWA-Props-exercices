import '@style/Modal.scss'
import { useState } from 'react'
import CharacterCard from '@components/ACharacterCard'
import { ForceWeilder } from '../types/Character'

interface propsInterface {
  character: ForceWeilder,
  onNext: () => void,
  onPrevious: () => void
}

const TheModal = ({ character, onNext, onPrevious }: propsInterface) => {
  const handleNext = () => {
    onNext()
  }

  const handlePrevious = () => {
    onPrevious()
  }
  const [styleDisplayModale, setStyleDisplayModale] = useState({})

  const handleclose = () => {
    setStyleDisplayModale({ display: 'none' })
  }
  return (
    <div className="modal" style={styleDisplayModale}>
      <div className="modal-content">
        <CharacterCard character={character} />
        <div className="flex-between">
          <button onClick={handlePrevious}>Précédent</button>
          <button onClick={handleNext}>Suivant</button>
        </div>
      </div>
    </div>
  )
}

export default TheModal