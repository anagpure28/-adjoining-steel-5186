import React, { useEffect, useState } from "react";
import styled from "styled-components";
import styles from "../Css/Products.module.css";
import axios from "axios";
import PostCard from "../Components/PostCard";
const Products = () => {
  const [posts, SetPosts] = useState([]);

  const Url = "http://localhost:3000/data";

  const getPosts = async () => {
    try {
      axios.get(`${Url}`).then((res) => {
        SetPosts((pre) => [...res.data, ...res.data, ...res.data]);
      });
    } catch (err) {
      console.log(err);
    }
  };
  console.log(posts);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className={`${styles.FullProductsPage}`}>
      <div className={`${styles.ProductsPageSideBar}`}>
        SideBar
      </div>
    <Div className={`${styles.ProductsPage}`}>
      <div className={`${styles.ProductsPost}`}>
        <button id="postButton">
          {" "}
          Whats on your mind? Share your receipies now!!
          <div id="PostIcons">
            <i style={{ width: "1.5rem" }} class="fa-solid fa-camera"></i>
            <i style={{ width: "1.5rem" }} class="fa-solid fa-video"></i>
            <i style={{ width: "1.5rem" }} class="fa-solid fa-share"></i>
          </div>
        </button>
      </div>
      <h1 id="ProductpageTitle">Explore our new menus. . . </h1>

      <div id="anchor">
        <a href=""> Veg</a>
        <h2 style={{color:"#e4c590",fontSize:"30px"}}>|</h2>
        <a href="">Non-Veg</a>
      </div>

      <div className={`${styles.PostsCardContainer}`}>
        {posts.map((el) => {
          return <PostCard {...el} />;
        })}
      </div>
    </Div>
    </div>
  );
};

export default Products;

const Div = styled.div`
  #ProductpageTitle {
    width: 70%;
    justify-content: center;
    /* border-top: 1px solid #e4c59066; */
    font-family: "Tangerine", cursive;
    font-size: 4rem;
    font-weight: 100;
    padding-top: 50px;
    padding-bottom: 30px;
    margin: auto;
  }
  #ProductpageTitle > h1 {
    margin: auto;
    justify-content: center;
  }
  a {
    color: #e4c590;
    font-size: 30px;
    text-decoration: none;
  }
  #anchor {
    width: 20%;
    justify-content: space-evenly;
    display: flex;
    margin: auto;
    align-items: center;
    padding-bottom: 20px;
  }

  #postButton {
    width: 70%;
    color: #e4c590c2;
    height: 7rem;
    background-color: #e4c59027;
    font-size: 2.5rem;
    font-family: "Tangerine", cursive;
    outline: none;
    border: none;
    border-radius: 5px;
    border: 2px solid #e4c5908f;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #postButton:hover {
    height: 7rem;
    background-color: transparent;
    border: 2px solid #e4c5908f;
  }
  i {
    width: 2rem;
  }

  #PostIcons {
    width: 100%;
    display: flex;
    border-top: 1px solid #e4c590c2;
    padding-top: 10px;
    justify-content: space-around;
  }
`;
