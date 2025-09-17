import '../style/CharacterCard.scss'
import ALightSaber from './ALightSaber'
import LightSaberColor from '../types/LightSaberColorEnum'

const ACharacterCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="name">L'INFO DE TON CHARACTER</h2>
        <p><span className="info-title">Lightsaber:</span>
          <ALightSaber color={LightSaberColor.Green} />
        </p>
        <p><span className="info-title">Rank:</span> L'INFO DE TON CHARACTER</p>
        <p><span className="info-title">Force Level:</span> L'INFO DE TON CHARACTER</p>
      </div>
    </div>
  )
}

export default ACharacterCard