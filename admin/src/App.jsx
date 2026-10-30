import './App.css'
import Sidebar from './Components/SideBar'
import Navbar from './pages/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
      </div>
    </div>
  )
}

export default App
