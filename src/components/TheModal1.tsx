import '../style/Modal.scss'


// Retire les lignes en commentaire pour passer un boolean en props
// et afficher un message de jedi ou de seigneur sith
 interface PropsInterface { isJediMessage: boolean }

const TheModal = ({ isJediMessage }: PropsInterface) => {
  return (
    <div className="modal">
      <div className="modal-content">
        {isJediMessage ? (
          <h3>May the force be with you</h3>
        ) : (
          <h3>Sorry, you are not a Jedi</h3>
        )}

      </div>
    </div>
  )
}
export default TheModal