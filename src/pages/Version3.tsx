import '@style/Layout.scss'
import TheModal3 from '@components/TheModal3'
import { useState } from 'react'
import { LaserPosition } from '@types/LaserPosition'

const TheVersion3 = () => {
  const [laserHoles, setLaserHoles] = useState<LaserPosition[]>([])

  const handleShoot = () => {
    let x = 45
    let y = 11

    while ((x >= 45 && x <= 55) && (y >= 11 && y <= 70)) {
      x = Math.random() * 98
      y = Math.random() * 95
    }

    setLaserHoles([...laserHoles, { x, y }])
  }
  return (
    <>
      <h2>Troisième défi défi</h2>
      <p>Notre jedi est attaqué! Chaque fois qu'on clic, un rond brulé de laser apparaît dans la fenêtre.</p>
      <p>Attention! Les lasers ne doivent pas toucher luke!</p>
      <p>Tout le code sera dans la modale</p>
      <button onClick={handleShoot}>SHOOT</button>
      <TheModal3 laserHoles={laserHoles} />
    </>
  )
}

export default TheVersion3
