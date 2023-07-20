import React from "react";
import "../Styles/Homepage.css";
import { RxHamburgerMenu } from "react-icons/rx";
import line1 from "../Images/Home/line1.png";
// import breakfast from "../Images/Home/breakfast.png"
import sideimg from "../Images/Home/sideimg.png";
import img5 from "../Images/Home/img5.jpg";
import pancake from "../Images/Home/pancake.jpeg";
import egg from "../Images/Home/Egg.jpg";
import beaf from "../Images/Home/beaf.jpg";
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
        <div className="variety-grid">
          <div>
            <div>
              <img src={img5} alt="" />
              <p>APPETIZERS</p>
              <p>VIEM MENU</p>
            </div>
          </div>
          <div>
            <div className="variety">
              <p>FLAVOUR FOR ROYALITY</p>
              <img src={line1} alt="" />
            </div>
            <p>We Offer Top Notch</p>
            <div className="variety-offer">
              <p>
                Spicy-Hall offers variety of delicious recipes all over the
                world great authentic taste and quality. We are No.1 restuarant
                in the world.
              </p>
            </div>
            <div className="grid-2">
              <img src={pancake} alt="" />
              <p>DESSERTS</p>
              <p>VIEM MENU</p>
            </div>
          </div>
          <div>
            <div>
              <img src={egg} alt="" />
              <p>BREAKFAST</p>
              <p>VIEM MENU</p>
            </div>
          </div>
        </div>
      </div>
      {/*  </Parallax> */}
      {/* Container 3 */}
      {/*  <Parallax strength={800} bgImage={bg2}> */}
      <div className="story-main-container">
        <div className="story-cont1">
          <div className="story-div1">
            <p>OUR STORY</p>
            <img src={line1} alt="" />
            <p>Every Flavour Tells a Story</p>
            <p>
              A strong restaurant identity, hiring and retaining your staff and
              building a supportive environment, familiarizing yourself with
              profit and loss statements, creating a profitable menu (and
              learning how to market your best-selling items) are just some of
              the key elements of successful restaurants.
            </p>
            <div className="story-book">
              <p>Book Through Call</p>
              <p>+80 (400) 123 4567</p>
              <button>READ MORE</button>
            </div>
          </div>
          <div className="story-div2">
            <div className="story-img-div1">
              <img
                src="https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?cs=srgb&dl=pexels-on-shot-2788792.jpg&fm=jpg"
                alt=""
              />
              <div className="img-div2">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2023/6/319168521/KK/ZI/PT/148640419/hire-professional-chef-for-restaurant.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  </Parallax> */}
      {/* Container 4 */}
      {/* <Parallax strength={400} bgImage={bg1}> */}
      <div className="bg-container">
        <div className="bg-flex">
          <div>
            <img src={beaf} alt="" />
          </div>
          <div className="special-dish">
              <div>
                <p>SPECIAL DISH</p>
                <img src={line1} alt="" />
              </div>
              <div>
                <p>ROASTED BEEF</p>
                <p>There’s a reason beef has a regular place in our weekly meal plans (several reasons, actually!). Beef is an incredibly versatile and affordable option (depending on how you shop) that can be cooked into many different types of dinners. Make the most of beef cuts in various recipes. Use mince for cottage pie, stewing cuts for one-pots like beef stroganoff and fillets or sirloins for a Sunday roast.</p>
                <button>VIEW ALL MENU</button>
                </div>
          </div>
        </div>
      </div>
      {/*  </Parallax> */}
    </div>
  );
};

export default HomePage;
