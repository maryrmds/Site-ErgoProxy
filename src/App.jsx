import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Historia from "./pages/Historia"
import Sinopse from "./pages/Sinopse"

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Header />

  },
  {
    path: "/",
    element: <Historia />

  },
  {
    path: "/",
    element: <Principais />

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