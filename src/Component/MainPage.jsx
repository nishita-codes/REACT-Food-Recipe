import { useState } from 'react';
import '../App.css';
import SearchIcon from '@mui/icons-material/Search';
import MealCards from './MealCards';

const MainPage = () => {
  const [data,setData] = useState();
  const [search ,setSearch] =useState("");
  const [msg,setMsg] = useState("");
  const [notFound, setNotFound] = useState(false);

  const handleInput =(event)=>{
    setSearch(event.target.value)
  }

  const myFun = async () => {
    if(search == ""){
      setMsg("Please Enter Something!:)");
      setNotFound(false);
    }else{
    try{
      const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      const data = await get.json();
      // console.log(data); 
      if (data && data.meals && data.meals.length > 0) {
        setData(data.meals);
        setNotFound(false); // Reset notFound when results are found
      } else {
        setData([]); // Clear any previous data
        setNotFound(true);  // Set notFound to true when no results are found
      }
      setMsg("");
    }catch(error){
      setData([]);
      setNotFound(true);
      setMsg("Error fetching data. Please try again later.");
    }
  }
  };
  
  return (
    <>
    <h1 className='head'>FOOD RECIPE APP</h1>
      <div className='container'>
        <div className="searchbar">
          <div className='Search'>
          <SearchIcon className='searchIcon'/>
            <input type="text" placeholder='Enter Dish name' className='SearchInput' onChange={handleInput} />
          </div>
            <button className='btn' onClick={myFun}> Search</button>
        </div>
        <h4 className='msg'>{msg}</h4>
        <h4>{notFound && <p className='notFound'>Data Not Found! Please try a different search term.</p>}</h4>
        <div>
            <MealCards detail={data}/>
            </div>
      </div>
    </>
  )
}

export default MainPage
