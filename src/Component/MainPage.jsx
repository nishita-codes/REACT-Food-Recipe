import { useState } from 'react';
import '../App.css';
import SearchIcon from '@mui/icons-material/Search';
import MealCards from './MealCards';

const MainPage = () => {
  const [data,setData] = useState();
  const [search ,setSearch] =useState();

  const handleInput =(event)=>{
    setSearch(event.target.value)
  }

  const myFun = async () => {
    try {
      const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      const data = await get.json();
      // console.log(data); 
      setData(data.meals)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  return (
    <>
      <div className='container'>
        <div className="searchbar">
          <div className='Search'>
          <SearchIcon className='searchIcon'/>
            <input type="text" placeholder='Enter Dish name' className='SearchInput' onChange={handleInput} />
          </div>
            <button className='btn' onClick={myFun}> Search</button>
        </div>
        <div>
            <MealCards detail={data}/>
            </div>
      </div>
    </>
  )
}

export default MainPage
