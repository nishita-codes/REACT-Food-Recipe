import './App.css';
import MainPage from './Component/Mainpage';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import MealInfo from './Component/MealInfo';

export default function App() {
  return (
    
    //  <MainPage/>
     <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/:mealid' element={<MealInfo/>}/>
     </Routes>
   
  )
}
