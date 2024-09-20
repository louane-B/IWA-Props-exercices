import '@style/Layout.scss'
import TheModal1 from '@components/TheModal1'
import { ChangeEvent, useState } from 'react'

const TheVersion1 = () => {
  const [isJedi, setIsJedi] = useState<boolean>(false)

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsJedi(event.target.checked)
  }

  return (
    <>
      <h2>Premier défi</h2>
      <p>Passe à la modale un boolean qui permet d'afficher un message de jedi ou de seigneur sith</p>
      <p>True : May the Force be with you, young Jedi!</p>
      <p>False : Sorry,you are not a jedi</p>
      <p>La valeur du boolean provient du checkbox plus bas ici : </p>
      <label >Es-tu un jedi??
        <input type="checkbox" name="jedi" onChange={handleCheckboxChange} />
      </label>
      <TheModal1 isJediMessage={isJedi} />
    </>
  )
}

export default TheVersion1
