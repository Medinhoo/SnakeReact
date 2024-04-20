import { Header } from "./Header/Header"
import { Canvas } from "./Canvas/Canvas"
import './index.css'

function App() {

  return (
  <>
    <Header/>
    <Canvas rows={40} columns={40} startX={0} startY={2}/>
  </>
  )
}

export default App
