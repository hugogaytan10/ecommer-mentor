import './App.css'
import { Feed } from './Components/feed'
import { MyProvider } from './Components/MyContext'
import { Nav } from './Components/Nav'
import { NavPc } from './Components/NavPc'

function App() {

  return (
    <MyProvider>
      {window.screen.width < 500 ? <Nav /> : <NavPc/>}
      <Feed />
    </MyProvider>
  )
}

export default App
