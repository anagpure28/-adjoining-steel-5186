import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, Navigate, useParams } from 'react-router-dom';
import axios from "axios";
import { color,colorScheme, useToast } from '@chakra-ui/react'
const PostCard = (data) => {
  const { images, name, card,description,_id,comment ,like}=data
  const storedData =  localStorage.getItem("spicy_hall");
  let existingData = storedData ? JSON.parse(storedData) : []
  const toast = useToast()
  const Url = "https://spicy-hall.onrender.com/recipes";
  // console.log(images);
  const [saved, setSaved] = useState(false);
const [liked,setLiked]=useState(false)
  const check = (id) => {
 
    existingData.forEach((el) => {
      if (el._id === id) {
        console.log(true,"trarwawgr")
        setSaved(true);
      }
    });
  };

 
  useEffect(() => {
    check(_id);
 
  }, []);
  
  const handelSave = async () => {
    const isProductDuplicate = existingData.some((product) => product._id === _id);
    const newData = { ...data }; // Create a copy of the data object
  
    if (!isProductDuplicate) {
      existingData.push(newData);
      localStorage.setItem("spicy_hall", JSON.stringify(existingData));
      setSaved(true);
      toast({
        title: 'Saved',
        description: 'Product has been added to saved.',
        status: 'success',
        position: 'top',
        duration: 2000,
        isClosable: true,
      });
    } else {
      existingData = existingData.filter((product) => product._id !== _id);
      localStorage.setItem("spicy_hall", JSON.stringify(existingData));
      setSaved(false);
      toast({
        title: 'Removed',
        description: 'Product has been removed from saved.',
        status: 'error',
        position: 'top',
        duration: 2000,
        isClosable: true,
      });
    }
  };
  



const LikeAdd=()=>{

  const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NGJkODg3ODY0Mjc1NGYxZmZkNDUyNzUiLCJ1c2VybmFtZSI6InN1Y2hpIiwiaWF0IjoxNjkwMTQyODUxLCJleHAiOjE2OTA3NDc2NTF9.xf0axEFiauq7r1fb23qNdtXHaUvSlqQta_F8GZdG4fA";
  console.log(_id,"token")


// Add the token to the request headers
const headers = {
  Authorization: `Bearer ${token}`,
   // Add the Content-Type header
};

axios
  .patch(`${Url}/like/${_id}`, { headers }) 
  .then((data) => {
    console.log(data, "response");
    // setChange((pre) => !pre);
  })
  .catch((error) => {
   // console.log(error);
  });
}
console.log(like,"likes",_id)
console.log(saved,"productys")




  if(comment){
  return (
    <CardBox className="CardBox">
      <div className="Cardimage">
        <img src={images[1]} alt="" />
      </div>
      <div className="CardDetails">
        <h1>{name}</h1>
<p>{description.substring(0,100)} .... </p>
<div className="LikeSection">
<Link style={{alignItems: "center"}} id="Link" to={`/recipes/${_id}`}>Read More...</Link>
  <div id="loveCon" style={{display:"flex",textAlign:"center",margin:"auto",justifyContent:"center",gap:"10px"}}>

  

<button onClick={LikeAdd}><i  class="fa-regular fa-heart"></i></button>
<h2 style={{fontWeight:"800",margin:"auto"}}>
  {like.length}
</h2></div>
<div id="loveCon" style={{display:"flex",textAlign:"center",margin:"auto"}}>



<button onClick={handelSave}>
  <i style={{color:saved?"white":"black"}} className="fa-solid fa-star"></i>
</button>
{/* <h2 style={{fontWeight:"800"}}>
  {saved?"Saved":"Save"}
</h2> */}
</div>
</div>
      </div>
    </CardBox>
  );}
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
  .black-star {
  color: black;
}
#loveCon>h2{
  font-size: 40px;
}
#loveCon{
  align-items: center;
}
.white-star {
  color: white;
}

  #saved{
    color: white;

  }
  i{
    color: white;
  }
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

}

@media (max-width: 1100px) {


  display: flex;
  flex-direction: column;

h1{
  text-align: center;
  margin: 10px;
}
}








@media (max-width: 1100px) {

padding: 15px;


h1{
  font-size: 1.5rem;
}
margin: 20px;


.Cardimage>img{
  height: 250px;
}
.LikeSection{
  margin-top: .5rem;
}

#loveCon>h2{
  font-size: 25px;
}

}


`;
