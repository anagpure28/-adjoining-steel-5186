import React from "react";
import "../Styles/Homepage.css";
import { RxHamburgerMenu } from "react-icons/rx";
import line1 from "../Images/Home/line1.png";
// import breakfast from "../Images/Home/breakfast.png"
import sideimg from "../Images/Home/sideimg.png";
// import { Parallax } from "react-parallax"
// import main from "../Images/Home/main.jpg"
// import bg1 from "../Images/Home/bg1.png"
// import bg2 from "../Images/Home/bg2.png"

const HomePage = () => {
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      {/* <Parallax strength={400} bgImage={main}> */}
        {/* Container 1 */}
        <div className="home-main-container">
          <div className="home-div1">
            <RxHamburgerMenu style={{ fontSize: "25px", cursor: "pointer" }} />
            <p>My Recipes</p>
            <button className="home-b1">Find your recipe</button>
          </div>
          <div className="home-div2">
            <p>DELIGHTFUL - EXPERIENCE</p>
            <img src={line1} alt="" />
          </div>
          <div className="home-div3">
            <div>
              <p>Flavors Inspired by the Seasons</p>
            </div>
            <p>Order Online & feel the joy of mouthwatering food</p>
            <button>VIEW OUR MENU</button>
          </div>
          <div className="home-div4">
            <img src={sideimg} alt="" />
          </div>
        </div>
       {/*  </Parallax> */}
        {/* Container 2 */}
        {/* <Parallax strength={400} bgImage={bg1}> */}
        <div className="variety-main-container">
          <div className="variety">
            <p>FLAVOUR FOR ROYALITY</p>
            <img src={line1} alt="" />
          </div>
          <p>We Offer Top Notch</p>
          <div className="variety-offer">
            <p>
              Spicy-Hall offers variety of delicious recipes all over the world
              great authentic taste and quality. We are No.1 restuarant in the
              world.
            </p>
          </div>
          <div className="variety-grid"></div>
        </div>
       {/*  </Parallax> */}
        {/* Container 3 */}
       {/*  <Parallax strength={800} bgImage={bg2}> */}
        <div className="story-main-container">
          <div></div>
        </div>
       {/*  </Parallax> */}
      
    </div>
  );
};

export default HomePage;
