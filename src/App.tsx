import { Outlet } from "react-router-dom"
import ProtectedRoute from "./routes/ProtectedRoute"
import { Header } from "./components/Layout/Header"

function App() {

  return (
    <ProtectedRoute >
      <Header/>
      <Outlet />
    </ProtectedRoute>
  )
}

export default App
