import { Route, Routes } from 'react-router-dom';
import './App.scss'
import { Login } from './components/pages/Login'
import { Home } from './components/pages/Home'
import { Summary } from './components/pages/Summary';
import { UserProvider } from './context/UserProvider';
import { PlanProvider } from './context/PlanProvider';


function App() {
  

  return (
    <>
      <UserProvider>
      <PlanProvider>
        <Routes>
          <Route path='/' element={<Login />} />    
          <Route path='/cotiza' element={<Home />} />
          <Route path='/resumen' element={<Summary />} />
        </Routes>
        </PlanProvider>
      </UserProvider>
      {
        /*   
        */
      }
    </>
  )
}

export default App
