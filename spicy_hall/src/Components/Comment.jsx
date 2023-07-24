import React from 'react'
import { styled } from 'styled-components'

const Comment = (obj) => {
// console.log(obj)
  return (
    
    <DIV>
        <div id='commentimg' >
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "50px",height:"50px", background: "#4e4e4e", borderRadius: "100%", margin: "auto" }}>


  <h1 style={{ fontWeight: "800", color: "white", fontSize: "2rem", margin: "0" }}> {obj.username.substring(0, 1).toUpperCase()}
  </h1>

</div>

        </div>
<div id='comcontainer'>
<div id='username'>
<h3 style={{fontSize:"1.5rem",fontWeight:"800"}}>
  {obj.username}
</h3>
</div>
<div id='comment'>
  
<p>{obj.comment}</p>
</div>
<div id='likes'>
<i id='like' class="fa-regular fa-thumbs-up"></i>
<i id='dislike' class="fa-regular fa-thumbs-down"></i>
</div>
</div>

    </DIV>
  )
}

export default Comment
const DIV=styled.div`
color: #171819;
    border-bottom: 1px solid #17181981;
    padding-left: 10px;
    padding-right: 10px;
  display: grid;
  
grid-template-columns: 20% 80%;
  justify-content: space-between;
  align-items: center;
  p{
    font-weight: 800;
    font-size: 1.2rem;
  }
  #comcontainer{
    width: 100%;
  }
  #username{
    width: 100%;
    text-align: left;
  }
#comment{
    border: 2px solid #bfbfbf;
    background-color:#ffffff 
  ;
    border-radius: 15px;
    margin: 0px 0px 3px 0px;
    padding: 10px;
    text-align: justify;
}
#commentimg{
    width: 100%
}
#likes{
    text-align: left;
padding-left: 10px;
justify-content: center;
align-items: center;
}
#like{
  margin: 10px;
}
`