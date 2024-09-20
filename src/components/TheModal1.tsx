import '@style/Modal.scss'
import { useState } from 'react'

// interface propsInterface { isJediMessage: boolean }

// const TheModal = ({ isJediMessage }: propsInterface) => {
const TheModal = ({ isJediMessage }: { isJediMessage: boolean }) => {
  const [styleDisplayModale, setStyleDisplayModale] = useState({})

  const handleclose = () => {
    setStyleDisplayModale({ display: 'none' })
  }
  return (
    <div className="modal" style={styleDisplayModale}>
      <div className="modal-content">
        <span className="close" onClick={handleclose}>&times;</span>
        <h3>{isJediMessage ? <>May the force be with you</> : <>Sorry, you are not a Jedi</>}</h3>
      </div>
    </div>
  )
}

export default TheModal