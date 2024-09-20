import '@style/Jedi.scss'
import '@style/Modal.scss'
import Jedi from '@assets/jedi.svg'
import LaserHole from '@assets/LaserHole.svg'
import { useState } from 'react'
import { LaserPosition } from '@types/LaserPosition'

interface PropsInterface { laserHoles: LaserPosition[] }

const TheModal = ({ laserHoles }: PropsInterface) => {

  return (
    <div className="modal">
      <div className="modal-content">
        <div className='jedi'>
          <img src={Jedi} />
          {laserHoles.map((hole, index) => {
            return (
              <img key={index}
                className='shot'
                style={{ left: `${hole.x}%`, top: `${hole.y}%` }}
                src={LaserHole}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TheModal