import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from '../src/context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
        <Login />
        <br />
        <Profile />
    </UserContextProvider>
  )
}

export default App
