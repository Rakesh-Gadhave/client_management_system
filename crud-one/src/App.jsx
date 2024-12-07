import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ClientDetails from './components/ClientDetails'
import Navbar from './components/Navbar'
import ClientForm from './components/ClientForm'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import ErrorPage from './components/ErrorPage.jsx'
import UpdateData from './components/UpdateData.jsx'
import DeleteData from './components/DeleteData.jsx'

function App() {

  return (
    <div className='w-100 m-0'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ClientForm/>} />
          <Route path='/clientform' element={<ClientForm/>} />
          <Route path='/clientdetails' element={<ClientDetails/>} />
          <Route path='/updatedata/:clientId' element = {<UpdateData/>}/>
          <Route path='/deletedata/:clientId' element={<DeleteData/>}/>
          <Route path='*' element = {<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
