import { Routes, Route } from 'react-router-dom'
import Login from './pages/Auth/Login/Login'
import SignUp from './pages/Auth/SignUp/SignUp'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Login />} />
        <Route path='/' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
