import '@style/Modal.scss'
import ACharacterCard from '@components/ACharacterCard'

const TheModal = () => {
  const handleNext = () => {
    // Ici, tu dois appeler la fonction onNext
  }

  const handlePrevious = () => {
    // Ici, tu dois appeler la fonction onPrevious
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <ACharacterCard />
        <div className="flex-between">
          <button onClick={handlePrevious}>Précédent</button>
          <button onClick={handleNext}>Suivant</button>
        </div>
      </div>
    </div>
  )
}

export default TheModal