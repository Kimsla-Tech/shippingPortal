import { Routes, Route } from 'react-router-dom'
import SignIn from './pages/Auth/SignIn/SignIn'
import SignUp from './pages/Auth/SignUp/SignUp'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
