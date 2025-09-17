import '../style/Layout.scss'
import TheModal2 from '../components/TheModal2'

const TheExercice2 = () => {
  return (
    <>
      <h2>Deuxième défi défi</h2>
      <p>Au lieu de passer un boolean qui décide du type de message, passe simplement une string.</p>
      <p>Ton code sera plus simple à lire et plus facilement réutilisable.</p>
      <p>True : May the Force be with you, young Jedi!</p>
      <p>False : Sorry,you are not a jedi</p>
      <label >Es-tu un jedi??
        <input type="checkbox" name="jedi" />
      </label>
      <TheModal2 />
    </>
  )
}

export default TheExercice2
