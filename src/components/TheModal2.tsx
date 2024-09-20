import '@style/Modal.scss'
import { useState } from 'react'

interface propsInterface { message: string }

const TheModal = ({ message }: propsInterface) => {
  const [styleDisplayModale, setStyleDisplayModale] = useState({})

  const handleclose = () => {
    setStyleDisplayModale({ display: 'none' })
  }
  return (
    <div className="modal" style={styleDisplayModale}>
      <div className="modal-content">
        <span className="close" onClick={handleclose}>&times;</span>
        <h3>{message}</h3>
      </div>
    </div>
  )
}

export default TheModal