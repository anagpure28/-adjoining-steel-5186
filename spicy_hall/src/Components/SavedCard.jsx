import React from "react";
import styled from "styled-components";
import { Link, Navigate, useParams } from 'react-router-dom';
const SavedCard = ({ images, name, card,description,id }) => {
  console.log(images);
  return (
    <CardBox className="CardBox">
      <div className="Cardimage">
        <img src={images[1]} alt="" />
      </div>
      <div className="CardDetails">
        <h1>{name}</h1>
<p>{description.substring(0,100)} .... </p>
<div className="LikeSection">
<Link id="Link" to={`/recipes/${id}`}>Read More...</Link>

</div>
      </div>
    </CardBox>
  );
};

export default SavedCard;

const CardBox = styled.div`
margin: 20px;
/* border: 1px solid #e4c590c5; */
display: flex;
flex-direction: column;
padding: 25px;
grid-template-columns: repeat(2,1fr);
justify-content: space-between;
max-height: 80vh;
  overflow-y: auto;
  background-color: rgba(255, 255, 255, 0.153);
  color: white;
.Cardimage>img{
border-radius: 15px;
width: 100%;
height: 250px;
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
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}


@media (max-width: 1100px) {


  .Cardimage>img{
    height: 250px;
  }
  h1{
    font-size: 1.5rem;
  }
}

`;
