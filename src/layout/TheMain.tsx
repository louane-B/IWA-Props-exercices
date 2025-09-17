import '../style/Layout.scss'
import { Outlet } from 'react-router-dom'

function TheFooter() {
  return (
    <main>
      <Outlet></Outlet>
    </main>
  )
}

export default TheFooter
