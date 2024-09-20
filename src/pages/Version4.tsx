import '@style/Layout.scss'
import TheModal4 from '@components/TheModal4'
import { ForceWeilder } from '@types/Character'
import Rank from '../types/RankEnum'
import LightSaberColor from '../types/LightSaberColorEnum'
const Luke: ForceWeilder = {
  name: 'Luke Skywalker',
  rank: Rank.GrandMaster,
  forceLevel: 100,
  lightsaberColor: LightSaberColor.Blue
}

function TheVersion4() {
  return (
    <>
      <h2>Quatrième défi</h2>
      <p>Il est maintenant temps de passer un objet dans ta modale!</p>
      <p>En te basant sur le type Force Weilder dans le dossier type, crée un objet json Luke Skywalker</p>
      <p>Ensuite, passe cet objet à la modale</p>
      <p>Une fois que c'est fait, change la couleur du sabre laser en fonction de la couleur contenue dans l'objet</p>
      <p>Dernier point, ajoute un deuxième objet dans ta modale, soit un boolean <code>isSith</code> qui affiche si c'est un sith ou pas</p>
      <TheModal4 character={Luke} isSith={false} />
    </>
  )
}

export default TheVersion4
