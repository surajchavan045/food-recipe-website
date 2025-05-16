import viteLogo from '/vite.svg'
import './App.css'
import Mainpage from './component/Mainpage'
import { Route,Routes } from 'react-router-dom'
import MealInfo from './component/MealInfo'

function App() {

  return (
    //<Mainpage/>
    <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/:mealid' element={<MealInfo/>}/>
    </Routes>
  )
}

export default App
