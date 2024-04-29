import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Historia from "./assets/pages/Historia";
import Sinopse from "./assets/pages/Sinopse";


const router = createBrowserRouter ([
  {
    path: "/historia",
    element: <Historia />

  },

  {
    path: "/",
    element: <Sinopse />

  },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App