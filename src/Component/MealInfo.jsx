import React, { useState } from 'react'
import {NavLink, useParams} from 'react-router-dom';

const MealInfo = () => {
    const {mealid} = useParams();
    const [info,setInfo] =useState();

    const getInfo = async() =>{
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const jsonData = await get.json();
        console.log(jsonData.meals[0]);
        setInfo(jsonData.meals[0]);
    }
    if(info != ""){
        getInfo();
    }
  return (
    <div>
        {
        !info ? "Data Not Found" : 
        <div className='mealInfo'>
      <img src={info.strMealThumb} alt=""  />
      <div className='info'>
        <h1>Recipe Detail</h1>
        <button>{info.strMeal}</button>
        <h3>Instruction's</h3>
        <p>{info.strInstructions}</p>
      </div>
      <NavLink to="/" className="backBtn">
         <button>Go Back</button>
       </NavLink>
    </div>
    }
    </div>
    
  )
}

export default MealInfo
