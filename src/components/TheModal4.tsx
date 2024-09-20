import '@style/Modal.scss'
import ACharacterCard from '@components/ACharacterCard'

const TheModal = () => {
  return (
    <div className="modal">
      <div className="modal-content">
        <ACharacterCard />
        <p>c'est un sith (ou pas, on ne m'a pas encore passé de props boolean)</p>
      </div>
    </div>
  )
}

export default TheModal