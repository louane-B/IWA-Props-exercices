import '@style/Modal.scss'
import { useState } from 'react'
import CharacterCard from '@components/ACharacterCard'
import { ForceWeilder } from '../types/Character'

interface propsInterface { character: ForceWeilder, isSith: boolean }

const TheModal = ({ character, isSith }: propsInterface) => {
  const [styleDisplayModale, setStyleDisplayModale] = useState({})

  const handleclose = () => {
    setStyleDisplayModale({ display: 'none' })
  }
  return (
    <div className="modal" style={styleDisplayModale}>
      <div className="modal-content">
        <CharacterCard character={character} />
        {isSith && <p>c'est un sith</p>}
      </div>
    </div>
  )
}

export default TheModal