import '@style/App.scss'
import TheHeader from '@layout/TheHeader'
import TheFooter from '@layout/TheFooter'
import TheMain from '@layout/TheMain'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TheExercice1 from './pages/TheExercice1'
import TheExercice2 from './pages/TheExercice2'
import TheExercice2Point5 from './pages/TheExercice2Point5'
import TheExercice3 from './pages/TheExercice3'
import TheExercice4 from './pages/TheExercice4'
import TheExercice5 from './pages/TheExercice5'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={TheLayout()} >
          <Route path="/exercice1" element={<TheExercice1 />} />
          <Route path="/exercice2" element={<TheExercice2 />} />
          <Route path="/exercice2point5" element={<TheExercice2Point5 />} />
          <Route path="/exercice3" element={<TheExercice3 />} />
          <Route path="/exercice4" element={<TheExercice4 />} />
          <Route path="/exercice5" element={<TheExercice5 />} />
        </Route>
      </Routes >
    </BrowserRouter >
  )
}

const TheLayout = () => {
  return (
    <div className='flex-between flex-column fill-height'>
      <TheHeader />
      <TheMain />
      <TheFooter />
    </div>
  )
}


export default App
