import '@style/Modal.scss'


// Retire les lignes en commentaire pour passer un boolean en props
// et afficher un message de jedi ou de seigneur sith
// pour passer la valeur du boolean dans le composant, tu peux demander à chatgpt ;)
// interface propsInterface { isJediMessage: boolean }

// const TheModal = ({ isJediMessage }: propsInterface) => {
const TheModal = () => {

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>May the force be with you</h3>
        <h3>Sorry, you are not a Jedi</h3>
      </div>
    </div>
  )
}

export default TheModal