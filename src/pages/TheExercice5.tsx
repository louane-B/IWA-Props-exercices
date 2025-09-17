import '../style/Layout.scss'
import TheModal5 from '@components/TheModal5'
import Rank from '../types/RankEnum'
import LightSaberColor from '../types/LightSaberColorEnum'
import { ForceWeilder } from '../types/Character'
import { useState } from 'react'
const characters: ForceWeilder[] = [
  {
    name: 'Luke Skywalker',
    rank: Rank.GrandMaster,
    forceLevel: 100,
    lightsaberColor: LightSaberColor.Blue
  },
  {
    name: 'Darth Vader',
    rank: Rank.SithLord,
    forceLevel: 100,
    lightsaberColor: LightSaberColor.Red
  },
  {
    name: 'Yoda',
    rank: Rank.Master,
    forceLevel: 100,
    lightsaberColor: LightSaberColor.Green
  },
  {
    name: 'Obi-Wan Kenobi',
    rank: Rank.Master,
    forceLevel: 100,
    lightsaberColor: LightSaberColor.Blue
  }
]

function TheExercice5() {
  const [index, setIndex] = useState(0)
  const handleNext = () => {
    setIndex((index + 1) % characters.length)
  }

  const handlePrevious = () => {
    setIndex(index - 1 < 0 ? characters.length - 1 : index - 1)
  }
  return (
    <>
      <h2>Cinquième défi défi</h2>
      <p>I'ts caroussel time!</p>
      <p>À l'aide des boutons, tu dois changer de personnage</p>
      <p>Afin de t'aider à réussir ce travail, tu dois passer une fonction.</p>
      <p>Oui oui! Cette dernière te permettra de changer de personnage en fonction de l'évènement que tu vas capter ici.</p>
      <p>Quand une fonction appelle un parent, on appel ça "bubble up" comme une bulle qui remonte</p>
      <p>Ton interface devra avoir un objet de type fonction. Comme ceci : <code>onNext: () =&gt; void</code></p>
      <p>Comme tu peux remarquer, ça fait penser à onClick!</p>
      <p>Dernier point, dans ton composant, tu passeras le character ainsi <code>character[index]</code></p>
      <TheModal5 />
    </>
  )
}

export default TheExercice5