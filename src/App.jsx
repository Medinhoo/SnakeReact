import { Rules } from "./Rules"
import { Contact } from "./Contact"
import { Header } from "./Components/Header/Header"
import { Player } from "./Player"
import { BodyPlay } from "./BodyPlay"
import './index.css'
import { RouterProvider, Link, createBrowserRouter } from "react-router-dom"
import { useState } from "react"
import { useSnake } from "./Hooks/useSnake"


const App = () => {

  const [userName, setUserName] = useState('')
  const { score } = useSnake()

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Player score={score} value={userName} onChange={setUserName} />
        </>
      )
    },
    {
      path: "/Play",
      element: (
        <>
          <Header />
          <BodyPlay userName={userName} />
        </>
      )
    },
    {
      path: "/Rules",
      element: (
        <>
          <Header />
          <Rules/>
        </>)
    },
    {
      path: "/Contact",
      element: (
        <>
          <Header />
          <Contact/>
        </>
      )
    },
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
