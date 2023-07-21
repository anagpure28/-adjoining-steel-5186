import React from 'react'
import { styled } from 'styled-components'

const Comment = ({el}) => {
    console.log(el)
  return (
    
    <DIV>
        <div id='commentimg'>
            <img style={{width:"100%"}} src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png" alt="" />
        </div>
<div>
<div id='comment'>
<p>{el}dawd</p>
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
#comment{
    border: 1px solid #553007;
    border-radius: 5px;
    margin: 20px 0px 3px 0px;
    padding: 10px;
    text-align: justify;
}
#commentimg{
    width: 50px;
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