import React from "react";
import styled from "styled-components";
import { Link, Navigate, useParams } from 'react-router-dom';
const PostCard = ({ images, name, card,description,id }) => {
  console.log(images);
  return (
    <CardBox className="CardBox">
      <div className="Cardimage">
        <img src={images[1]} alt="" />
      </div>
      <div className="CardDetails">
        <h1>{name}</h1>
<p>{description.substring(0,300)} .... </p>
<div className="LikeSection">
<Link id="Link" to={`/recipes/${id}`}>Read More...</Link>
<button><i class="fa-regular fa-heart"></i></button>
<button><i class="fa-regular fa-star"></i></button>
</div>
      </div>
    </CardBox>
  );
};

export default PostCard;

const CardBox = styled.div`
margin: 50px;
/* border: 1px solid #e4c590c5; */
display: grid;
padding: 25px;
grid-template-columns: 54% 43%;
justify-content: space-between;
max-height: 80vh;
  overflow-y: auto;
  background-color: rgba(255, 255, 255, 0.153);
.Cardimage>img{
border-radius: 15px;
width: 100%;
height: 350px;
}
.CardDetails{
  border-radius: 15px;
  padding: 15px;
  
;

  justify-content: center; /* Center the content horizontally */
    align-items: center;
    text-align: left;

}
h1{
  font-size: 2.5rem;
}
.CardDetails>p{
  text-align: justify;
  margin: auto;
}
button {
  background-color: #E4C590;
  height: 50px;
  width: 50px; /* Set the width to the same value as the height */
  font-size: 20px;
  border-radius: 50px;
  padding: 10px;
  color: black;
}

#Link{
  color:#E4C590;
  

  font-size: 25px;

}
Link:hover{
  font-size: 16px;
}
.LikeSection{
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
`;
