import '@style/Jedi.scss'
import '@style/Modal.scss'
import Jedi from '@assets/jedi.svg'
import LaserHole from '@assets/LaserHole.svg'

const TheModal = () => {

  return (
    <div className="modal">
      <div className="modal-content">
        <div className='jedi'>
          <img src={Jedi} />
          <img
            className='shot'
            style={{ left: `${0}%`, top: `${0}%` }}
            src={LaserHole}
          />
        </div>
      </div>
    </div>
  )
}

export default TheModal