import '@style/CharacterCard.scss'
import { ForceWeilder } from '../types/Character'
import ALightSaber from './ALightSaber'

interface propsInterface { character: ForceWeilder }

const CharacterCard = ({ character }: propsInterface) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="name">{character.name}</h2>
        <p><span className="info-title">Lightsaber:</span>
          <ALightSaber color={character.lightsaberColor} />
        </p>
        <p><span className="info-title">Rank:</span> {character.rank}</p>
        <p><span className="info-title">Force Level:</span> {character.forceLevel}</p>
      </div>
    </div>
  )
}

export default CharacterCard