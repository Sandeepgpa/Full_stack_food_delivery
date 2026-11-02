import './App.css'
import Sidebar from './Components/SideBar'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'

function App() {
  return (
    <div>
      <Navbar />
      <hr />
      <div className='flex'>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Add />} />
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
        {/* <Add /> */}
      </div>
    </div>
  )
}

export default App
