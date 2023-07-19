import React from 'react'
import "../Styles/Homepage.css";
import { RxHamburgerMenu } from "react-icons/rx";
import line1 from "../Images/line1.png";
import sideimg from "../Images/sideimg.png"

const HomePage = () => {

  return (
    <div style={{backgroundColor:"black", color: "white"}}>
      <div className="home-main-container">
        <div className='home-div1'>
            <RxHamburgerMenu style={{fontSize:"25px",cursor: "pointer"}}/>
            <p>My Recipes</p>
            <button className='home-b1'>Find your recipe</button>
        </div>
        <div className='home-div2'>
          <p>DELIGHTFUL - EXPERIENCE</p>
          <img src={line1} alt="" />
        </div>
        <div className='home-div3'>
          <div>
            <p>Flavors Inspired by the Seasons</p>
          </div>
          <p>Order Online & feel the joy of mouthwatering food</p>
          <button>VIEW OUR MENU</button>
        </div>
        <div className='home-div4'>
          <img src={sideimg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HomePage
