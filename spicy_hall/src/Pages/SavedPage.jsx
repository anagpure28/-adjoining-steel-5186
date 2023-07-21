import React from 'react'
import { styled } from 'styled-components'
import styles from '../Css/SavedPage.module.css';
import PostCard from '../Components/PostCard';
import SavedCard from '../Components/SavedCard';
const SavedPage = () => {
    const storedData = localStorage.getItem("spicy_hall")|| [];;

    let savedData =  JSON.parse(storedData) 
    console.log(savedData,"saved")
  return (
    <Div className={`${styles.SavedPage}`}>
        <div><h1>My Recipes</h1></div>
  <div className='savedCardsContainer'>
    {savedData.map((el)=>{
        return <SavedCard {...el}/>
    })}
  </div>
    </Div>
  )
}

export default SavedPage
const Div=styled.div`
color: #E4C590;
h1{
    font-size: 2.5rem;
}
.savedCardsContainer{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 25px;
}



`