import React,{useEffect, useState} from 'react'
import Recipe from './component/Recipe'
import './App.css';



export default function App() {


  const APP_ID = '0d8202da'
  const APP_KEY ='236550a6a57279096db08f5356ce7b59'

 


  const [recipes,setRecipe] = useState([])
  const [search,setSearch] = useState("")
  const [query,setQuery] = useState("chicken")

  useEffect(()=>{
    async function getRecipes() {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipe(data.hits)
    
  }
    getRecipes()
  },[query])

  

  const getChange =(e)=>{
    setSearch(e.target.value)
  }

  const passSearch=(e)=>{
    e.preventDefault();
    setQuery(search)
  }




  return (
    <div className='text-center'>
      <form className="" onSubmit={passSearch}>
        <input type='search' placeholder='Enter food name' onChange={getChange}/>
        <button type='submit' className='p-1 btn btn-outline-light text-dark'>Search</button>
      </form>
      <div className='d-flex justify-content-center flex-wrap'>
        {recipes.map((recipe,i)=>(
        <Recipe key={i}
        Label={recipe.recipe.label}
        Image={recipe.recipe.image}
        ingredient={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  )
}
