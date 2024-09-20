import '@style/App.scss'
import TheHeader from '@layout/TheHeader'
import TheFooter from '@layout/TheFooter'
import TheMain from '@layout/TheMain'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TheVersion1 from './pages/Version1'
import TheVersion2 from './pages/Version2'
import TheVersion3 from './pages/Version4'
import TheVersion4 from './pages/Version4'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={TheLayout()} >
          <Route path="/version1" element={<TheVersion1 />} />
          <Route path="/version2" element={<TheVersion2 />} />
          <Route path="/version3" element={<TheVersion3 />} />
          <Route path="/version4" element={<TheVersion4 />} />
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
