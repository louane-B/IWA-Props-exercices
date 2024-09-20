import '@style/Layout.scss'
import TheModal3 from '@components/TheModal3'

const getLaserHolePosition = () => {
  let x = 45
  let y = 11

  while ((x >= 45 && x <= 55) && (y >= 11 && y <= 70)) {
    x = Math.random() * 98
    y = Math.random() * 95
  }
  return { x, y }
}

const TheExercice3 = () => {
  const handleShoot = () => {
    let { x, y } = getLaserHolePosition()

  }
  return (
    <>
      <h2>Troisième défi défi</h2>
      <p>Ici, tu dois envoyer un tableau de LaserPositions dans la fenêtre modale.</p>
      <p>Tu dois donc déclarer un variable avec useState qui est un tableau vide de LaserPositions</p>
      <p>Tu dois ensuite afficher le tableau de trous de lasers avec le .map</p>
      <p>Chaque clic ajoute un nouveau laserHole dans le tableau</p>
      <button onClick={handleShoot}>SHOOT</button>
      <TheModal3 />
    </>
  )
}

export default TheExercice3
